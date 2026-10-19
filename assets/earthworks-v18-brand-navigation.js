(function(){
  const header=document.querySelector('.ew17-header');
  if(!header) return;
  const root=header.dataset.root||'';
  const toast=document.querySelector('.ew17-toast');
  let toastTimer;
  function showToast(message){
    if(!toast) return;
    toast.textContent=message||'Coming Soon';
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer=setTimeout(()=>toast.classList.remove('is-visible'),2200);
  }

  document.querySelectorAll('[data-coming-soon]').forEach(el=>{
    el.addEventListener('click',e=>{e.preventDefault();showToast(el.dataset.comingSoon||'Coming Soon');});
  });
  document.querySelectorAll('[data-language-option]').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.preventDefault();
      const code=btn.dataset.languageOption;
      const details=btn.closest('details');
      if(code==='es') showToast('Spanish language support is coming soon.');
      if(details) details.open=false;
    });
  });

  const servicePanel=header.querySelector('.ew17-service-panel');
  const serviceContent=header.querySelector('[data-service-content]');
  const serviceTriggers=[...header.querySelectorAll('[data-service-trigger]')];
  const serviceClose=header.querySelector('.ew17-service-close');
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
  function r(path){return /^(tel:|mailto:|https?:|#)/.test(path)?path:root+path;}
  function renderService(key){
    const d=serviceData[key];if(!d||!serviceContent)return;
    serviceTriggers.forEach(b=>b.classList.toggle('is-active',b.dataset.serviceTrigger===key));
    serviceContent.innerHTML=`<div class="ew17-service-layout"><div class="ew17-service-copy"><div class="ew17-service-kicker">${d.kicker}</div><h2>${d.title}</h2><p>${d.copy}</p></div><div class="ew17-service-hero"><img src="${r(d.hero)}" alt="${d.kicker} at Earth Works"></div></div><div class="ew17-service-strip"><strong>${d.strip}</strong><a href="${r(d.ctaHref)}">${d.cta}</a></div><div class="ew17-service-cards">${d.cards.map(c=>`<article class="ew17-service-card"><img src="${r(c.img)}" alt="${c.title}"><div class="ew17-service-card__body"><h3>${c.title}</h3><p>${c.copy}</p><a href="${r(c.link)}">${c.linkText} →</a></div></article>`).join('')}</div>`;
  }
  function openService(key){renderService(key);if(servicePanel){servicePanel.classList.add('is-open');servicePanel.setAttribute('aria-hidden','false');}}
  function closeService(){if(servicePanel){servicePanel.classList.remove('is-open');servicePanel.setAttribute('aria-hidden','true');}serviceTriggers.forEach(b=>b.classList.remove('is-active'));}
  serviceTriggers.forEach(btn=>{
    btn.addEventListener('mouseenter',()=>{if(matchMedia('(min-width:981px)').matches)openService(btn.dataset.serviceTrigger)});
    btn.addEventListener('focus',()=>{if(matchMedia('(min-width:981px)').matches)openService(btn.dataset.serviceTrigger)});
    btn.addEventListener('click',e=>{e.preventDefault();const same=btn.classList.contains('is-active')&&servicePanel.classList.contains('is-open');same?closeService():openService(btn.dataset.serviceTrigger);});
  });
  if(serviceClose)serviceClose.addEventListener('click',closeService);

  const megaWrap=header.querySelector('.ew17-mega-wrap');
  const megaTrigger=header.querySelector('.ew17-mega-trigger');
  const megaTitle=header.querySelector('[data-mega-title]');
  const megaGrid=header.querySelector('[data-mega-products]');
  const megaViewAll=header.querySelector('[data-mega-viewall]');
  const megaService=header.querySelector('[data-mega-service]');
  const catButtons=[...header.querySelectorAll('[data-mega-category]')];
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
  function renderMega(key){
    const d=megaData[key]||megaData['mulch-bark'];
    if(megaWrap) megaWrap.classList.add('has-selection');
    catButtons.forEach(b=>b.classList.toggle('is-active',b.dataset.megaCategory===key));
    if(megaTitle)megaTitle.textContent=d.title;
    if(megaViewAll){megaViewAll.textContent='View '+d.title;megaViewAll.href=r(d.href);}
    if(megaGrid){megaGrid.innerHTML=d.products.length?d.products.map(p=>`<a class="ew17-mega-product" href="${r('products/'+p[1]+'/index.html')}"><img src="${r(p[2])}" alt="${p[0]}"><span class="ew17-mega-product__body"><b>${p[0]}</b><small>View product</small></span></a>`).join(''):`<div class="ew17-mega-empty" style="grid-column:1/-1"><b>${d.title}</b><span>Product details will populate here as the Shopify catalogue is finalized.</span></div>`;}
    if(megaService)megaService.innerHTML=`<div class="ew17-mega-service-card"><small>Service</small><strong>${d.serviceTitle}</strong><p>${d.serviceCopy}</p></div><div class="ew17-mega-note"><small>Good to know</small><p>${d.note}</p></div>`;
  }
  function clearMega(){
    if(megaWrap) megaWrap.classList.remove('has-selection');
    catButtons.forEach(b=>b.classList.remove('is-active'));
    if(megaTitle) megaTitle.textContent='Select a category';
    if(megaGrid) megaGrid.innerHTML='';
    if(megaService) megaService.innerHTML='';
    if(megaViewAll){megaViewAll.textContent='View Category';megaViewAll.removeAttribute('href');}
  }
  clearMega();
  catButtons.forEach(btn=>{
    ['mouseenter','focus'].forEach(evt=>btn.addEventListener(evt,()=>{if(matchMedia('(min-width:981px)').matches)renderMega(btn.dataset.megaCategory);}));
  });
  if(megaTrigger){
    megaTrigger.addEventListener('mouseenter',()=>{if(matchMedia('(min-width:981px)').matches)clearMega();});
    megaTrigger.addEventListener('focus',()=>{if(matchMedia('(min-width:981px)').matches)clearMega();});
    megaTrigger.addEventListener('click',e=>{
      e.preventDefault();
      const opening=!megaWrap.classList.contains('is-open');
      megaWrap.classList.toggle('is-open');
      if(opening) clearMega();
    });
  }

  const mobileToggle=header.querySelector('.ew17-mobile-toggle');
  const white=header.querySelector('.ew17-white');
  if(mobileToggle)mobileToggle.addEventListener('click',()=>{const open=white.classList.toggle('is-mobile-open');mobileToggle.setAttribute('aria-expanded',String(open));});

  document.addEventListener('click',e=>{
    if(servicePanel&&servicePanel.classList.contains('is-open')&&!servicePanel.contains(e.target)&&!serviceTriggers.some(b=>b.contains(e.target)))closeService();
    if(megaWrap&&megaWrap.classList.contains('is-open')&&!megaWrap.contains(e.target)){megaWrap.classList.remove('is-open');clearMega();}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeService();if(megaWrap){megaWrap.classList.remove('is-open');clearMega();}if(white)white.classList.remove('is-mobile-open');}});
})();
