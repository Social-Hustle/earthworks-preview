/* Targeted responsive arrangement. Move the existing controls so their original
   event handlers, destinations and notices remain intact. No duplicate accounts,
   carts, search systems or new transactional features are introduced. */
(function () {
  'use strict';
  const header = document.querySelector('.ew17-header');
  const white = header?.querySelector('.ew17-white');
  const whiteInner = white?.querySelector('.ew17-white__inner');
  const black = header?.querySelector('.ew17-black');
  const nav = header?.querySelector('.ew17-navlinks');
  if (!header || !white || !whiteInner || !black || !nav) return;
  const small = matchMedia('(max-width:767px)');
  const cluster = header.querySelector('.ew19-utility-cluster');
  const account = cluster?.querySelector('[aria-label="My Account"]');
  const language = cluster?.querySelector('.ew17-language');
  const cart = cluster?.querySelector('[aria-label="Cart"]');
  const toggle = header.querySelector('.ew17-mobile-toggle');
  nav.id = nav.id || 'ew29-primary-navigation';
  toggle?.setAttribute('aria-controls', nav.id);
  const anchors = new Map();
  [account, language, cart].filter(Boolean).forEach(element => {
    const marker = document.createComment('original utility position');
    element.before(marker);
    anchors.set(element, marker);
  });
  const utilityRow = document.createElement('div');
  utilityRow.className = 'ew29-mobile-utilities';
  utilityRow.setAttribute('aria-label', 'Language and account');
  nav.append(utilityRow);
  const cartSlot = document.createElement('div');
  cartSlot.className = 'ew29-mobile-cart';
  whiteInner.append(cartSlot);
  let frame;
  function syncNavPosition() {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      if (!small.matches) return;
      const y = Math.max(0, white.getBoundingClientRect().bottom);
      header.style.setProperty('--ew29-nav-bottom', `${y}px`);
    });
  }
  function arrange() {
    if (small.matches) {
      black.classList.add('ew29-promise-bar');
      header.before(black);
      if (language) utilityRow.append(language);
      if (account) utilityRow.append(account);
      if (cart) cartSlot.append(cart);
    } else {
      black.classList.remove('ew29-promise-bar');
      header.insertBefore(black, white);
      anchors.forEach((marker, element) => marker.after(element));
      header.style.removeProperty('--ew29-nav-bottom');
    }
    syncNavPosition();
  }
  small.addEventListener('change', arrange);
  window.addEventListener('resize', syncNavPosition, {passive:true});
  window.addEventListener('scroll', syncNavPosition, {passive:true});
  new ResizeObserver(syncNavPosition).observe(white);
  arrange();

  const bar = document.querySelector('.mobile-action-bar');
  const call = bar?.querySelector('a[href^="tel:"]');
  const search = bar?.querySelector('button');
  const phoneSvg = '<svg class="ew29-action-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.8 12.8 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5 12.8 12.8 0 0 0 2.8.7 2 2 0 0 1 1.8 2.1Z"/></svg>';
  const searchSvg = '<svg class="ew29-action-svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.3"/><path d="m16 16 5 5"/></svg>';
  call?.insertAdjacentHTML('afterbegin', phoneSvg);
  search?.insertAdjacentHTML('afterbegin', searchSvg);
  call?.setAttribute('aria-label', 'Call a yard');
  search?.setAttribute('aria-label', 'Search products');

  const dialog = document.createElement('dialog');
  dialog.id = 'ew29-call-dialog';
  dialog.className = 'ew29-call-dialog';
  dialog.setAttribute('aria-labelledby', 'ew29-call-title');
  // The same numbers are already used by the site header and service help links.
  dialog.innerHTML = '<button class="ew29-call-close" type="button" aria-label="Close call options">&times;</button><h2 id="ew29-call-title">Call a yard</h2><div class="ew29-call-options"><a class="ew21-button ew21-button--green" href="tel:2059829922"><span>Indian Springs</span><small>205-982-9922</small></a><a class="ew21-button ew21-button--green" href="tel:2059423311"><span>Birmingham</span><small>205-942-3311</small></a></div>';
  document.body.append(dialog);
  call?.setAttribute('aria-haspopup', 'dialog');
  call?.setAttribute('aria-controls', dialog.id);
  call?.addEventListener('click', event => {
    if (!small.matches) return;
    event.preventDefault();
    if (!dialog.open) dialog.showModal();
  });
  dialog.querySelector('.ew29-call-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
})();
