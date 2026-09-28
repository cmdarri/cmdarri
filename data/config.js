/* ==========================================================================
   CmDarri — organisation configuration
   Single source of truth for brand, contact and site-wide metadata.
   Edit the values below; every page reads from this file.
   ========================================================================== */

window.CMDARRI_CONFIG = {

  /* ---- Identity ---- */
  organizationName: 'CmDarri',
  tagline: 'Software Development',
  founder: 'VaiTns',

  /* Factual, verifiable positioning. No inflated claims. */
  shortDescription:
    'Quality software and applications at affordable prices.',

  aboutLead:
    'CmDarri is a small software development organization that builds practical ' +
    'applications with a focus on quality, accessibility and affordable software.',

  /* ---- Contact ---- */
  email: 'kcskab47@gmail.com',

  /* ---- Site ---- */
  /* Absolute URL of the published site, with no trailing slash.
     Example: 'https://cmdarri.github.io/CmDarri'
     Leave as '' until the repository is published. Canonical + og:url tags
     are injected only when this is filled in, so no placeholder ever
     appears on a live page. */
  siteUrl: '',

  /* ---- Store links ---- */
  /* Google Play listing URLs live on each app in /data/apps.js, as `playUrl`.
     All three published apps are listed:
       Bulk Vid to MP3 Converter Free  com.oncegovt.mp3
       FrameLock - Ageing TimeLapse    com.vaitns.framelock
       CmDarri - Offline AI            com.oa
     If an app is ever delisted, set its playUrl back to the placeholder string
     '[ADD GOOGLE PLAY URL]' and the UI renders a non-clickable "link pending"
     state instead of a dead button. */

  /* ---- Navigation ---- */
  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'Apps', href: 'apps.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Contact', href: 'contact.html' },
    { label: 'Privacy', href: 'privacy.html' }
  ]
};
