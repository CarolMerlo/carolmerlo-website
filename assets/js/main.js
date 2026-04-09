/* =============================================================
   carolmerlo.com — Main JavaScript
   Handles: mobile nav toggle, dropdown behavior
   ============================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------------
     Mobile Navigation Toggle
     ----------------------------------------------------------- */
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu   = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('nav-menu--open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });
  }

  /* -----------------------------------------------------------
     Work With Me Dropdown (keyboard + click accessible)
     ----------------------------------------------------------- */
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  const dropdown       = document.querySelector('.nav-dropdown');

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      const isOpen = dropdown.classList.toggle('nav-dropdown--open');
      dropdownToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('nav-dropdown--open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------------------
     Close mobile nav when a link is clicked
     ----------------------------------------------------------- */
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navMenu) navMenu.classList.remove('nav-menu--open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
  });

});
