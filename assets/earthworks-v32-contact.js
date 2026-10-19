/* Direct quote entry lands on the existing Contact form, below the sticky header. */
(function () {
  'use strict';
  const target = document.getElementById('contact-form');
  if (!target) return;
  const isFormEntry = () => location.hash === '#contact-form';
  function alignForm() {
    if (!isFormEntry()) return;
    const header = document.querySelector('.ew17-header');
    const offset = (header ? header.offsetHeight : 0) + 20;
    const top = Math.max(0, window.scrollY + target.getBoundingClientRect().top - offset);
    window.scrollTo({top, behavior:'instant'});
  }
  function settleAndAlign() { requestAnimationFrame(() => requestAnimationFrame(alignForm)); }
  // The final load alignment includes the existing yard images and responsive header.
  if (document.readyState === 'complete') settleAndAlign();
  else window.addEventListener('load', settleAndAlign, {once:true});
  settleAndAlign();
  window.addEventListener('hashchange', settleAndAlign);
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.hash !== '#contact-form') return;
    // Repeated same-page quote clicks also dismiss an open menu before scrolling.
    document.dispatchEvent(new KeyboardEvent('keydown', {key:'Escape', bubbles:true}));
    setTimeout(settleAndAlign, 0);
  });
})();
