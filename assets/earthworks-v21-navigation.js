/* Earth Works V21: explicit hover/click states, viewport-safe menus, shared cards. */
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
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2000);
  }
  // Delegation also supports homepage cards when the home view is rendered again.
  document.addEventListener('click', event => {
    const noticeTrigger = event.target.closest('[data-coming-soon]');
    if (!noticeTrigger) return;
    event.preventDefault();
    showToast(noticeTrigger.dataset.comingSoon || 'Coming soon.');
  });
  header.querySelectorAll('[data-language-option]').forEach(button => button.addEventListener('click', event => {
    event.preventDefault();
    // Retain the existing prototype's language availability; do not imply a translation exists.
    showToast(button.dataset.languageOption === 'es' ? 'Spanish language support is coming soon.' : 'English is the current language.');
    button.closest('details').open = false;
  }));
  const serviceData={
    pickup:{
      kicker:'Pick Up',
      titleHtml:"Call ahead or just drop by, and <span class=\"ew21-text-accent ew21-text-accent--caps\">WE'LL GET YOU LOADED.</span>",
      copyHtml:'Give us a call or come on in and talk with our knowledgeable team with an <strong>average tenure of over 14 years.</strong> Our staff knows the products, knows projects and can help make sure you leave with the right material and the right amount.',
      hero:'assets/mascot-truck-full.jpg',
      stripHtml:'<div class="ew21-strip-copy"><div class="ew21-strip-headline">Two locations. Experienced people. Fast loading.</div></div>',
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
      copy:"We own and operate our own fleet with trucks sized for everything from a homeowner delivery to a full commercial load. We don't outsource our deliveries. That means we control the process from the time your material leaves our yard until it arrives at your job site or at your home.",
      hero:'assets/mascot-truck-full.jpg',
      stripHtml:'<div class="ew21-strip-copy"><div class="ew21-strip-headline">Order in today. Get it <span class="ew21-strip-accent">TODAY.</span></div><div class="ew21-strip-subcopy">Our trucks. Our drivers. Our responsibility.</div></div>',
      cta:'Get a Delivery Quote',
      ctaHref:'contact-us/index.html#contact-form',
      cards:[
        {title:'Single-Axle Delivery',subline:'Smaller loads, tighter spaces.',copy:'A great choice for residential deliveries and job sites where access is limited.',img:'assets/category-images/mulch.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'},
        {title:'Tri-Axle Delivery',subline:'More material, fewer trips.',copy:'For larger bulk orders, our tri-axle moves serious material efficiently, ideal for contractors and commercial jobs.',img:'assets/category-images/gravel.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'},
        {title:'Flatbed Delivery',subline:'Palletized and ready to unload.',copy:'Our 25-foot flatbeds handle palletized stone, pipe, erosion control products and other job site materials.',img:'assets/category-images/palletised-stone.jpg',link:'contact-us/index.html#contact-form',linkText:'Request a Quote'}
      ]
    },
    install:{
      kicker:'Installation',
      title:"Don't want to spread it or install it yourself? We have got you and your yard covered.",
      copy:'Order your material from Earth Works and add installation. We deliver the product and our installation crew takes it from there.',
      hero:'assets/mascot-garden-full.jpg',
      stripHtml:'<div class="ew21-strip-copy"><div class="ew21-strip-headline">We deliver it. We install it. <span class="ew25-install-highlight">You enjoy it before dinner!</span></div><div class="ew21-strip-subcopy">Choose your material, add installation, and let our crew handle the rest. We deliver the product and our installation team takes it from there.</div></div>',
      cta:'Get an Installation Quote',
      ctaHref:'contact-us/index.html#contact-form',
      cards:[
        {title:'Mulch Installation',copy:'It will be delivered, spread evenly, and finished with clean crisp bed edges.',img:'assets/category-images/mulch.jpg',link:'tel:2059829922',linkText:'Request Installation'},
        {title:'Pine Straw Installation',copy:'Delivered and installed around beds, trees, and landscaping, with clean rolled edges.',img:'assets/category-images/pinestraw.jpg',link:'tel:2059829922',linkText:'Request Installation'},
        {title:'Playground Mulch Installation',copy:'It will be delivered, spread, and raked to the proper depth for a clean finished playground surface.',img:'assets/product-images/al-certified-playground.jpg',link:'tel:2059829922',linkText:'Request Installation'}
      ]
    }
  };
  const megaData={
    "mulch-pine-straw":{"title":"Mulch & Pine Straw","href":"collections/mulch-and-pine-straw/index.html","serviceTitle":"Mulch Installation","serviceCopy":"Ask about mulch and pine straw installation when planning your order.","note":"Call the yard if you need help choosing between mulch and pine straw.","products":[["Double Shred Pine","double-shred-pine","assets/catalog/mulch-and-pine-straw/Double%20Shred%20Pine.jpg","listing-only"],["Big Nugget Pine","big-nugget-pine","assets/catalog/mulch-and-pine-straw/Big%20Nugget%20Pine.jpg","listing-only"],["Mini-Nugget Pine","mini-nugget-pine","assets/catalog/mulch-and-pine-straw/Mini%20Nugget%20Pine.jpg","listing-only"],["Brown Hardwood","brown-hardwood","assets/catalog/mulch-and-pine-straw/Brown%20Hardwood.jpg","listing-only"],["Red Hardwood","red-hardwood","assets/catalog/mulch-and-pine-straw/Red%20Hardwood.jpg","listing-only"],["Black Hardwood","black-hardwood","assets/catalog/mulch-and-pine-straw/Black%20Hardwood.jpg","listing-only"],["AL Certified Playground","al-certified-playground","assets/catalog/mulch-and-pine-straw/AL%20Certified%20Playground.jpg","listing-only"],["Pine Straw","pine-straw","assets/catalog/mulch-and-pine-straw/Pine%20Straw.jpg","listing-only"],["Natural Hardwood Mulch","natural-hardwood-mulch","assets/catalog/mulch-and-pine-straw/Natural%20Hardwood%20Mulch.webp","listing-only"]]},
    "soil-sand":{"title":"Soil & Sand","href":"collections/soil-and-sand/index.html","serviceTitle":"Pickup & Delivery","serviceCopy":"Ask about pickup and delivery for soil and sand orders.","note":"Talk to the yard about quantities for your project.","products":[["Topsoil Unscreened","topsoil-unscreened","assets/catalog/soil-and-sand/Topsoil%20Unscreened.png","listing-only"],["Topsoil Screened","topsoil-screened","assets/catalog/soil-and-sand/Topsoil%20Screened.png","listing-only"],["Fill Dirt Unscreened","fill-dirt-unscreened","assets/catalog/soil-and-sand/Fill%20Dirt%20Unscreened.png","listing-only"],["Fill Dirt Screened","fill-dirt-screened","assets/catalog/soil-and-sand/Fill%20Dirt%20Screened.png","listing-only"],["Compost","compost","assets/catalog/soil-and-sand/Compost.png","listing-only"],["Lawn Mix","lawn-mix","assets/catalog/soil-and-sand/Lawn%20Mix.png","listing-only"],["Soil Mix","soil-mix","assets/catalog/soil-and-sand/Soil%20Mix.png","listing-only"],["Soil Conditioner","soil-conditioner","assets/catalog/soil-and-sand/Soil%20Conditioner.png","listing-only"],["Concrete","concrete","assets/catalog/soil-and-sand/Concrete.png","listing-only"],["Mason Tan/Brown","mason-tan-brown","assets/catalog/soil-and-sand/Mason%20TanBrown.png","listing-only"],["Mason White","mason-white","assets/catalog/soil-and-sand/Mason%20White.png","listing-only"],["Sand Mix","sand-mix","assets/catalog/soil-and-sand/Sand%20Mix.png","listing-only"]]},
    "gravel-decorative-stone":{"title":"Gravel & Decorative Stone","href":"collections/gravel-and-decorative-stone/index.html","serviceTitle":"Pickup & Delivery","serviceCopy":"Ask about pickup and delivery for gravel and decorative stone.","note":"Call the yard to discuss size and material options.","products":[["Crushed Pea Gravel","crushed-pea-gravel","assets/catalog/gravel-and-decorative-stone/Crushed%20Pea%20Gravel.jpg","listing-only"],["White Pea Gravel","white-pea-gravel","assets/catalog/gravel-and-decorative-stone/White%20Pea%20Gravel.jpg","listing-only"],["Brown Pea Gravel","brown-pea-gravel","assets/catalog/gravel-and-decorative-stone/Brown%20Pea%20Gravel.jpg","listing-only"],["Selma Brown Pea Gravel","selma-brown-pea-gravel","assets/catalog/gravel-and-decorative-stone/Selma%20Brown%20Pea%20Gravel.jpg","listing-only"],["White River Rock #5","white-river-rock-num-5","assets/catalog/gravel-and-decorative-stone/White%20River%20Rock%20%235.jpg","listing-only"],["Brown River Rock #5","brown-river-rock-num-5","assets/catalog/gravel-and-decorative-stone/Brown%20River%20Rock%20%235.jpg","listing-only"],["White River Rock #4","white-river-rock-num-4","assets/catalog/gravel-and-decorative-stone/White%20River%20Rock%20%234.jpg","listing-only"],["Brown River Rock #4","brown-river-rock-num-4","assets/catalog/gravel-and-decorative-stone/Brown%20River%20Rock%20%234.jpg","listing-only"],["White Oversize River Rock","white-oversize-river-rock","assets/catalog/gravel-and-decorative-stone/White%20Oversize%20River%20Rock.jpg","listing-only"],["Oversize Brown River Rock","oversize-brown-river-rock","assets/catalog/gravel-and-decorative-stone/Oversize%20Brown%20River%20Rock.jpg","listing-only"],["Red Rock Nuggets #5","red-rock-nuggets-num-5","assets/catalog/gravel-and-decorative-stone/Red%20Rock%20Nuggets%20%235.jpg","listing-only"],["Red Rock Pea Gravel #78","red-rock-pea-gravel-num-78","assets/catalog/gravel-and-decorative-stone/Red%20Rock%20Pea%20Gravel%20%2378.jpg","listing-only"],["Red Rock 1\u201d to 2\u201d","red-rock-1-to-2","assets/catalog/gravel-and-decorative-stone/Red%20Rock%201in%20to%202in.webp","listing-only"],["Sylacauga Marble 1\u201d to 2\u201d","sylacauga-marble-1-to-2","assets/catalog/gravel-and-decorative-stone/Sylacauga%20Marble%201in%20to%202in.webp","listing-only"],["Sylacauga Marble Under 1\u201d","sylacauga-marble-under-1","assets/catalog/gravel-and-decorative-stone/Sylacauga%20Marble%20Under%201in.webp","listing-only"],["#5 Appalachian","num-5-appalachian","assets/catalog/gravel-and-decorative-stone/Appalachian%20%235.webp","listing-only"],["2\u201d Appalachian Stone","2-appalachian-stone","assets/catalog/gravel-and-decorative-stone/2in%20Appalachian%20Stone.webp","listing-only"],["4\u201d Appalachian Stone","4-appalachian-stone","assets/catalog/gravel-and-decorative-stone/4in%20Appalachian%20Stone.webp","listing-only"],["6\u201d-12\u201d Appalachian Stone","6-12-appalachian-stone","assets/catalog/gravel-and-decorative-stone/6in%20to%2012in%20Appalachian%20Stone.webp","listing-only"],["Appalachian Boulders","appalachian-boulders","assets/catalog/gravel-and-decorative-stone/Appalachian%20Boulders.webp","listing-only"],["Limestone Grey Gravel #8910","limestone-grey-gravel-num-8910","assets/catalog/gravel-and-decorative-stone/Gravel%20%238910.jpg","listing-only"],["Limestone Grey Gravel #89","limestone-grey-gravel-num-89","assets/catalog/gravel-and-decorative-stone/Gravel%20%2389.jpg","listing-only"],["Limestone Grey Gravel #78","limestone-grey-gravel-num-78","assets/catalog/gravel-and-decorative-stone/Gravel%20%2378.jpg","listing-only"],["Limestone Grey Gravel #67","limestone-grey-gravel-num-67","assets/catalog/gravel-and-decorative-stone/Gravel%20%2367.jpg","listing-only"],["Limestone Grey Gravel #57","limestone-grey-gravel-num-57","assets/catalog/gravel-and-decorative-stone/Gravel%20%2357.jpg","listing-only"],["Limestone Grey Gravel #5","limestone-grey-gravel-num-5","assets/catalog/gravel-and-decorative-stone/Gravel%20%235.jpg","listing-only"],["Limestone Grey Gravel #4","limestone-grey-gravel-num-4","assets/catalog/gravel-and-decorative-stone/Gravel%20%234.jpg","listing-only"],["Limestone Grey Gravel #24","limestone-grey-gravel-num-24","assets/catalog/gravel-and-decorative-stone/Gravel%20%2324.jpg","listing-only"],["Limestone Grey Gravel Gabion Rip Rap 3\u201d-6\u201d","limestone-grey-gravel-gabion-rip-rap-3-6","assets/catalog/gravel-and-decorative-stone/Gabion%20Rip%20Rap%203in%20to%206in.jpg","listing-only"]]},
    "palletized-stone":{"title":"Palletized Stone","href":"collections/palletized-stone/index.html","serviceTitle":"Pickup & Delivery","serviceCopy":"Ask about delivery options for palletized stone.","note":"Contact the yard for current availability.","products":[["Thin Stack","thin-stack","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thin%20Stack%20.png","listing-only","Alabama Field Stone"],["Thin Regular","thin-regular","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thin%20Stack%20.png","listing-only","Alabama Field Stone"],["Medium Stack","medium-stack","assets/catalog/palletized-stone/Alabama%20Field%20Stone%20%20Medium%20Stack%20.png","listing-only","Alabama Field Stone"],["Medium Long","medium-long","assets/catalog/palletized-stone/Alabaam%20Field%20Stone%2C%20Medium%20Long.png","listing-only","Alabama Field Stone"],["Medium Regular","medium-regular","assets/catalog/palletized-stone/Alabama%20Field%20Stone%20%2C%20Medium%20Regular%20.png","listing-only","Alabama Field Stone"],["Thick Long","thick-long","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thick%20Long.png","listing-only","Alabama Field Stone"],["Extra Thick Long","extra-thick-long","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Extra%20Thick%20Long%20.png","listing-only","Alabama Field Stone"],["1 Man/Mini Boulders (thick stack)","1-man-mini-boulders-thick-stack","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%201%20Man_Mini%20Boulders%20%28thick%20stack%29.png","listing-only","Alabama Field Stone"],["2-4 Man Boulders","2-4-man-boulders","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%202-4%20Man%20Boulders.png","listing-only","Alabama Field Stone"],["Stackable/Wall Boulders","stackable-wall-boulders","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Stackable_Wall%20Boulders.png","listing-only","Alabama Field Stone"],["Speciamen/Landscape Boulders","speciamen-landscape-boulders","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Speciamen_Landscape%20Boulders.png","listing-only","Alabama Field Stone"],["Finger Boulders","finger-boulders","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Finger%20Boulders%20.png","listing-only","Alabama Field Stone"],["Basket Steppers","basket-steppers","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Basket%20Steppers.png","listing-only","Alabama Field Stone"],["Large/Banded Steppers","large-banded-steppers","assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Large_Banded%20Steppers.png","listing-only","Alabama Field Stone"],["2\" Brown Varigated Flagstone","2-brown-varigated-flagstone","assets/catalog/palletized-stone/Tennesse%20Flagstone%2C%20r2_%20Brown%20Varigated%20Flagstone%20.png","listing-only","Tennesse Flagstone Brown"],["TN Blue/Grey regular Flagstone","tn-blue-grey-regular-flagstone","assets/catalog/palletized-stone/Blue_Grey%2C%20TN%20Blue_Grey%20regular%20Flagstone%20.png","listing-only","Blue/Grey"],["TN Blue/Grey 2\" Flagstone","tn-blue-grey-2-flagstone","assets/catalog/palletized-stone/Blue_Grey%2C%20TN%20Blue_Grey%202_%20%20Flagstone%20%20%20.png","listing-only","Blue/Grey"],["18\" x 36\" Stone Step Treads(3 Grey/3 Brown/ 3 Greybrown)","18-x-36-stone-step-treads-3-grey-3-brown-3-greybrown","assets/catalog/palletized-stone/Step%20Treads%2C%208_%20x%2036_%20Stone%20Step%20Treads%283%20Grey_3%20Brown_%203%20Greybrown%29.png","listing-only","Step Treads"],["18\" x 48\" Stone Step Treads(3 Grey/3 Brown/ 3 Greybrown)","18-x-48-stone-step-treads-3-grey-3-brown-3-greybrown","assets/catalog/palletized-stone/Step%20Treads%2C%2018_%20x%2048_%20Stone%20Step%20Treads%283%20Grey_3%20Brown_%203%20Greybrown%29%20.png","listing-only","Step Treads"]]},
    "erosion-geotextiles":{"title":"Erosion Control & Geotextiles","href":"collections/erosion-control-and-geotextiles/index.html","serviceTitle":"Project Support","serviceCopy":"Contact the yard about erosion-control and geotextile materials.","note":"","products":[["Silt Fence & Accessories","silt-fence-accessories","assets/catalog/erosion-control-and-geotextiles/Silt%20Fence%20%26%20Accessories.png","listing-only"],["Stakes & Posts","stakes-posts","assets/catalog/erosion-control-and-geotextiles/Stakes%20%26%20Posts.png","listing-only"],["Wattles & Sediment Barriers","wattles-sediment-barriers","assets/catalog/erosion-control-and-geotextiles/Wattles%20%26%20Sediment%20Barriers.png","listing-only"],["Erosion Control Blankets (ECB)","erosion-control-blankets-ecb","assets/catalog/erosion-control-and-geotextiles/Erosion%20Control%20Blankets%20%28ECB%29.png","listing-only"],["Nonwoven Geotextile Fabric","nonwoven-geotextile-fabric","assets/catalog/erosion-control-and-geotextiles/Nonwoven%20Geotextile%20Fabric.png","listing-only"],["Woven Geotextile Fabric","woven-geotextile-fabric","assets/catalog/erosion-control-and-geotextiles/Woven%20Geotextile%20Fabric.png","listing-only"],["Construction Site Protection & Accessories","construction-site-protection-accessories","assets/catalog/erosion-control-and-geotextiles/Construction%20Site%20Protection%20%26%20Accessories.png","listing-only"],["Natural Erosion Control Mats","natural-erosion-control-mats","assets/catalog/erosion-control-and-geotextiles/Natural%20Erosion%20Control%20Mats.png","listing-only"]]},
    "storm-drainage":{"title":"Storm & Drainage Pipe","href":"collections/storm-and-drainage-pipe/index.html","serviceTitle":"Project Support","serviceCopy":"Contact the yard about storm and drainage pipe.","note":"","products":[["4\" Roll Solid","4-roll-solid","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls%20_4_%20%26%206__%20Solid%20.png","listing-only"],["6\" Roll Solid","6-roll-solid","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls%20_4_%20%26%206__%20Solid%20.png","listing-only"],["4\" Roll Perforated","4-roll-perforated","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%20%204_%20%26%206__%20Perforated%20.png","listing-only"],["6\" Roll Perforated","6-roll-perforated","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%20%204_%20%26%206__%20Perforated%20.png","listing-only"],["4\" W/ Sock","4-w-sock","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%204_%20%26%206_%20_W_%20Sock%20.png","listing-only"],["6\" W/ Sock","6-w-sock","assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%204_%20%26%206_%20_W_%20Sock%20.png","listing-only"]]},
    "artificial-turf":{"title":"Artificial Turf","href":"collections/artificial-turf/index.html","serviceTitle":"Project Support","serviceCopy":"Contact the yard about artificial turf.","note":"","products":[["Artificial Turf","artificial-turf","assets/catalog/artificial-turf/Artificial%20Turf.png","coming-soon"]]},
    "additional":{"title":"Additional Products & Services","href":"collections/additional-products-and-services/index.html","serviceTitle":"Talk to the Yard","serviceCopy":"If you do not see what you need, call for availability.","note":"The updated product and service list will be added later.","products":[]}
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
  // Shop All is a direct link, separate from category preview behavior.
  const categoryList = header.querySelector('.ew17-category-list');
  if (categoryList) {
    const item = document.createElement('li');
    item.className = 'ew49-shop-all-item';
    const link = document.createElement('a');
    link.className = 'ew21-button ew21-button--green ew49-shop-all';
    link.href = r('collections/all/index.html');
    link.textContent = 'Shop All';
    item.append(link);
    categoryList.append(item);
  }
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
  const serviceArtwork = {pickup:'assets/v21/service-pickup-banner.png',delivery:'assets/v21/service-delivery-banner.png',install:'assets/v21/service-install-banner.png'};
  const cardArtwork = {
    delivery:['assets/v21/service-single-axle.png','assets/v21/service-tri-axle.png','assets/v21/service-flatbed.png'],
    install:['assets/v21/service-mulch-install.webp','assets/v21/service-pinestraw-install.webp','assets/v21/service-playground-install.webp']
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
      </article>`).join('')}</div>`;
    } else {
      lower = `<div class="ew17-service-cards">${data.cards.map((card,index) => `<article class="ew17-service-card">
        <div class="ew17-service-card__body"><h3>${esc(card.title || (key === 'delivery' ? deliveryTitles[index] : ''))}</h3>${card.subline ? `<div class="ew21-service-card__subline">${esc(card.subline)}</div>` : ''}<p>${card.copyHtml || esc(card.copy)}</p><a class="ew21-button ew21-button--green ew21-button--compact" href="${r(card.link)}">${esc(card.linkText)} <span aria-hidden="true">&rarr;</span></a></div>
        <img src="${r(cardArtwork[key][index])}" alt="${esc(card.title || (key === 'delivery' ? deliveryTitles[index] : ''))}" width="600" height="600">
      </article>`).join('')}</div>`;
    }
    const help = {
      pickup:['Need help choosing?', 'Tell the yard what you are working on and the team can help point you to the right material.'],
      delivery:['Need help with delivery?', 'Share your material, quantity and delivery address. The team will help plan the right option.'],
      install:['Need help planning?', 'Tell us about the area and material you have in mind. The team will help with the next step.']
    }[key];
    lower += `<div class="ew20-service-help"><div><strong>${help[0]}</strong><p>${help[1]}</p></div><div class="ew20-service-help__links"><a href="tel:2059829922">Indian Springs <span aria-hidden="true">&rarr;</span></a><a href="tel:2059423311">Birmingham <span aria-hidden="true">&rarr;</span></a></div></div>`;
    servicePanel.dataset.service = key;
    serviceContent.innerHTML = `<div class="ew17-service-layout"><div class="ew17-service-copy">
      <h2 id="ew20-service-title">${esc(data.kicker)}</h2><p class="ew20-service-tagline">${data.titleHtml || esc(data.title)}</p><p>${data.copyHtml || esc(data.copy)}</p>
      </div><div class="ew17-service-hero"><img src="${r(serviceArtwork[key])}" alt="${esc(data.kicker)} at Earth Works" width="1500" height="600"></div></div>
      <div class="ew17-service-strip">${data.stripHtml || `<strong>${esc(data.strip)}</strong>`}<a class="ew21-button ew21-button--sand" href="${r(data.ctaHref)}">${esc(data.cta)}</a></div>${lower}`;
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

  // The Delivery Information card opens the same pinned header dropdown.
  document.addEventListener('click', event => {
    const opener = event.target.closest('[data-open-service]');
    if (!opener) return;
    const key = opener.dataset.openService;
    const anchor = serviceTriggers.find(button => button.dataset.serviceTrigger === key);
    if (!serviceData[key] || !anchor) return;
    event.preventDefault();
    openService(key, true, anchor);
    serviceClose?.focus({preventScroll:true});
  });

  if (megaGrid) {
    megaGrid.tabIndex = 0;
    megaGrid.setAttribute('role','region');
    megaGrid.setAttribute('aria-label','Products. Scroll vertically to browse.');
    const hint = document.createElement('div');
    hint.className = 'ew21-scroll-hint';
    hint.textContent = 'Scroll to explore all products';
    megaGrid.after(hint);
  }
  const productCategories = {
    "double-shred-pine": "Mulch",
    "big-nugget-pine": "Bark",
    "mini-nugget-pine": "Bark",
    "brown-hardwood": "Mulch",
    "red-hardwood": "Mulch",
    "black-hardwood": "Mulch",
    "al-certified-playground": "Mulch",
    "pine-straw": "Pine Straw",
    "natural-hardwood-mulch": "Mulch",
    "topsoil-unscreened": "Soil",
    "topsoil-screened": "Soil",
    "fill-dirt-unscreened": "Soil",
    "fill-dirt-screened": "Soil",
    "compost": "Soil Amendment",
    "lawn-mix": "Soil Blend",
    "soil-mix": "Soil Blend",
    "soil-conditioner": "Soil Amendment",
    "concrete": "Sand",
    "mason-tan-brown": "Sand",
    "mason-white": "Sand",
    "sand-mix": "Sand Blend",
    "crushed-pea-gravel": "Gravel",
    "white-pea-gravel": "Gravel",
    "earthtone-pea-gravel": "Gravel",
    "num-57-limestone": "Gravel",
    "screened-topsoil": "Soil",
    "unscreened-topsoil": "Soil",
    "fill-dirt": "Soil",
    "firewood": "Additional Products",
    "brown-pea-gravel": "Gravel",
    "selma-brown-pea-gravel": "Gravel",
    "white-river-rock-num-5": "Decorative Stone",
    "brown-river-rock-num-5": "Decorative Stone",
    "white-river-rock-num-4": "Decorative Stone",
    "brown-river-rock-num-4": "Decorative Stone",
    "white-oversize-river-rock": "Decorative Stone",
    "oversize-brown-river-rock": "Decorative Stone",
    "red-rock-nuggets-num-5": "Decorative Stone",
    "red-rock-pea-gravel-num-78": "Decorative Stone",
    "red-rock-1-to-2": "Decorative Stone",
    "sylacauga-marble-1-to-2": "Decorative Stone",
    "sylacauga-marble-under-1": "Decorative Stone",
    "num-5-appalachian": "Decorative Stone",
    "2-appalachian-stone": "Decorative Stone",
    "4-appalachian-stone": "Decorative Stone",
    "6-12-appalachian-stone": "Decorative Stone",
    "appalachian-boulders": "Decorative Stone",
    "limestone-grey-gravel-num-8910": "Gravel",
    "limestone-grey-gravel-num-89": "Gravel",
    "limestone-grey-gravel-num-78": "Gravel",
    "limestone-grey-gravel-num-67": "Gravel",
    "limestone-grey-gravel-num-57": "Gravel",
    "limestone-grey-gravel-num-5": "Gravel",
    "limestone-grey-gravel-num-4": "Gravel",
    "limestone-grey-gravel-num-24": "Gravel",
    "limestone-grey-gravel-gabion-rip-rap-3-6": "Gravel"
};
  function renderProduct(product, groupTitle) {
    const [title,slug,image,status,label] = product;
    const href = r('products/'+slug+'/index.html');
    return `<article class="dawn-card ew20-menu-card ew41-menu-card"><a class="dawn-card__media" href="${href}" aria-label="View ${esc(title)}"><img src="${r(image)}" alt="${esc(title)}" width="240" height="240"></a>
      <div class="dawn-card__info"><div class="dawn-card__category">${esc(label || productCategories[slug] || groupTitle)}</div><h3 class="dawn-card__title"><a href="${href}">${esc(title)}</a></h3><div class="dawn-card__actions"><a class="view ew41-menu-view ew21-button ew21-button--green ew21-button--compact" href="${href}">View Product</a></div></div></article>`;
  }
  function updateProductControls() {
    if (megaGrid) megaGrid.classList.toggle('can-scroll',megaGrid.scrollHeight > megaGrid.clientHeight + 2);
  }
  // Vertical scrolling is handled natively so product lists behave like standard content panes.
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
    megaGrid.innerHTML = data.products.length ? data.products.map(product => renderProduct(product,data.title)).join('') : `<div class="ew17-mega-empty"><b>${esc(data.title)}</b><span>Products for this category will be added here when the new list is provided.</span></div>`;
    megaGrid.scrollTop = 0;
    megaService.innerHTML = `<div class="ew17-mega-service-card"><small>Service</small><strong>${esc(data.serviceTitle)}</strong><p>${esc(data.serviceCopy)}</p><a class="ew20-mega-service-link ew21-button ew21-button--sand ew21-button--compact" href="${r('contact-us/index.html#contact-form')}">Get a Quote <span aria-hidden="true">&nbsp;&rarr;</span></a></div>${data.note ? `<div class="ew17-mega-note"><small>Good to know</small><p>${esc(data.note)}</p></div>` : ''}`;
    positionMega(); requestAnimationFrame(updateProductControls);
  }
  function clearMega() {
    megaKey = null; megaWrap?.classList.remove('has-selection');
    categoryButtons.forEach(button => button.classList.remove('is-active'));
    if (megaTitle) megaTitle.textContent = '';
    if (megaGrid) megaGrid.innerHTML = '';
    if (megaService) megaService.innerHTML = '';
    if (megaViewAll) { megaViewAll.textContent = ''; megaViewAll.removeAttribute('href'); }
  }
  function positionMega() {
    if (!megaTrigger || !megaWrap.classList.contains('is-open') || !desktop()) return;
    const anchor = megaTrigger.getBoundingClientRect();
    const quote = header.querySelector('.ew17-quote').getBoundingClientRect();
    const edge = Math.min(innerWidth - 20, quote.right);
    const categoryWidth = parseFloat(getComputedStyle(header).getPropertyValue('--ew29-category-width')) || (innerWidth <= 1120 ? 222 : 234);
    const x = Math.max(20, anchor.left);
    // Include the two menu-border pixels so the category rail never overflows.
    const width = megaKey ? Math.max(categoryWidth + 2,edge-x) : categoryWidth + 2;
    megaPanel.style.setProperty('--ew21-category-width',`${categoryWidth}px`);
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
    megaPanel.dataset.openMode = pinned ? 'click' : 'hover';
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
  megaPanel?.addEventListener('pointerenter', () => clearTimeout(megaTimer));
  megaPanel?.addEventListener('pointerleave', scheduleMegaClose);
  megaTrigger?.addEventListener('click', event => {
    event.preventDefault();
    openMega(true);
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
