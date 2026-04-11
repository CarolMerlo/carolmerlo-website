/* =============================================================
   carolmerlo.com — Main JavaScript
   Handles: mobile nav toggle, dropdown, active nav state
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* Footer copyright year */
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* GA4: FIRE Formula video link click */
  document.querySelectorAll('.fire-formula-link').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'video_play', { video_title: 'FIRE Formula' });
      }
    });
  });

  /* GA4: Calendly CTA clicks (all pages) */
  document.querySelectorAll('a[href*="calendly.com"]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'calendly_click', { link_text: el.textContent.trim() });
      }
    });
  });

  /* GA4: Contact form submission */
  var contactForm = document.querySelector('form[name="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'contact_form_submit');
      }
    });
  }

  /* GA4: Amazon book link clicks */
  document.querySelectorAll('a[href*="amazon.com"]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'book_link_click', { link_text: el.textContent.trim() });
      }
    });
  });

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
