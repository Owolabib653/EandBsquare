/* Shared navigation, footer, and site-wide helpers for E & B Square Properties Limited. */
(function () {
  'use strict';

  var currentPage = document.body.getAttribute('data-page') || '';

  var NAV_LINKS = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'about.html', label: 'About', key: 'about' },
    { href: 'services.html', label: 'Services', key: 'services' },
    { href: 'projects.html', label: 'Projects', key: 'projects' },
    { href: 'blog.html', label: 'Blog', key: 'blog' },
    { href: 'contact.html', label: 'Contact', key: 'contact' }
  ];

  var SERVICES = [
    ['service-residential', 'Residential Construction'],
    ['service-commercial', 'Commercial Construction'],
    ['service-industrial', 'Industrial Construction'],
    ['service-civil', 'Civil Engineering'],
    ['service-road', 'Road Construction'],
    ['service-renovation', 'Building Renovation'],
    ['service-project-mgmt', 'Project Management'],
    ['service-structural', 'Structural Engineering'],
    ['service-architecture', 'Architecture'],
    ['service-interior', 'Interior Finishing'],
    ['service-property', 'Property Development'],
    ['service-maintenance', 'Maintenance Services']
  ];

  var isActive = function (key) { return key === currentPage; };

  function desktopLinks() {
    return NAV_LINKS.map(function (l) {
      var cls = 'nav-link' + (isActive(l.key) ? ' active' : '');
      if (l.key === 'services') {
        return '<div class="relative group">' +
          '<a href="' + l.href + '" class="' + cls + ' flex items-center gap-1">Services' +
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>' +
          '</a>' +
          '<div class="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[520px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">' +
          '<div class="bg-white text-[var(--text)] rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-1">' +
          SERVICES.map(function (s) {
            return '<a href="services.html#' + s[0] + '" class="px-3 py-2.5 rounded-lg hover:bg-[var(--gray)] text-sm">' + s[1] + '</a>';
          }).join('') +
          '</div></div></div>';
      }
      return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
    }).join('');
  }

  function mobileLinks() {
    return NAV_LINKS.map(function (l) {
      var cls = 'hover:text-white transition' + (isActive(l.key) ? ' font-semibold text-white' : '');
      return '<a href="' + l.href + '" class="' + cls + '">' + l.label + '</a>';
    }).join('');
  }

  function buildNav() {
    return '' +
      '<header id="siteNav" class="component-nav' + (currentPage !== 'home' ? ' solid' : '') + '">' +
      '  <div class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">' +
      '    <a href="index.html" class="flex items-center gap-2.5">' +
      '      <img src="Logo.png" alt="E &amp; B Square Properties logo" class="w-9 h-9 object-contain" loading="eager">' +
      '      <span class="font-display font-bold text-white text-lg tracking-tight nav-brand">E&amp;B <span class="font-normal opacity-80 text-sm hidden sm:inline">SQUARE PROPERTIES LTD</span></span>' +
      '    </a>' +
      '    <nav class="hidden lg:flex items-center gap-8 font-utility text-sm text-white/90">' +
      desktopLinks() +
      '    </nav>' +
      '    <div class="flex items-center gap-3">' +
      '      <button id="darkToggle" aria-label="Toggle dark mode" class="hidden sm:flex w-9 h-9 rounded-full border border-white/25 items-center justify-center text-white hover:border-white/60 transition">' +
      '        <svg id="iconMoon" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>' +
      '      </button>' +
      '      <a href="contact.html" class="hidden md:inline-flex btn-gold font-utility font-semibold text-sm px-5 py-2.5 cut-corner-sm">Request a Quote</a>' +
      '      <button id="mobileBtn" class="lg:hidden text-white w-9 h-9 flex items-center justify-center" aria-label="Open menu">' +
      '        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
      '      </button>' +
      '    </div>' +
      '  </div>' +
      '  <div id="mobileMenu" class="lg:hidden hidden bg-[var(--navy-deep)] px-6 pb-6 pt-2 font-utility text-white/90 text-sm">' +
      '    <div class="flex items-center justify-between py-2">' +
      '      <span class="text-xs tracking-[0.3em] text-white/60 font-semibold">MENU</span>' +
      '      <button id="mobileClose" class="text-white/80 hover:text-white" aria-label="Close menu">' +
      '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>' +
      '      </button>' +
      '    </div>' +
      '    <div class="flex flex-col gap-4 pt-2">' +
      mobileLinks() +
      '      <a href="contact.html" class="btn-gold text-center font-semibold px-5 py-2.5 cut-corner-sm mt-1">Request a Quote</a>' +
      '    </div>' +
      '  </div>' +
      '</header>';
  }

  function buildFooter() {
    return '' +
      '<footer class="text-white pt-20 pb-8" style="background:var(--navy-deep)">' +
      '  <div class="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-4 gap-10 mb-14">' +
      '    <div>' +
      '      <div class="flex items-center gap-2.5 mb-4">' +
      '        <img src="Logo.png" alt="E &amp; B Square Properties logo" class="w-9 h-9 object-contain" loading="lazy">' +
      '        <span class="font-display font-bold text-lg">E&amp;B Square Properties Limited</span>' +
      '      </div>' +
      '      <p class="text-white/60 text-sm leading-relaxed mb-5">Building excellence and delivering quality across Nigeria for over Almost 20 years.</p>' +
      '    </div>' +
      '    <div>' +
      '      <p class="font-utility font-semibold text-sm mb-4 tracking-wide">QUICK LINKS</p>' +
      '      <div class="flex flex-col gap-2.5 text-sm text-white/60">' +
      '        <a href="about.html" class="hover:text-white transition">About Us</a>' +
      '        <a href="projects.html" class="hover:text-white transition">Projects</a>' +
      '        <a href="blog.html" class="hover:text-white transition">Blog</a>' +
      '        <a href="contact.html" class="hover:text-white transition">Contact</a>' +
      '      </div>' +
      '    </div>' +
      '    <div>' +
      '      <p class="font-utility font-semibold text-sm mb-4 tracking-wide">SERVICES</p>' +
      '      <div class="flex flex-col gap-2.5 text-sm text-white/60">' +
      SERVICES.slice(0, 4).map(function (s) {
        return '<a href="services.html#' + s[0] + '" class="hover:text-white transition">' + s[1] + '</a>';
      }).join('') +
      '        <a href="services.html" class="hover:text-white transition">All Services</a>' +
      '      </div>' +
      '    </div>' +
      '    <div>' +
      '      <p class="font-utility font-semibold text-sm mb-4 tracking-wide">NEWSLETTER</p>' +
      '      <p class="text-white/60 text-sm mb-4">Project updates and industry insight, occasionally.</p>' +
      '      <form class="flex" onsubmit="event.preventDefault(); this.reset(); alert(\'Subscribed.\');">' +
      '        <input required type="email" placeholder="Email address" class="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-3 py-2.5 text-sm placeholder-white/40 focus:outline-none">' +
      '        <button class="btn-gold px-4 rounded-r-lg text-sm font-semibold">Join</button>' +
      '      </form>' +
      '    </div>' +
      '  </div>' +
      '  <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/45">' +
      '    <p>© <span id="year"></span> E &amp; B Square Properties Limited. All rights reserved.</p>' +
      '    <div class="flex gap-6"><a href="#" class="hover:text-white/80">Privacy Policy</a><a href="#" class="hover:text-white/80">Terms &amp; Conditions</a></div>' +
      '  </div>' +
      '</footer>';
  }

  /* Inject header + footer */
  var navSlot = document.getElementById('siteNav');
  var footerSlot = document.getElementById('siteFooter');
  if (navSlot) navSlot.outerHTML = buildNav();
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  document.getElementById('year').textContent = new Date().getFullYear();

  /* Nav scroll style */
  var nav = document.getElementById('siteNav');
  function onScroll() {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
    var btt = document.getElementById('backToTop');
    if (btt) btt.classList.toggle('show', window.scrollY > 500);
  }
  document.addEventListener('scroll', onScroll);
  onScroll();

  /* Mobile menu */
  var mobileMenu = document.getElementById('mobileMenu');
  var openBtn = document.getElementById('mobileBtn');
  var closeBtn = document.getElementById('mobileClose');
  function open() { mobileMenu.classList.remove('hidden'); }
  function close() { mobileMenu.classList.add('hidden'); }
  openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });

  /* Dark mode */
  var darkToggle = document.getElementById('darkToggle');
  darkToggle.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark');
  });

  /* Back to top */
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();