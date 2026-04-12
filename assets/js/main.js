/* =============================================================
   carolmerlo.com — Main JavaScript
   Handles: mobile nav toggle, dropdown, active nav state
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* Footer copyright year */
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* GA4 click tracking helper */
  function trackClicks(selector, eventName, getParams) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.addEventListener('click', function () {
        if (typeof gtag === 'function') {
          gtag('event', eventName, getParams ? getParams(el) : undefined);
        }
      });
    });
  }

  trackClicks('.fire-formula-link', 'video_play', function () {
    return { video_title: 'FIRE Formula' };
  });
  trackClicks('a[href*="calendly.com"]', 'calendly_click', function (el) {
    return { link_text: el.textContent.trim() };
  });
  trackClicks('a[href*="amazon.com"]', 'book_link_click', function (el) {
    return { link_text: el.textContent.trim() };
  });

  /* GA4: contact form submit (not a click) */
  var contactForm = document.querySelector('form[name="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'contact_form_submit');
      }
    });
  }

  /* -----------------------------------------------------------
     Email Signup Popup
     ----------------------------------------------------------- */
  (function () {
    var COOKIE     = 'cm_popup_seen';
    var DELAY      = 10000;
    var MS_PER_DAY = 86400000;
    var lastFocus  = null;

    function getCookie(name) {
      return document.cookie.split('; ').some(function (c) {
        return c.indexOf(name + '=') === 0;
      });
    }
    function setCookie(name, days) {
      var exp = new Date(Date.now() + days * MS_PER_DAY).toUTCString();
      document.cookie = name + '=1; expires=' + exp + '; path=/; Secure; SameSite=Lax';
    }

    var popup   = document.getElementById('subscribe-popup');
    var trigger = document.getElementById('footer-subscribe-trigger');

    if (!popup) return;

    var closeBtn   = popup.querySelector('.popup-close');
    var emailInput = popup.querySelector('input[type="email"]');

    function openPopup(fromEl) {
      lastFocus = fromEl || document.activeElement;
      popup.removeAttribute('hidden');
      document.body.classList.add('popup-open');
      if (emailInput) emailInput.focus();
    }
    function closePopup() {
      popup.setAttribute('hidden', '');
      document.body.classList.remove('popup-open');
      setCookie(COOKIE, 30);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    if (closeBtn) closeBtn.addEventListener('click', closePopup);
    popup.addEventListener('click', function (e) {
      if (e.target === popup) closePopup();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !popup.hasAttribute('hidden')) closePopup();
    });

    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openPopup(trigger);
      });
    }

    /* Auto-open on homepage only, once per 30 days */
    var isHomepage = window.location.pathname === '/' || window.location.pathname === '/index.html';
    if (isHomepage && !getCookie(COOKIE)) {
      setTimeout(function () { openPopup(null); }, DELAY);
    }
  }());

  /* -----------------------------------------------------------
     Mobile Navigation Toggle (hamburger)
     ----------------------------------------------------------- */
  var hamburger = document.querySelector('.nav-hamburger');
  var navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('nav-menu--open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* -----------------------------------------------------------
     Work With Me Dropdown
     ----------------------------------------------------------- */
  var dropdown       = document.querySelector('.nav-dropdown');
  var dropdownToggle = document.querySelector('.nav-dropdown-toggle');

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = dropdown.classList.toggle('nav-dropdown--open');
      dropdownToggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close when clicking outside */
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('nav-dropdown--open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('nav-dropdown--open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------------------
     Close mobile nav when any nav link is clicked
     ----------------------------------------------------------- */
  var navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) navMenu.classList.remove('nav-menu--open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* -----------------------------------------------------------
     Active nav link — highlight current page
     ----------------------------------------------------------- */
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  var allNavLinks = document.querySelectorAll('.nav-menu a, .nav-dropdown-menu a');

  allNavLinks.forEach(function (link) {
    var linkPath = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });

  /* Mark Work With Me dropdown toggle active when on a sub-page */
  var dropdownSubLinks = document.querySelectorAll('.nav-dropdown-menu a');
  var toggle = document.querySelector('.nav-dropdown-toggle');
  dropdownSubLinks.forEach(function (link) {
    var linkPath = link.getAttribute('href').replace(/\/$/, '');
    if (linkPath === currentPath && toggle) {
      toggle.classList.add('active');
    }
  });

});
