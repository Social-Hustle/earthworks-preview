/* Earth Works V20: explicit hover/click states, viewport-safe menus, shared cards. */
(function () {
  'use strict';
  const header = document.querySelector('.ew17-header');
  if (!header) return;
  const root = header.dataset.root || '';
  const desktop = () => matchMedia('(min-width:981px)').matches;
  const hasHover = () => matchMedia('(hover:hover) and (pointer:fine)').matches;
  const reducedMotion = () => matchMedia('(prefers-reduced-motion:reduce)').matches;
  const r = path => /^(tel:|mailto:|https?:|data:|#)/.test(path) ? path : root + path;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const toast = document.querySelector('.ew17-toast');
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2400);
  }
  document.querySelectorAll('[data-coming-soon]').forEach(el => el.addEventListener('click', event => {
    event.preventDefault(); showToast(el.dataset.comingSoon || 'Coming soon.');
  }));
  header.querySelectorAll('[data-language-option]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    // Retain the existing prototype's language availability; do not imply a translation exists.
    if (button.dataset.languageOption === 'es') showToast('Spanish language support is coming soon.');
    button.closest('details').open = false;
  }));
  const serviceData={
    pickup:{
      kicker:'Pick Up',
      title:'Call ahead or just drop by — we’ll get you loaded.',
      copy:'Talk with our team about the materials you need and we’ll help make pickup straightforward from the time you arrive.',
      hero:'assets/mascot-truck-full.jpg',
      strip:'Two locations. Experienced people. Fast loading.',
      cta:'View Hours & Directions',
      ctaHref:'contact-us/index.html',
      cards:[
        {title:'Indian Springs',copy:'3225 Cahaba Valley Road, Indian Springs Village, AL 35124 · 205-982-9922',img:'assets/category-images/gravel.jpg',link:'tel:2059829922',linkText:'Call Indian Springs'},
        {title:'Birmingham',copy:'2839 Shannon Oxmoor Road, Birmingham, AL 35211 · 205-942-3311',img:'assets/category-images/mulch.jpg',link:'tel:2059423311',linkText:'Call Birmingham'},
        {title:'Need help choosing?',copy:'Tell the yard what you are working on and the team can help point you to the right material.',img:'assets/category-images/soil.jpg',link:'contact-us/index.html',linkText:'Contact the Yard'}
      ]
    },
    delivery:{
      kicker:'Delivery',
      title:'Our trucks. Our drivers. Our responsibility.',
      copy:'Earth Works supports delivery for projects of different sizes. Call the yard to confirm availability, service area and scheduling for your order.',
      hero:'assets/mascot-truck-full.jpg',
      strip:'Order it today. Get it where the project needs it.',
      cta:'Get a Delivery Quote',
      ctaHref:'contact-us/index.html#contact-form',
      cards:[
        {title:'Smaller Deliveries',copy:'A practical option for tighter residential access and smaller material loads.',img:'assets/category-images/mulch.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'},
        {title:'Bulk Material Delivery',copy:'For larger landscape material orders and bigger project quantities.',img:'assets/category-images/gravel.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'},
        {title:'Palletized Materials',copy:'Ask the team about delivery options for palletized and specialty materials.',img:'assets/category-images/palletised-stone.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'}
      ]
    },
    install:{
      kicker:'Installation',
      title:'We deliver it. We install it. You enjoy the finished yard.',
      copy:'If you do not want to spread or install the material yourself, ask Earth Works about installation options when you request your material.',
      hero:'assets/mascot-garden-full.jpg',
      strip:'Choose the material, ask about installation, and let the team guide the next step.',
      cta:'Get an Installation Quote',
      ctaHref:'contact-us/index.html#contact-form',
      cards:[
        {title:'Mulch Installation',copy:'Ask about installation support for mulch projects and landscape beds.',img:'assets/category-images/mulch.jpg',link:'contact-us/index.html#contact-form',linkText:'Request Installation'},
        {title:'Pine Straw Installation',copy:'Ask about pine straw installation for beds, islands and landscape areas.',img:'assets/category-images/pinestraw.jpg',link:'contact-us/index.html#contact-form',linkText:'Request Installation'},
        {title:'Playground Mulch Installation',copy:'Ask the team about playground mulch material and installation options.',img:'assets/product-images/al-certified-playground.jpg',link:'contact-us/index.html#contact-form',linkText:'Request Installation'}
      ]
    }
  };
  const megaData={
    'mulch-bark':{title:'Mulch & Bark',href:'collections/mulch/index.html',serviceTitle:'Mulch Installation',serviceCopy:'Ask about mulch installation when planning your order.',note:'Need help choosing a mulch? Call the yard and tell us what you are working on.',products:[['Double Shred Pine','double-shred-pine','assets/product-images/double-shred-pine.jpg'],['Brown Hardwood','brown-hardwood','assets/product-images/brown-hardwood.jpg'],['Red Hardwood','red-hardwood','assets/product-images/red-hardwood.jpg'],['Black Hardwood','black-hardwood','assets/product-images/black-hardwood.jpg']]},
    'pine-straw':{title:'Pine Straw',href:'collections/pinestraw/index.html',serviceTitle:'Pine Straw Installation',serviceCopy:'Ask about pine straw installation for beds and landscape areas.',note:'Call the yard for current pine straw availability.',products:[['Pine Straw','pine-straw','assets/product-images/pine-straw.jpg']]},
    'gravel':{title:'Gravel',href:'collections/gravel/index.html',serviceTitle:'Pickup & Delivery',serviceCopy:'Ask about pickup and delivery options for gravel orders.',note:'Call the yard for current sizes and availability.',products:[['Crushed Pea Gravel','crushed-pea-gravel','assets/product-images/crushed-pea-gravel.jpg'],['White Pea Gravel','white-pea-gravel','assets/product-images/white-pea-gravel.jpg'],['Earthtone Pea Gravel','earthtone-pea-gravel','assets/product-images/earthtone-pea-gravel.jpg'],['#57 Limestone','num-57-limestone','assets/product-images/num-57-limestone.jpg']]},
    'decorative-stone':{title:'Decorative Stone',href:'collections/decorative-stone/index.html',serviceTitle:'Pickup & Delivery',serviceCopy:'Ask the team about pickup and delivery for decorative stone.',note:'See the collection for available colors, sizes and stone types.',products:[['White River Rock #5','white-river-rock-num-5','assets/product-images/white-river-rock-num-5.jpg'],['White River Rock #4','white-river-rock-num-4','assets/product-images/white-river-rock-num-4.jpg'],['2” Appalachian Stone','2-appalachian-stone','assets/product-images/2-appalachian-stone.jpg'],['Sylacauga Marble','sylacauga-marble-under-1','assets/product-images/sylacauga-marble-under-1.jpg']]},
    'fertilizers':{title:'Fertilizers',href:'collections/all/index.html',serviceTitle:'Need Help?',serviceCopy:'Call the yard for current fertilizer products and availability.',note:'This category is ready for client-approved Shopify products.',products:[]},
    'stone':{title:'Stone',href:'collections/decorative-stone/index.html',serviceTitle:'Pickup & Delivery',serviceCopy:'Ask about delivery and pickup for stone materials.',note:'Browse decorative and functional stone options.',products:[['4” Appalachian Stone','4-appalachian-stone','assets/product-images/4-appalachian-stone.jpg'],['Appalachian Boulders','appalachian-boulders','assets/product-images/appalachian-boulders.jpg'],['Gabion Rip Rap','gabion-rip-rap-3-6','assets/product-images/gabion-rip-rap-3-6.jpg'],['Sylacauga Marble','sylacauga-marble-1-to-2','assets/product-images/sylacauga-marble-1-to-2.jpg']]},
    'soil':{title:'Soil',href:'collections/soil/index.html',serviceTitle:'Pickup & Delivery',serviceCopy:'Ask the team which soil blend fits your project and how you want it delivered.',note:'Use the collection page to compare soil options.',products:[['Screened Topsoil','screened-topsoil','assets/product-images/screened-topsoil.jpg'],['Unscreened Topsoil','unscreened-topsoil','assets/product-images/unscreened-topsoil.jpg'],['Fill Dirt','fill-dirt','assets/product-images/fill-dirt.jpg'],['Soil Mix','soil-mix','assets/product-images/soil-mix.jpg']]},
    'sand':{title:'Sand',href:'collections/sand/index.html',serviceTitle:'Pickup & Delivery',serviceCopy:'Ask about pickup and delivery for sand products.',note:'Call the yard to confirm the best sand for your application.',products:[['Concrete Sand','concrete-sand','assets/product-images/concrete-sand.jpg'],['Mason / Mortar Sand — Brown','mason-mortar-sand-brown','assets/product-images/mason-mortar-sand-brown.jpg'],['Mason / Mortar Sand — White','mason-mortar-sand-white','assets/product-images/mason-mortar-sand-white.jpg']]},
    'erosion-control':{title:'Erosion Control',href:'collections/erosion-control/index.html',serviceTitle:'Project Support',serviceCopy:'Call the yard for current erosion-control materials and availability.',note:'This category is ready for client-approved Shopify products.',products:[]},
    'hdpe':{title:'HDPE Storm & Drainage Pipe',href:'collections/hdpe-storm-drainage-pipe/index.html',serviceTitle:'Project Support',serviceCopy:'Call the yard for current HDPE storm and drainage pipe availability.',note:'This category is ready for client-approved Shopify products.',products:[]},
    'artificial-turf':{title:'Artificial Turf',href:'collections/all/index.html',serviceTitle:'Project Support',serviceCopy:'Call the yard for current artificial turf products and service information.',note:'This category is ready for client-approved Shopify products.',products:[]},
    'additional':{title:'Additional Products & Services',href:'collections/all/index.html',serviceTitle:'Talk to the Yard',serviceCopy:'If you do not see what you need, call the team for current availability.',note:'Browse the full catalogue or contact Earth Works directly.',products:[['Firewood','firewood','assets/product-images/firewood.jpg']]}
  };
  const servicePanel = header.querySelector('.ew17-service-panel');
  const serviceContent = header.querySelector('[data-service-content]');
  const serviceTriggers = [...header.querySelectorAll('[data-service-trigger]')];
  const serviceClose = header.querySelector('.ew17-service-close');
  const megaWrap = header.querySelector('.ew17-mega-wrap');
  const megaTrigger = header.querySelector('.ew17-mega-trigger');
  const megaPanel = header.querySelector('.ew17-mega-menu');
  const megaTitle = header.querySelector('[data-mega-title]');
  const megaGrid = header.querySelector('[data-mega-products]');
  const megaViewAll = header.querySelector('[data-mega-viewall]');
  const megaService = header.querySelector('[data-mega-service]');
  const categoryButtons = [...header.querySelectorAll('[data-mega-category]')];
  const white = header.querySelector('.ew17-white');
  const mobileToggle = header.querySelector('.ew17-mobile-toggle');
  let serviceKey = null, servicePinned = false, serviceAnchor = null, serviceTimer;
  let megaKey = null, megaPinned = false, megaTimer;
  const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)));
  const locationIcons = {
    address:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    phone:'<path d="m5 3 4 5-2 3c2 3 3 4 6 6l3-2 5 4c-1 3-3 4-6 3C8 20 4 16 2 9 1 6 2 4 5 3Z"/>',
    email:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>'
  };
  function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${locationIcons[name]}</svg>`; }
  // Existing site contact data is retained consistently with the contact page/footer.
  const locations = [
    {name:'Indian Springs',street:'3225 Cahaba Valley Road',city:'Indian Springs Village, AL 35124',phone:'205-982-9922',tel:'2059829922'},
    {name:'Birmingham',street:'2839 Shannon Oxmoor Road',city:'Birmingham, AL 35211',phone:'205-942-3311',tel:'2059423311'}
  ];
  const serviceArtwork = {pickup:'assets/service-pickup-art.webp',delivery:'assets/service-delivery-art.webp',install:'assets/service-install-art.webp'};
  const cardArtwork = {
    delivery:['assets/service-single-axle.webp','assets/service-tri-axle.webp','assets/service-flatbed.webp'],
    install:['assets/service-mulch-install.webp','assets/service-pinestraw-install.webp','assets/service-playground-install.webp']
  };
  const deliveryTitles = ['Single-Axle Delivery','Tri-Axle Delivery','Flatbed Delivery'];
  function renderService(key) {
    const data = serviceData[key];
    if (!data || !serviceContent) return;
    let lower;
    if (key === 'pickup') {
      lower = `<div class="ew20-location-grid">${locations.map(location => `<article class="ew20-location-card">
        <h3>${location.name}</h3>
        <div class="ew20-location-row">${icon('address')}<span>${location.street}<br>${location.city}</span></div>
        <div class="ew20-location-row">${icon('phone')}<a href="tel:${location.tel}">${location.phone}</a></div>
        <div class="ew20-location-row">${icon('email')}<a href="mailto:info@earthworkstoday.com">info@earthworkstoday.com</a></div>
      </article>`).join('')}</div><p class="ew20-service-help"><strong>Need help choosing?</strong> Tell the yard what you are working on and the team can help point you to the right material. <a href="${r('contact-us/index.html')}">Contact the Yard</a></p>`;
    } else {
      lower = `<div class="ew17-service-cards">${data.cards.map((card,index) => `<article class="ew17-service-card">
        <div class="ew17-service-card__body"><h3>${esc(key === 'delivery' ? deliveryTitles[index] : card.title)}</h3><p>${esc(card.copy)}</p><a href="${r(card.link)}">${esc(card.linkText)} <span aria-hidden="true">&rarr;</span></a></div>
        <img src="${r(cardArtwork[key][index])}" alt="${esc(key === 'delivery' ? deliveryTitles[index] : card.title)}" width="130" height="156">
      </article>`).join('')}</div>`;
    }
    serviceContent.innerHTML = `<div class="ew17-service-layout"><div class="ew17-service-copy">
      <h2 id="ew20-service-title">${esc(data.kicker)}</h2><p class="ew20-service-tagline">${esc(data.title)}</p><p>${esc(data.copy)}</p>
      </div><div class="ew17-service-hero"><img src="${r(serviceArtwork[key])}" alt="${esc(data.kicker)} at Earth Works" width="500" height="170"></div></div>
      <div class="ew17-service-strip"><strong>${esc(data.strip)}</strong><a href="${r(data.ctaHref)}">${esc(data.cta)}</a></div>${lower}`;
    servicePanel.setAttribute('aria-labelledby','ew20-service-title');
    serviceTriggers.forEach(button => {
      const active = button.dataset.serviceTrigger === key;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-expanded', String(active));
    });
  }
  function positionService() {
    if (!serviceAnchor || !servicePanel?.classList.contains('is-open')) return;
    const anchor = serviceAnchor.getBoundingClientRect();
    const margin = innerWidth <= 620 ? 12 : 24;
    const width = Math.min(960, innerWidth - margin * 2);
    const x = clamp(anchor.left - 22, margin, innerWidth - width - margin);
    const y = Math.max(8, anchor.bottom + 5);
    servicePanel.style.setProperty('--ew20-service-x', `${x}px`);
    servicePanel.style.setProperty('--ew20-service-y', `${y}px`);
    servicePanel.style.setProperty('--ew20-service-width', `${width}px`);
    servicePanel.style.setProperty('--ew20-service-height', `${Math.max(140, innerHeight-y-14)}px`);
  }
  function openService(key, pinned, anchor) {
    clearTimeout(serviceTimer);
    closeMega();
    if (serviceKey !== key) { renderService(key); servicePanel.scrollTop = 0; }
    serviceKey = key; servicePinned = pinned; serviceAnchor = anchor;
    servicePanel.classList.add('is-open');
    servicePanel.setAttribute('aria-hidden','false');
    servicePanel.dataset.openMode = pinned ? 'click' : 'hover';
    positionService();
  }
  function closeService(restoreFocus=false) {
    clearTimeout(serviceTimer);
    const previousAnchor = serviceAnchor;
    servicePanel?.classList.remove('is-open');
    servicePanel?.setAttribute('aria-hidden','true');
    serviceTriggers.forEach(button => { button.classList.remove('is-active'); button.setAttribute('aria-expanded','false'); });
    serviceKey = null; servicePinned = false; serviceAnchor = null;
    if (restoreFocus) previousAnchor?.focus({preventScroll:true});
  }
  function scheduleServiceClose() {
    clearTimeout(serviceTimer);
    if (!servicePinned) serviceTimer = setTimeout(() => closeService(), 200);
  }
  serviceTriggers.forEach(button => {
    button.addEventListener('pointerenter', event => {
      if (!hasHover() || event.pointerType === 'touch') return;
      if (servicePinned && serviceKey === button.dataset.serviceTrigger) { clearTimeout(serviceTimer); return; }
      openService(button.dataset.serviceTrigger, false, button);
    });
    button.addEventListener('pointerleave', scheduleServiceClose);
    button.addEventListener('click', event => {
      event.preventDefault();
      // Hovering first must not make the subsequent click close the panel.
      openService(button.dataset.serviceTrigger, true, button);
    });
    button.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') { event.preventDefault(); openService(button.dataset.serviceTrigger,true,button); serviceClose?.focus(); }
    });
  });
  servicePanel?.addEventListener('pointerenter', () => clearTimeout(serviceTimer));
  servicePanel?.addEventListener('pointerleave', scheduleServiceClose);
  servicePanel?.addEventListener('focusin', () => clearTimeout(serviceTimer));
  servicePanel?.addEventListener('focusout', event => { if (!servicePanel.contains(event.relatedTarget)) scheduleServiceClose(); });
  serviceClose?.addEventListener('click', () => closeService(true));

  const controls = document.createElement('div');
  controls.className = 'ew20-product-controls';
  controls.hidden = true;
  controls.innerHTML = '<span data-product-range aria-live="polite"></span><button type="button" data-products-prev aria-label="Previous products">&larr;</button><button type="button" data-products-next aria-label="Next products">&rarr;</button>';
  megaGrid?.after(controls);
  const productRange = controls.querySelector('[data-product-range]');
  const previousProducts = controls.querySelector('[data-products-prev]');
  const nextProducts = controls.querySelector('[data-products-next]');
  const productCategories = {
    'double-shred-pine':'Mulch','brown-hardwood':'Bark','red-hardwood':'Bark','black-hardwood':'Bark','pine-straw':'Pine Straw',
    'crushed-pea-gravel':'Gravel','white-pea-gravel':'Gravel','earthtone-pea-gravel':'Gravel','num-57-limestone':'Gravel',
    'screened-topsoil':'Soil','unscreened-topsoil':'Soil','fill-dirt':'Soil','soil-mix':'Soil','firewood':'Additional Products'
  };
  function renderProduct(product, groupTitle) {
    const [title,slug,image] = product;
    const href = r('products/'+slug+'/index.html');
    const quote = r('contact-us/index.html?product='+encodeURIComponent(slug)+'#contact-form');
    return `<article class="dawn-card ew20-menu-card"><a class="dawn-card__media" href="${href}" aria-label="View ${esc(title)}"><img src="${r(image)}" alt="${esc(title)}" width="240" height="240"></a>
      <div class="dawn-card__info"><div class="dawn-card__category">${esc(productCategories[slug] || groupTitle)}</div><h3 class="dawn-card__title"><a href="${href}">${esc(title)}</a></h3><p class="dawn-card__meta">View product details, uses and quote options.</p><div class="dawn-card__actions"><a class="view" href="${href}">View Product</a><a class="quote" href="${quote}">Get a Quote</a></div></div></article>`;
  }
  function updateProductControls() {
    if (!megaGrid || !megaKey) { controls.hidden = true; return; }
    const count = megaGrid.querySelectorAll('.ew20-menu-card').length;
    const visible = Number(getComputedStyle(megaGrid).getPropertyValue('--ew20-visible-cards')) || 3;
    const firstCard = megaGrid.querySelector('.ew20-menu-card');
    const step = firstCard ? firstCard.getBoundingClientRect().width + 12 : 1;
    const start = Math.round(megaGrid.scrollLeft / step);
    controls.hidden = count <= visible;
    productRange.textContent = `${Math.min(start+1,count)}\u2013${Math.min(start+visible,count)} of ${count}`;
    previousProducts.disabled = megaGrid.scrollLeft < 2;
    nextProducts.disabled = megaGrid.scrollLeft + megaGrid.clientWidth >= megaGrid.scrollWidth - 2;
  }
  function moveProducts(direction) {
    const card = megaGrid?.querySelector('.ew20-menu-card');
    if (!card) return;
    megaGrid.scrollBy({left:direction*(card.getBoundingClientRect().width+12),behavior:reducedMotion()?'instant':'smooth'});
  }
  previousProducts.addEventListener('click', () => moveProducts(-1));
  nextProducts.addEventListener('click', () => moveProducts(1));
  megaGrid?.addEventListener('scroll', updateProductControls, {passive:true});
  function renderMega(key) {
    if (megaKey === key) return;
    const data = megaData[key]; if (!data) return;
    megaKey = key;
    megaWrap.classList.add('has-selection');
    categoryButtons.forEach(button => button.classList.toggle('is-active',button.dataset.megaCategory===key));
    megaTitle.textContent = data.title;
    megaViewAll.textContent = 'View '+data.title;
    megaViewAll.href = r(data.href);
    megaGrid.classList.toggle('is-empty',!data.products.length);
    megaGrid.innerHTML = data.products.length ? data.products.map(product => renderProduct(product,data.title)).join('') : `<div class="ew17-mega-empty"><b>${esc(data.title)}</b><span>Product details will populate here as the Shopify catalogue is finalized.</span></div>`;
    megaGrid.scrollLeft = 0;
    megaService.innerHTML = `<div class="ew17-mega-service-card"><small>Service</small><strong>${esc(data.serviceTitle)}</strong><p>${esc(data.serviceCopy)}</p><a class="ew20-mega-service-link" href="${r('contact-us/index.html#contact-form')}">Get a Quote <span aria-hidden="true">&nbsp;&rarr;</span></a></div><div class="ew17-mega-note"><small>Good to know</small><p>${esc(data.note)}</p></div>`;
    positionMega(); requestAnimationFrame(updateProductControls);
  }
  function clearMega() {
    megaKey = null; megaWrap?.classList.remove('has-selection');
    categoryButtons.forEach(button => button.classList.remove('is-active'));
    if (megaTitle) megaTitle.textContent = 'Select a category';
    if (megaGrid) megaGrid.innerHTML = '';
    if (megaService) megaService.innerHTML = '';
    if (megaViewAll) { megaViewAll.textContent = 'View Category'; megaViewAll.removeAttribute('href'); }
    controls.hidden = true;
  }
  function positionMega() {
    if (!megaTrigger || !megaWrap.classList.contains('is-open') || !desktop()) return;
    const anchor = megaTrigger.getBoundingClientRect();
    const margin = innerWidth > 1400 ? 32 : 24;
    const width = megaKey ? Math.min(1440,innerWidth-margin*2) : 324;
    const x = megaKey ? (innerWidth-width)/2 : clamp(anchor.left,margin,innerWidth-width-margin);
    const y = anchor.bottom;
    megaPanel.style.setProperty('--ew20-mega-x',`${x}px`);
    megaPanel.style.setProperty('--ew20-mega-y',`${y}px`);
    megaPanel.style.setProperty('--ew20-mega-width',`${width}px`);
    megaPanel.style.setProperty('--ew20-mega-height',`${Math.max(140,innerHeight-y-16)}px`);
    requestAnimationFrame(updateProductControls);
  }
  function openMega(pinned=false) {
    clearTimeout(megaTimer); closeService();
    if (!megaWrap.classList.contains('is-open')) clearMega();
    megaPinned = pinned;
    megaWrap.classList.add('is-open');
    megaTrigger.setAttribute('aria-expanded','true');
    megaPanel.setAttribute('aria-hidden','false');
    positionMega();
  }
  function closeMega(restoreFocus=false) {
    clearTimeout(megaTimer); megaPinned = false;
    megaWrap?.classList.remove('is-open');
    megaTrigger?.setAttribute('aria-expanded','false');
    megaPanel?.setAttribute('aria-hidden','true');
    clearMega();
    if (restoreFocus) megaTrigger?.focus({preventScroll:true});
  }
  function scheduleMegaClose() {
    clearTimeout(megaTimer);
    if (!megaPinned) megaTimer = setTimeout(() => closeMega(),220);
  }
  megaTrigger?.addEventListener('pointerenter', event => {
    if (desktop() && hasHover() && event.pointerType !== 'touch') openMega(megaPinned);
  });
  megaWrap?.addEventListener('pointerenter', () => clearTimeout(megaTimer));
  megaWrap?.addEventListener('pointerleave', scheduleMegaClose);
  megaTrigger?.addEventListener('click', event => {
    event.preventDefault();
    if (megaWrap.classList.contains('is-open') && megaPinned) closeMega(); else openMega(true);
  });
  megaTrigger?.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') { event.preventDefault(); openMega(true); categoryButtons[0]?.focus(); }
  });
  categoryButtons.forEach(button => {
    button.addEventListener('pointerenter', () => { if(desktop() && hasHover()) renderMega(button.dataset.megaCategory); });
    button.addEventListener('focus', () => { if(desktop()) renderMega(button.dataset.megaCategory); });
  });
  megaWrap?.addEventListener('focusout', event => {
    if (!megaWrap.contains(event.relatedTarget) && !megaPinned) scheduleMegaClose();
  });
  mobileToggle?.addEventListener('click', () => {
    const open = white.classList.toggle('is-mobile-open');
    mobileToggle.setAttribute('aria-expanded',String(open));
    mobileToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    if (!open) closeMega(); closeService();
  });
  document.addEventListener('pointerdown', event => {
    if (serviceKey && !servicePanel.contains(event.target) && !serviceTriggers.some(button => button.contains(event.target))) closeService();
    if (megaWrap?.classList.contains('is-open') && !megaWrap.contains(event.target)) closeMega();
    header.querySelectorAll('.ew17-language[open]').forEach(details => { if (!details.contains(event.target)) details.open = false; });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    if (serviceKey) closeService(true);
    else if (megaWrap?.classList.contains('is-open')) closeMega(true);
    else if (white?.classList.contains('is-mobile-open')) { white.classList.remove('is-mobile-open');mobileToggle?.setAttribute('aria-expanded','false');mobileToggle?.focus(); }
    header.querySelectorAll('.ew17-language[open]').forEach(details => {details.open=false;details.querySelector('summary')?.focus();});
  });
  let resizeFrame;
  function updatePositions() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      document.documentElement.style.setProperty('--ew-fixed-header-height',`${header.offsetHeight}px`);
      positionService(); positionMega(); updateProductControls();
    });
  }
  window.addEventListener('resize',updatePositions,{passive:true});
  window.addEventListener('scroll',updatePositions,{passive:true});
  new ResizeObserver(updatePositions).observe(header);
  clearMega(); megaTrigger?.setAttribute('aria-expanded','false');megaPanel?.setAttribute('aria-hidden','true');
  updatePositions();
})();
