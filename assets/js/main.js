/* ==========================================================================
   CmDarri — site behaviour
   --------------------------------------------------------------------------
   1. Mobile navigation
   2. Footer year
   3. Store-link states (never render a dead button)
   4. Canonical / og:url, only once a real site URL is configured
   5. Catalogue rendering from data/apps.js
   6. Scroll reveal

   No frameworks. No backend. No analytics. No cookies. No network calls
   beyond the two local data files the page already loads.
   ========================================================================== */

(function () {
  'use strict';

  /* Path prefix for the current page depth. Pages inside /apps and /privacy
     set this to '../' so every generated link and image stays relative and
     the site works from any GitHub Pages sub-directory. */
  var BASE = window.CMDARRI_BASE || '';

  var CONFIG = window.CMDARRI_CONFIG || {};
  var DATA = window.CMDARRI_APPS || { publishedApps: [], developmentApps: [] };

  var PLACEHOLDER = '[ADD';

  /* ---------------------------------------------------------------- utils */

  function path(rel) {
    if (!rel) return '';
    return BASE + rel;
  }

  function escapeHtml(value) {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function el(id) {
    return document.getElementById(id);
  }

  function hasRealPlayUrl(app) {
    return !!(app.playUrl && app.playUrl.indexOf(PLACEHOLDER) === -1 && /^https?:\/\//i.test(app.playUrl));
  }

  /* A store button is only ever a real link when a real URL exists.
     Otherwise it renders inert and says so plainly. */
  function storeButton(app) {
    if (hasRealPlayUrl(app)) {
      return '<a class="btn btn-primary" href="' + escapeHtml(app.playUrl) +
             '" target="_blank" rel="noopener">Get it on Google Play</a>';
    }
    return '<span class="btn btn-pending" role="note" aria-disabled="true">' +
           'Google Play &middot; link pending</span>';
  }

  function badge(app) {
    if (app.status === 'published') {
      return '<span class="badge badge-live">Published</span>';
    }
    return '<span class="badge">In Development</span>';
  }

  /* ------------------------------------------------------- 1. mobile nav */

  function initNav() {
    var toggle = document.querySelector('.nav-toggle');
    var menu = el('mobileNav');
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('open'));
    });

    menu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') setOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 780) setOpen(false);
    });
  }

  /* -------------------------------------------------------- 2. footer year */

  function initYear() {
    var year = String(new Date().getFullYear());
    Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (node) {
      node.textContent = year;
    });
  }

  /* ------------------------------------------- 3/4. metadata + store links */

  function initCanonical() {
    var siteUrl = (CONFIG.siteUrl || '').replace(/\/+$/, '');
    if (!siteUrl || siteUrl.indexOf(PLACEHOLDER) !== -1) return;

    var canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = siteUrl + '/' + (location.pathname.split('/').pop() || 'index.html');
    document.head.appendChild(canonical);

    var ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    ogUrl.setAttribute('content', canonical.href);
    document.head.appendChild(ogUrl);
  }

  /* --------------------------------------------------- 5. catalogue render */

  function appCard(app) {
    var shots = (app.screenshots || []).slice(0, 1).map(function (shot) {
      return '<figure class="shot">' +
               '<span class="shot-corner tl"></span><span class="shot-corner br"></span>' +
               '<img src="' + escapeHtml(path(shot.src)) + '" alt="' + escapeHtml(shot.alt) +
               '" loading="lazy" decoding="async" width="230" height="512">' +
             '</figure>';
    }).join('');

    return '' +
      '<article class="app-card reveal">' +
        '<div class="app-card-top">' +
          '<img class="app-icon" src="' + escapeHtml(path(app.icon)) + '" alt="" ' +
            'loading="lazy" decoding="async" width="58" height="58">' +
          '<div class="app-card-titles">' +
            '<h3>' + escapeHtml(app.name) + '</h3>' +
            '<p class="card-tagline">' + escapeHtml(app.tagline) + '</p>' +
          '</div>' +
        '</div>' +
        '<p class="card-short">' + escapeHtml(app.short) + '</p>' +
        '<div class="card-bottom">' +
          (shots ? '<div class="shot-strip card-shot">' + shots + '</div>' : '') +
          '<div class="card-meta">' +
            '<span><span class="k">Status</span> <span class="v">' + (app.status === 'published' ? 'Published' : 'In Development') + '</span></span>' +
            '<span><span class="k">Platform</span> <span class="v">' + escapeHtml(app.platform) + '</span></span>' +
          '</div>' +
          '<div class="card-actions">' +
            (app.status === 'published'
              ? '<a class="text-link" href="' + path('apps/' + app.slug + '.html') + '">View details &rarr;</a>' +
                '<a class="text-link" href="' + path(app.privacyPage) + '">Privacy policy</a>'
              : '<span class="dim mono" style="font-size:12px;letter-spacing:.08em;text-transform:uppercase">In development</span>') +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function appRow(app) {
    return '' +
      '<li class="dev-item reveal">' +
        '<img class="app-icon" src="' + escapeHtml(path(app.icon)) + '" alt="" ' +
          'loading="lazy" decoding="async" width="46" height="46">' +
        '<div class="dev-body">' +
          '<h3>' + escapeHtml(app.name) + '</h3>' +
          '<p>' + escapeHtml(app.short) + '</p>' +
        '</div>' +
        '<p class="dev-flags">' + (app.package ? escapeHtml(app.package) + ' &middot; ' : '') +
          escapeHtml(app.platform) + ' &middot; In Development</p>' +
      '</li>';
  }

  /* Wider card used on the Apps page, with a screenshot strip. */
  function appFeatureCard(app) {
    var shots = (app.screenshots || []).map(function (shot) {
      return '<figure class="shot">' +
               '<span class="shot-corner tl"></span><span class="shot-corner br"></span>' +
               '<img src="' + escapeHtml(path(shot.src)) + '" alt="' + escapeHtml(shot.alt) +
               '" loading="lazy" decoding="async" width="230" height="512">' +
               '<figcaption>' + escapeHtml(shot.caption) + '</figcaption>' +
             '</figure>';
    }).join('');

    var features = (app.features || []).map(function (feature) {
      return '<li><strong>' + escapeHtml(feature.t) + '</strong> &mdash; ' + escapeHtml(feature.d) + '</li>';
    }).join('');

    return '' +
      '<article class="app-card reveal">' +
        '<div class="app-card-top">' +
          '<img class="app-icon" src="' + escapeHtml(path(app.icon)) + '" alt="" ' +
            'loading="lazy" decoding="async" width="58" height="58">' +
          '<div class="app-card-titles">' +
            '<h3>' + escapeHtml(app.name) + '</h3>' +
            '<p class="card-tagline">' + escapeHtml(app.tagline) + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="badge-row">' + badge(app) +
          '<span class="badge">' + escapeHtml(app.platform) + '</span>' +
          (app.package ? '<span class="badge">' + escapeHtml(app.package) + '</span>' : '') +
        '</div>' +
        '<p class="card-short">' + escapeHtml(app.summary) + '</p>' +
        '<div class="card-bottom">' +
          (features ? '<details class="drawer"><summary>Features</summary><ul class="drawer-list">' + features + '</ul></details>' : '') +
          (shots ? '<div class="shot-strip card-strip">' + shots + '</div>' : '') +
          '<div class="card-actions">' +
            storeButton(app) +
            '<a class="text-link" href="' + path('apps/' + app.slug + '.html') + '">Details &rarr;</a>' +
            '<a class="text-link" href="' + path(app.privacyPage) + '">Privacy policy</a>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function render() {
    var grid = el('publishedGrid');
    if (grid) {
      grid.innerHTML = DATA.publishedApps.map(appCard).join('');
    }

    var gridFull = el('publishedGridFull');
    if (gridFull) {
      gridFull.innerHTML = DATA.publishedApps.map(appFeatureCard).join('');
    }

    var devList = el('devList');
    if (devList) {
      devList.innerHTML = DATA.developmentApps.map(appRow).join('');
    }

    var policyList = el('policyList');
    if (policyList) {
      policyList.innerHTML = DATA.publishedApps.map(function (app) {
        return '' +
          '<li class="index-row">' +
            '<div class="index-inner">' +
              '<img class="app-icon" src="' + escapeHtml(path(app.icon)) + '" alt="" ' +
                'loading="lazy" decoding="async" width="44" height="44">' +
              '<div class="index-body">' +
                '<h3>' + escapeHtml(app.name) + '</h3>' +
                '<p>' + escapeHtml(app.privacyUpdated ? 'Last updated ' + app.privacyUpdated : 'Application privacy policy') + '</p>' +
              '</div>' +
              '<div class="index-links">' +
                '<a href="' + path(app.privacyPage) + '">Read policy</a>' +
                '<a class="go" href="' + path('apps/' + app.slug + '.html') + '">App &rarr;</a>' +
              '</div>' +
            '</div>' +
          '</li>';
      }).join('');
    }
  }

  /* ------------------------------------------------------- 6. scroll reveal */

  function initReveal() {
    var targets = document.querySelectorAll(
      '.hero-grid, .page-hero > .wrap > *, .section-head, .head-row, .split > *, ' +
      '.app-card, .dev-item, .principle, .team-card, .contact-panel, .prose-block, ' +
      '.policy-toc, .detail-head, .aside-block, .shot-strip, .index-row, .footer-grid'
    );

    Array.prototype.forEach.call(targets, function (node) {
      node.classList.add('reveal');
    });

    if (!('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(targets, function (node) {
        node.classList.add('in');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    Array.prototype.forEach.call(targets, function (node) {
      observer.observe(node);
    });
  }

  /* ------------------------------------------------------------------ boot */

  function boot() {
    initNav();
    initYear();
    initCanonical();
    render();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
