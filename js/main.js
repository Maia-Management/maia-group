// File: maia-group/js/main.js
/* ==========================================================================
   The Maia Group — Main JavaScript
   ========================================================================== */

(function () {
  document.documentElement.classList.remove('no-js');
})();

(function () {
  'use strict';

  // ── Translations ──────────────────────────────────────────────────────
  var translations = {
    es: {
      'nav.about': 'Nosotros',
      'nav.companies': 'Empresas',
      'nav.contact': 'Contacto',
      'hero.tagline': 'Construyendo el Futuro de Santa Marta',
      'hero.sub': 'Grupo empresarial diversificado &middot; 18 marcas &middot; 1 visi\u00f3n',
      'hero.cta': 'Conoce Nuestras Empresas',
      'about.tag': 'Qui\u00e9nes Somos',
      'about.title': 'Un ecosistema de empresas construido para la costa Caribe',
      'about.p1': 'Maia Management S.A.S. es un grupo empresarial con sede en Santa Marta, Colombia. Desde la costa Caribe colombiana, operamos un portafolio diversificado de empresas enfocadas en talento humano, servicios legales, bienes ra\u00edces, formaci\u00f3n profesional, construcci\u00f3n naval, bebidas artesanales, comercio local y turismo.',
      'about.p2': 'Cada marca dentro de nuestro ecosistema funciona de manera independiente, pero comparte una filosof\u00eda com\u00fan: crear oportunidades reales, servicios de clase mundial y un impacto positivo en la regi\u00f3n. Conectamos el talento local con oportunidades globales y construimos infraestructura empresarial donde m\u00e1s se necesita.',
      'stat.companies': 'Empresas',
      'stat.industries': 'Industrias',
      'stat.vision': 'Visi\u00f3n',
      'leadership.title': 'Liderazgo',
      'leadership.ceo': 'Director Ejecutivo',
      'leadership.coo': 'Directora de Operaciones',
      'brands.tag': 'Nuestro Ecosistema',
      'brands.title': 'Las Empresas del Grupo',
      'brands.subtitle': 'Cada marca opera de forma independiente, respaldada por la solidez del grupo.',
      'brand.management.desc': 'Vert™ — la capa agéntica que opera 17 negocios',
      'brand.legal.desc': 'Servicios jur\u00eddicos para empresas y expatriados',
      'brand.juridica.desc': 'Servicios jur\u00eddicos en espa\u00f1ol para empresas y personas',
      'brand.contable.desc': 'Contabilidad y servicios tributarios para empresas',
      'brand.marketing.desc': 'Agencia de marketing y comunicaci\u00f3n digital',
      'brand.realty.desc': 'Bienes ra\u00edces en la costa Caribe colombiana',
      'brand.masters.desc': 'Desarrollo profesional y masterclasses',
      'brand.bevida.desc': 'Bebidas bot\u00e1nicas y productos para cocteler\u00eda',
      'brand.botanicas.desc': 'Bot\u00e1nicas artesanales y productos naturales',
      'brand.lleva.desc': 'Clasificados locales y marketplace',
      'brand.marine.desc': 'Construcci\u00f3n naval y operaciones mar\u00edtimas',
      'brand.sanatorio.desc': 'Venue de tres zonas &middot; bar, cocina y experiencia inmersiva',
      'brand.ruta.desc': 'Turismo, viajes y experiencias en Colombia',
      'brand.sushi.desc': 'Sushi callejero de autor',
      'brand.recruitment.desc': 'Adquisición de talento bilingüe y headhunting',
      'brand.chuzo.desc': 'Barra de yakitori dentro de El Sanatorio',
      'brand.asasando.desc': 'Sándwiches japoneses en pan de leche',
      'brand.maisonyumi.desc': 'Despensa asiática fermentada artesanal',
      'brand.coming-soon': 'En desarrollo',
      'cookie.title': 'Aviso de privacidad y cookies',
      'cookie.text': 'Conforme a la <strong>Ley 1581 de 2012</strong> y el Decreto 1377 de 2013 de Colombia, <strong>Maia Management S.A.S.</strong> (NIT 901.862.977-7), con domicilio en Calle 24 #3-99, Edificio Banco de Bogot\u00e1, Suite 1102, Level 11, Santa Marta, Magdalena, Colombia, usa cookies t\u00e9cnicas estrictamente necesarias para el funcionamiento del sitio. Al continuar navegando aceptas el tratamiento de tus datos seg\u00fan nuestra <a href="/privacidad">Pol\u00edtica de Privacidad</a>.',
      'cookie.accept': 'Aceptar',
      'cookie.reject': 'Rechazar',
      'contact.tag': 'Contacto',
      'contact.title': 'Hablemos',
      'contact.text': '\u00bfInteresado en saber m\u00e1s sobre The Maia Group o alguna de nuestras empresas? Estamos aqu\u00ed para atender tus consultas.',
      'contact.email-label': 'Email',
      'contact.location-label': 'Ubicaci\u00f3n',
      'contact.hours-label': 'Horario',
      'contact.hours-value': 'Lun \u2013 Vie: 8:00 \u2013 18:00 COT',
      'contact.location-value': 'Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Piso 11, Santa Marta, Magdalena, Colombia',
      'form.name': 'Nombre',
      'form.name-placeholder': 'Tu nombre completo',
      'form.email-placeholder': 'tu@email.com',
      'form.company': 'Empresa de inter\u00e9s',
      'form.general': 'Consulta general',
      'form.message': 'Mensaje',
      'form.message-placeholder': '\u00bfEn qu\u00e9 podemos ayudarte?',
      'form.submit': 'Enviar Mensaje',
      'footer.tagline': 'Construyendo el futuro de Santa Marta, una empresa a la vez.',
      'footer.companies': 'Empresas',
      'footer.group': 'Grupo',
      'footer.legal': 'Legal',
      'footer.privacy': 'Pol\u00edtica de Privacidad',
      'footer.terms': 'T\u00e9rminos de Uso',
      'footer.copyright': '\u00a9 2026 Maia Management S.A.S. &middot; NIT 901.862.977-7 &middot; Todos los derechos reservados.',
      'footer.address': 'Calle 24 #3-99, Edificio Banco de Bogot\u00e1, Suite 1102, Level 11 &middot; Santa Marta, Magdalena, Colombia',
      'whatsapp.label': 'WhatsApp'
    },
    en: {
      'nav.about': 'About',
      'nav.companies': 'Companies',
      'nav.contact': 'Contact',
      'hero.tagline': 'Building the Future of Santa Marta',
      'hero.sub': 'Diversified business group &middot; 18 brands &middot; 1 vision',
      'hero.cta': 'Explore Our Companies',
      'about.tag': 'About Us',
      'about.title': 'An ecosystem of companies built for the Caribbean coast',
      'about.p1': 'Maia Management S.A.S. is a business group headquartered in Santa Marta, Colombia. From the Colombian Caribbean coast, we operate a diversified portfolio of companies focused on human talent, legal services, real estate, professional education, naval construction, artisan beverages, local commerce, and tourism.',
      'about.p2': 'Each brand within our ecosystem operates independently, but shares a common philosophy: creating real opportunities, world-class services, and a positive impact on the region. We connect local talent with global opportunities and build business infrastructure where it is needed most.',
      'stat.companies': 'Companies',
      'stat.industries': 'Industries',
      'stat.vision': 'Vision',
      'leadership.title': 'Leadership',
      'leadership.ceo': 'Chief Executive Officer',
      'leadership.coo': 'Chief Operating Officer',
      'brands.tag': 'Our Ecosystem',
      'brands.title': 'Group Companies',
      'brands.subtitle': 'Each brand operates independently, backed by the strength of the group.',
      'brand.management.desc': 'Vert™ — the agentic stack we built to run 17 businesses',
      'brand.legal.desc': 'Legal services for companies and expatriates',
      'brand.juridica.desc': 'Legal services in Spanish for companies and individuals',
      'brand.contable.desc': 'Accounting and tax services for businesses',
      'brand.marketing.desc': 'Marketing and digital communications agency',
      'brand.realty.desc': 'Real estate on the Colombian Caribbean coast',
      'brand.masters.desc': 'Professional development and masterclasses',
      'brand.bevida.desc': 'Botanical beverages and mixology products',
      'brand.botanicas.desc': 'Artisan botanicals and natural products',
      'brand.lleva.desc': 'Local classifieds and marketplace',
      'brand.marine.desc': 'Boat manufacturing and maritime operations',
      'brand.sanatorio.desc': 'Three-zone venue &middot; bar, food and immersive experience',
      'brand.ruta.desc': 'Tourism, travel and experiences in Colombia',
      'brand.sushi.desc': 'Artisan street sushi',
      'brand.recruitment.desc': 'Bilingual talent acquisition &amp; headhunting',
      'brand.chuzo.desc': 'Yakitori counter takeover inside El Sanatorio',
      'brand.asasando.desc': 'Japanese fluffy milk bread sandwiches',
      'brand.maisonyumi.desc': 'Artisan fermented Asian pantry',
      'brand.coming-soon': 'In development',
      'cookie.title': 'Privacy &amp; cookie notice',
      'cookie.text': 'In accordance with <strong>Law 1581 of 2012</strong> and Decree 1377 of 2013 of Colombia, <strong>Maia Management S.A.S.</strong> (NIT 901.862.977-7), domiciled at Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Level 11, Santa Marta, Magdalena, Colombia, uses strictly necessary technical cookies for the operation of this site. By continuing to browse, you accept the processing of your data under our <a href="/privacidad">Privacy Policy</a>.',
      'cookie.accept': 'Accept',
      'cookie.reject': 'Reject',
      'contact.tag': 'Contact',
      'contact.title': "Let's Talk",
      'contact.text': 'Interested in learning more about The Maia Group or any of our companies? We are here to answer your inquiries.',
      'contact.email-label': 'Email',
      'contact.location-label': 'Location',
      'contact.hours-label': 'Hours',
      'contact.hours-value': 'Mon \u2013 Fri: 8:00 AM \u2013 6:00 PM COT',
      'contact.location-value': 'Calle 24 #3-99, Edificio Banco de Bogotá, Suite 1102, Floor 11, Santa Marta, Magdalena, Colombia',
      'form.name': 'Name',
      'form.name-placeholder': 'Your full name',
      'form.email-placeholder': 'you@email.com',
      'form.company': 'Company of interest',
      'form.general': 'General inquiry',
      'form.message': 'Message',
      'form.message-placeholder': 'How can we help you?',
      'form.submit': 'Send Message',
      'footer.tagline': 'Building the future of Santa Marta, one company at a time.',
      'footer.companies': 'Companies',
      'footer.group': 'Group',
      'footer.legal': 'Legal',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms of Use',
      'footer.copyright': '\u00a9 2026 Maia Management S.A.S. &middot; NIT 901.862.977-7 &middot; All rights reserved.',
      'footer.address': 'Calle 24 #3-99, Edificio Banco de Bogot\u00e1, Suite 1102, Level 11 &middot; Santa Marta, Magdalena, Colombia',
      'whatsapp.label': 'WhatsApp'
    }
  };

  // Default language: pages declare `<html data-lang-default="en">` to start in English
  // (the standalone /en/ page). Anything else starts in Spanish. The ?lang=en URL
  // parameter is still honoured as a soft override for legacy inbound links.
  var docLangDefault = document.documentElement.getAttribute('data-lang-default') === 'en' ? 'en' : 'es';
  var urlLang = new URLSearchParams(window.location.search).get('lang');
  var currentLang = urlLang === 'en' ? 'en' : (urlLang === 'es' ? 'es' : docLangDefault);

  // Legacy `/?lang=en` URLs (and the inverse) should land on the canonical indexable
  // page. Only redirect on pages that have a real sibling — the home pair — to avoid
  // bouncing the legal/success/404 pages, which only exist in Spanish.
  if (document.documentElement.getAttribute('data-lang-toggle') === 'navigate' &&
      urlLang && urlLang !== docLangDefault) {
    var target = urlLang === 'en' ? '/en/' : '/';
    window.location.replace(target);
    return;
  }

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    var t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    // Update WhatsApp FAB aria-label
    var fab = document.querySelector('.whatsapp-fab');
    if (fab) {
      fab.setAttribute('aria-label',
        lang === 'en' ? 'Chat with us on WhatsApp' : 'Chatea con nosotros en WhatsApp');
    }

    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

    // Per-page title + meta description: read from <html data-title-es/-en> and
    // data-desc-es/-en on the current page so legal/success pages keep their
    // own titles instead of being clobbered by the home title.
    var root = document.documentElement;
    var titleEs = root.getAttribute('data-title-es');
    var titleEn = root.getAttribute('data-title-en');
    var descEs  = root.getAttribute('data-desc-es');
    var descEn  = root.getAttribute('data-desc-en');

    if (titleEs && titleEn) {
      document.title = lang === 'en' ? titleEn : titleEs;
    }

    if (descEs && descEn) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', lang === 'en' ? descEn : descEs);
    }
  }

  // ── Navigation scroll effect ──────────────────────────────────────────
  var nav = document.getElementById('nav');

  // FIX #4: Keep --nav-height CSS variable in sync with the actual rendered
  // nav height so scroll-margin-top always matches reality.
  function syncNavHeight() {
    if (!nav) return;
    var h = nav.offsetHeight;
    document.documentElement.style.setProperty('--nav-height', h + 'px');
  }

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    // Re-sync after the padding transition settles (400 ms matches CSS transition)
    syncNavHeight();
  }

  if (nav) {
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    window.addEventListener('resize', syncNavHeight, { passive: true });
    handleNavScroll();
    syncNavHeight();
  }

  // ── Mobile menu toggle ────────────────────────────────────────────────
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('nav__toggle--active');
      navLinks.classList.toggle('nav__links--mobile-open');
      document.body.style.overflow = navLinks.classList.contains('nav__links--mobile-open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('nav__toggle--active');
        navLinks.classList.remove('nav__links--mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Language toggle ───────────────────────────────────────────────────
  // Apply language on page load (picks up ?lang=en from URL)
  applyLang(currentLang);

  // Language toggle behaviour:
  //   `<html data-lang-toggle="navigate">` (set on /index.html and /en/index.html)
  //     → toggle navigates between the two indexable language URLs ('/' ↔ '/en/').
  //   anywhere else (legal/success/404) → toggle does the legacy in-page swap so
  //     those side pages still respond without needing duplicate /en/ copies.
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    var toggleMode = document.documentElement.getAttribute('data-lang-toggle');

    langToggle.addEventListener('click', function () {
      var newLang = currentLang === 'es' ? 'en' : 'es';

      if (toggleMode === 'navigate') {
        window.location.href = newLang === 'en' ? '/en/' : '/';
        return;
      }

      applyLang(newLang);
    });
  }

  // ── Smooth scroll for anchor links ────────────────────────────────────
  // FIX #4: Use the live --nav-height CSS variable value so the manual
  // scrollTo offset always matches the current nav size (expanded vs scrolled).
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        // Read the synced nav height from the CSS variable (already a number in px)
        var navH = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10
        ) || (nav ? nav.offsetHeight : 72);
        // 24 px matches the extra breathing room in scroll-padding-top
        var offset = navH + 24;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ── Scroll reveal animations ──────────────────────────────────────────
  function initReveal() {
    var prefersReducedMotion = window.matchMedia &&
                               window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('.about, .contact').forEach(function (el) {
      el.classList.add('reveal');
    });

    var brandsHeader = document.querySelector('.brands__header');
    if (brandsHeader) brandsHeader.classList.add('reveal');

    var brandsGrid = document.querySelector('.brands__grid');
    if (brandsGrid) brandsGrid.classList.add('reveal-stagger');

    var footerTop = document.querySelector('.footer__top');
    if (footerTop) footerTop.classList.add('reveal');

    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      document.querySelectorAll('.reveal-stagger').forEach(function (el) {
        el.classList.add('reveal-stagger--visible');
      });
      return;
    }

    var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -60px 0px' };

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      document.querySelectorAll('.reveal-stagger').forEach(function (el) {
        el.classList.add('reveal-stagger--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal')) {
            entry.target.classList.add('reveal--visible');
          }
          if (entry.target.classList.contains('reveal-stagger')) {
            entry.target.classList.add('reveal-stagger--visible');
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ── Contact form handling ─────────────────────────────────────────────
  // FIX #1: The form now has action="/success" so Netlify handles the POST
  // and redirects to /success instead of its default (broken) thank-you URL.
  // We keep the JS-only dev-mode simulation for local file:// testing.
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      // Only intercept on local file:// — on Netlify let the native POST through.
      if (window.location.protocol === 'file:') {
        e.preventDefault();
        var submitBtn = contactForm.querySelector('.form-submit');
        var originalHTML = submitBtn.innerHTML;
        var successMsg = currentLang === 'en' ? 'Message sent! \u2713' : '\u00a1Mensaje enviado! \u2713';
        submitBtn.innerHTML = successMsg;
        submitBtn.style.background = '#2E7D4B';
        setTimeout(function () {
          submitBtn.innerHTML = originalHTML;
          submitBtn.style.background = '';
          contactForm.reset();
        }, 3000);
      }
    });
  }

  // ── Active nav link on scroll ─────────────────────────────────────────
  var sectionIds = ['nosotros', 'empresas', 'contacto'];
  var navLinksAll = document.querySelectorAll('.nav__link');

  function updateActiveLink() {
    if (!nav) return;
    var scrollPos = window.scrollY + nav.offsetHeight + 100;
    sectionIds.forEach(function (id, index) {
      var section = document.getElementById(id);
      if (section) {
        var top = section.offsetTop;
        var bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          navLinksAll.forEach(function (link) { link.classList.remove('nav__link--active'); });
          if (navLinksAll[index]) navLinksAll[index].classList.add('nav__link--active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });

  // ── Cookie consent (Ley 1581 de 2012, Colombia) ───────────────────────
  function initCookieBanner() {
    var banner = document.getElementById('cookieBanner');
    if (!banner) return;

    var STORAGE_KEY = 'maia-cookie-consent';
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (err) { stored = null; }

    if (stored === 'accepted' || stored === 'rejected') return;

    banner.hidden = false;
    // Force reflow before adding visibility class so the slide-in transition runs
    void banner.offsetHeight;
    requestAnimationFrame(function () {
      banner.classList.add('cookie-banner--visible');
    });

    function dismiss(value) {
      try { localStorage.setItem(STORAGE_KEY, value); } catch (err) { /* ignore */ }
      banner.classList.remove('cookie-banner--visible');
      setTimeout(function () { banner.hidden = true; }, 450);
    }

    var acceptBtn = document.getElementById('cookieAccept');
    var rejectBtn = document.getElementById('cookieReject');
    if (acceptBtn) acceptBtn.addEventListener('click', function () { dismiss('accepted'); });
    if (rejectBtn) rejectBtn.addEventListener('click', function () { dismiss('rejected'); });
  }

  // ── Init ──────────────────────────────────────────────────────────────
  function init() {
    applyLang(currentLang);
    initReveal();
    updateActiveLink();
    syncNavHeight();
    // initCookieBanner() removed — superseded by consent-banner.js (Consent Mode v2, default-denied).
    // The legacy #cookieBanner markup stays inert (hidden, never un-hidden). Safe to delete in a cleanup pass.
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
