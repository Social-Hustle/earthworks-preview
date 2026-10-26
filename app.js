
const CATEGORY_DATA = {
  "decorative-stone": {
    name: "Decorative Landscaping Stone",
    short: "Decorative Stone",
    count: 20,
    image: "assets/embedded_63a61224dd92.webp",
    hero: "assets/embedded_be82fc4c2364.webp",
    intro: "Pea gravel, river rock, red rock, marble and Appalachian stone for attractive, durable landscape finishes.",
    detail: "Earth Works offers a broad decorative stone range for pathways, beds, borders, water features, drainage areas and statement landscape accents. Multiple sizes and tones make it easier to match the material to the look and function of the project.",
    benefits: [
      ["Long-lasting finish", "Stone does not decompose like organic ground cover and can remain part of the landscape for years."],
      ["Drainage-friendly", "Pea gravel and river rock can support drainage-focused landscape designs when installed appropriately."],
      ["Low-maintenance", "Decorative rock can help reduce the ongoing refresh cycle associated with organic materials."],
      ["Texture + contrast", "Different sizes, shapes and tones create visual contrast around plants, hardscape and water features."]
    ],
    projects: ["Paths & walkways", "Landscape beds", "Dry creek areas", "Water features", "Borders & accents"]
  },
  "gravel-sand": {
    name: "Limestone Gravel & Sand",
    short: "Gravel & Sand",
    count: 12,
    image: "assets/embedded_63a61224dd92.webp",
    hero: "assets/embedded_21ae15e2aafa.webp",
    intro: "Limestone gravel grades, rip rap and sand for driveways, paths, drainage, base, masonry and site work.",
    detail: "Earth Works carries multiple limestone grey gravel grades plus Gabion Rip Rap and sand options. The correct material depends on the project, so the site makes product education and direct contact easy before a quote is requested.",
    benefits: [
      ["Multiple grades", "Different limestone sizes support different base, surface, drainage and construction applications."],
      ["Practical durability", "Gravel is a hard-wearing material for driveways, paths, work areas and landscape infrastructure."],
      ["Drainage uses", "Selected gravel grades and rip rap are commonly considered for drainage and erosion-control projects."],
      ["Sand options", "Brown mortar sand, concrete sand and white mortar sand support different masonry and site needs."]
    ],
    projects: ["Driveways", "Paths & walkways", "Drainage", "Base preparation", "Masonry & concrete"]
  },
  "soil-blends": {
    name: "Soil, Soil Blends, Compost & Lawn Blends",
    short: "Soil & Blends",
    count: 7,
    image: "assets/embedded_5c8d999fdef8.webp",
    hero: "assets/embedded_5c8d999fdef8.webp",
    intro: "Topsoil, fill dirt and purpose-built soil mixes for planting, grading, garden beds, sod preparation and soil improvement.",
    detail: "The current Earth Works range includes screened and unscreened topsoil, fill dirt, Soil Mix, Sand Mix, Lawn Mix and Soil Conditioner. The site explains the difference so visitors can identify the right starting point and confirm the choice with Earth Works.",
    benefits: [
      ["Planting foundations", "Topsoil and purpose-built mixes support flower beds, gardens, shrubs and general landscape planting."],
      ["Grading + fill", "Fill dirt and topsoil serve different site-preparation and finishing roles."],
      ["Lawn preparation", "Sand Mix and Lawn Mix are positioned for sod, lawn and turf-related preparation."],
      ["Soil improvement", "Soil Conditioner is used to help loosen compacted soil and maintain soil quality over time."]
    ],
    projects: ["Garden beds", "Raised beds", "Sod preparation", "Grading & leveling", "Soil improvement"]
  },
  "mulch-pine": {
    name: "Hardwood Mulch & Pine Straw",
    short: "Mulch & Pine Straw",
    count: 9,
    image: "assets/embedded_7e08993ced59.webp",
    hero: "assets/embedded_a61a7eccb0f9.webp",
    intro: "Pine and hardwood mulches, playground mulch and pine straw for moisture management, weed suppression and a finished landscape-bed look.",
    detail: "Earth Works carries pine mulch, hardwood mulch, certified playground material and pine straw. Pine products offer a softer natural appearance, while hardwood mulch is valued for durability, weed control and a polished bed finish.",
    benefits: [
      ["Moisture management", "Mulch can help landscape beds retain moisture and reduce rapid surface drying."],
      ["Weed suppression", "A properly installed mulch layer can reduce light reaching weed seeds."],
      ["Finished appearance", "Color and texture create a more intentional, polished look around planting beds."],
      ["Organic matter", "Organic mulch breaks down over time and contributes material back to the soil."]
    ],
    projects: ["Garden beds", "Tree rings", "Foundation beds", "Play areas", "Sloped landscape areas"]
  },
  "firewood": {
    name: "Seasoned Firewood",
    short: "Firewood",
    count: 1,
    image: "assets/embedded_966921189f59.webp",
    hero: "assets/embedded_966921189f59.webp",
    intro: "Seasoned firewood for fireplaces, fire pits and cool-weather outdoor spaces.",
    detail: "Earth Works offers firewood as part of its current local material range. Contact the yard to confirm current availability, quantity options, pickup and delivery details.",
    benefits: [
      ["Local availability", "Call the yard to confirm current stock and quantity options."],
      ["Pickup or delivery", "Discuss the fulfillment option that works for your home or project."],
      ["Outdoor and indoor use", "Suitable for appropriate fireplaces, fire pits and outdoor gathering spaces."],
      ["Human support", "The Earth Works team can answer availability and loading questions before you visit."]
    ],
    projects: ["Fire pits", "Outdoor gatherings", "Fireplaces", "Seasonal heating"]
  }
};

const PRODUCT_LISTS = {
  "decorative-stone": [
    "Crushed Pea Gravel","White Pea Gravel","Earthtone Pea Gravel","Selma Brown Pea Gravel","White River Rock #5","Earthtone River Rock #5","White River Rock #4","Earthtone River Rock #4","White Oversize River Rock","Oversize Earthtone River Rock","Red Rock Nuggets #5","Red Rock Pea Gravel #78","Red Rock 1\" to 2\"","Sylacauga Marble 1\" to 2\"","Sylacauga Marble under 1\"","#5 Appalachian","2\" Appalachian Stone","4\" Appalachian Stone","6\"–12\" Appalachian Stone","Appalachian Boulders"
  ],
  "gravel-sand": ["#8910 Limestone","#89 Limestone","#78 Limestone","#67 Limestone","#57 Limestone","#5 Limestone","#4 Limestone","#24 Limestone","Gabion Rip Rap 3\"–6\"","Mason / Mortar Sand — Brown","Concrete Sand","Mason / Mortar Sand — White"],
  "soil-blends": ["Screened Topsoil","Unscreened Topsoil","Fill Dirt","Soil Mix","Sand Mix","Lawn Mix","Soil Conditioner"],
  "mulch-pine": ["Double Shred Pine","Big Nugget Pine","Mini-Nugget Pine","Brown Hardwood","Red Hardwood","Black Hardwood","AL Certified Playground","Pine Straw","Natural Hardwood Mulch"],
  "firewood": ["Firewood"]
};

const SOURCE_DESCRIPTIONS = {
  "Screened Topsoil": "Screened topsoil is processed through a screener to remove larger debris and sticks. Natural Alabama topsoil can still contain smaller rock and organic material.",
  "Unscreened Topsoil": "Unscreened topsoil is the nutrient-containing upper layer of soil supplied in a more natural state for planting and landscape applications.",
  "Fill Dirt": "Fill dirt is subsoil material generally used to fill holes or level ground before a topsoil layer is added. It is not intended as a nutrient-rich planting medium.",
  "Soil Mix": "Earth Works describes Soil Mix as a blend of screened topsoil, wood-based organic compost and coarse sand for raised beds, flower beds and general garden planting.",
  "Sand Mix": "Sand Mix combines screened topsoil and coarse sand and is described by Earth Works as a favorite for sod and grass preparation.",
  "Lawn Mix": "Lawn Mix is part of Earth Works' current soil and lawn-blend range. Contact the team to confirm the best use for your lawn project.",
  "Soil Conditioner": "Soil Conditioner is added to existing topsoil to help loosen compaction, improve root-zone air space and maintain soil quality over time.",
  "Pine Straw": "Pine straw is a natural ground-cover option used in landscape beds and erosion-control applications, with a soft, natural appearance.",
  "AL Certified Playground": "AL Certified Playground is listed in Earth Works' current mulch range for playground applications. Contact the team to confirm availability and project requirements.",
  "Concrete Sand": "Concrete Sand is one of the sand options carried by Earth Works for concrete and general construction-related applications.",
  "Mason / Mortar Sand — Brown": "Brown Mason / Mortar Sand is carried by Earth Works for masonry and related project needs.",
  "Mason / Mortar Sand — White": "White Mason / Mortar Sand is carried by Earth Works for masonry and related project needs."
};

const REAL_SITE_IMAGES = {
  homeHero: "https://www.earthworkslandscapesupply.com/static/sitefiles/content_slider/slide-img2.jpg",
  homeMobile: "https://www.earthworkslandscapesupply.com/static/sitefiles/content_slider/Mobile_Slider2.jpg",
  suppliesSoil: "https://www.earthworkslandscapesupply.com/static/sitefiles/images/soil_2.webp",
  aboutFounder: "https://www.earthworkslandscapesupply.com/static/sitefiles/images/about-page-new.webp",
  aboutGrowth: "https://www.earthworkslandscapesupply.com/static/sitefiles/images/About_Us.webp",
  soilSandMix: "https://www.earthworkslandscapesupply.com/static/sitefiles/images/sand-mix.webp"
};

const VISUALS = {
  heroYard: "assets/embedded_a9709739c630.webp",
  decorativeStone: "assets/embedded_63a61224dd92.webp",
  gravelSand: "assets/embedded_63a61224dd92.webp",
  soil: "assets/embedded_5c8d999fdef8.webp",
  mulch: "assets/embedded_7e08993ced59.webp",
  driveway: "assets/embedded_63a61224dd92.webp",
  gravelPath: "assets/embedded_63a61224dd92.webp",
  yardOne: "assets/location-indian-springs.png",
  yardTwo: "assets/location-birmingham.png",
  contactHeroBanner: "assets/contact-hero-banner.png"
};

const PROJECT_SHORTCUTS = [
  {eyebrow:"Driveways + base", title:"Building or refreshing a driveway?", href:"collections/all/index.html?category=gravel-decorative-stone&category=soil-sand", image:"https://images.unsplash.com/photo-1777802526613-4c695ed3d758?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_63a61224dd92.webp", cta:"Browse Gravel & Sand →"},
  {eyebrow:"Landscape beds", title:"Refreshing beds?", href:"collections/all/index.html?category=mulch-pine-straw", image:"https://images.unsplash.com/photo-1778994023470-584df08d4ea3?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_7e08993ced59.webp", cta:"Browse Mulch & Pine Straw →"},
  {eyebrow:"Planting + lawns", title:"Starting with the right soil?", href:"collections/all/index.html?category=soil-sand", image:"https://images.unsplash.com/photo-1779085031158-a2519daf9747?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_5c8d999fdef8.webp", cta:"Browse Soil & Blends →"},
  {eyebrow:"Decorative finish", title:"Adding stone, texture or contrast?", href:"collections/all/index.html?category=gravel-decorative-stone&category=palletized-stone", image:"https://images.unsplash.com/photo-1706644533651-0b8cf3909f97?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_63a61224dd92.webp", cta:"Browse Decorative Stone →"},
  {eyebrow:"Drainage + erosion", title:"Solving for water movement?", href:"collections/all/index.html?category=storm-drainage&category=erosion-geotextiles&category=gravel-decorative-stone", image:"https://images.unsplash.com/photo-1759967495843-3edc416114a9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_63a61224dd92.webp", cta:"See Gravel Options →"},
  {eyebrow:"Paths + walkways", title:"Creating a path or walkway?", href:"collections/all/index.html?category=gravel-decorative-stone&category=palletized-stone", image:"https://images.unsplash.com/photo-1777297821410-78556bdcd6af?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_63a61224dd92.webp", cta:"See Stone for Paths →"},
  {eyebrow:"Seasonal refresh", title:"Need a fast curb-appeal refresh?", href:"collections/all/index.html?category=mulch-pine-straw", image:"https://images.unsplash.com/photo-1759577085573-dc717319109f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000", fallback:"assets/embedded_7e08993ced59.webp", cta:"See Mulch Options →"},
  {eyebrow:"Need something else?", title:"Not seeing your project yet?", href:"collections/all/index.html", image:"https://images.pexels.com/photos/129544/pexels-photo-129544.jpeg?auto=compress&dpr=1&h=750&w=1260", fallback:"assets/embedded_21ae15e2aafa.webp", cta:"Browse All Supplies →"}
];

function slugify(value){
  return value.toLowerCase().replace(/#/g,"num-").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}

const PRODUCTS = [];
Object.entries(PRODUCT_LISTS).forEach(([category, names]) => names.forEach((name, index) => PRODUCTS.push({name, slug: slugify(name), category, index})));
const PRODUCTS_BY_SLUG = Object.fromEntries(PRODUCTS.map(p => [p.slug, p]));

function esc(value){
  return String(value).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]));
}

function remoteImage(url, fallback, alt, cls=""){
  return `<img ${cls ? `class="${cls}"` : ""} src="${url}" alt="${esc(alt)}" onerror="this.onerror=null;this.src='${fallback}'">`;
}

function imageForProduct(product){
  return `assets/product-images/${product.slug}.jpg`;
}

function altImageForProduct(product, variant=1){
  return `assets/product-images/${product.slug}-${variant === 1 ? 2 : 3}.jpg`;
}

function productDescription(product){
  if(product.category === "firewood") return "Seasoned firewood from Earth Works for fireplaces, fire pits and outdoor gatherings. Contact the yard for current availability, quantities, pickup and delivery options.";
  if(SOURCE_DESCRIPTIONS[product.name]) return SOURCE_DESCRIPTIONS[product.name];
  if(product.category === "decorative-stone"){
    if(/pea gravel/i.test(product.name)) return `${product.name} is part of Earth Works' decorative stone range. Pea gravel is commonly used for walkways, garden paths, borders, patios and decorative ground cover because of its smaller profile.`;
    if(/river rock/i.test(product.name)) return `${product.name} is part of the decorative river-rock range, suited to landscape beds, dry creek features, borders, drainage-focused designs and water-feature surroundings.`;
    if(/appalachian|boulder/i.test(product.name)) return `${product.name} is part of Earth Works' Appalachian stone range and can be used for naturalistic borders, statement landscape features, larger accents and selected erosion-focused applications.`;
    if(/marble/i.test(product.name)) return `${product.name} offers a lighter decorative finish for landscape beds, borders, walkways and accent areas where a brighter stone appearance is desired.`;
    return `${product.name} is one of Earth Works' decorative stone options for durable, low-maintenance landscape accents, beds and pathways.`;
  }
  if(product.category === "gravel-sand"){
    if(/sand/i.test(product.name)) return `${product.name} is one of Earth Works' sand options for landscape, site-preparation, masonry or construction-related applications. Confirm the correct sand type for the project with the Earth Works team.`;
    if(/rip rap/i.test(product.name)) return `${product.name} is a larger stone option commonly considered for drainage channels, erosion control, slope stabilization and heavy landscape applications.`;
    return `${product.name} is one of Earth Works' limestone grey gravel grades. Limestone gravel is commonly used across driveways, paths, drainage and base preparation; the correct grade depends on the job.`;
  }
  if(product.category === "mulch-pine"){
    if(/pine/i.test(product.name)) return `${product.name} is part of Earth Works' pine mulch range. Pine mulch is lightweight, easy to spread, naturally textured and breaks down over time to contribute organic material to landscape beds.`;
    return `${product.name} is part of Earth Works' hardwood mulch range. Hardwood mulch is valued for a polished bed appearance, moisture retention, weed suppression and slower decomposition than many softwood mulches.`;
  }
  return `${product.name} is part of Earth Works' current landscape-supply range. Contact the team to confirm current availability, pricing and suitability for your project.`;
}

function productUses(product){
  if(product.category === "firewood") return ["Fire pits and patios","Indoor fireplaces where appropriate","Outdoor gatherings","Seasonal home use"];
  if(product.category === "decorative-stone"){
    if(/appalachian|boulder|6\"|4\"|2\"/i.test(product.name)) return ["Statement landscape accents","Natural borders and bed edges","Drainage or erosion-focused areas","Large residential or commercial landscapes"];
    if(/river rock/i.test(product.name)) return ["Dry creek and drainage features","Garden-bed accents","Water-feature surroundings","Borders and ground cover"];
    return ["Walkways and garden paths","Landscape-bed ground cover","Patio and hardscape accents","Borders and decorative zones"];
  }
  if(product.category === "gravel-sand"){
    if(/sand/i.test(product.name)) return ["Site and bed preparation","Masonry or mortar work","Concrete-related projects","Landscape and construction applications"];
    if(/rip rap/i.test(product.name)) return ["Erosion control","Drainage channels","Slope stabilization","Heavy-duty landscape protection"];
    return ["Driveways and parking areas","Paths and walkways","Drainage applications","Base and site-preparation work"];
  }
  if(product.category === "soil-blends"){
    if(product.name === "Fill Dirt") return ["Filling low areas","Rough grading","Leveling before topsoil","Site preparation"];
    if(product.name === "Soil Conditioner") return ["Improving compacted soil","Garden-bed renewal","Root-zone improvement","Ongoing soil maintenance"];
    if(/Sand Mix|Lawn Mix/.test(product.name)) return ["Sod preparation","Lawn improvement","Leveling planting areas","Turf-related projects"];
    return ["Garden and flower beds","Planting and landscape beds","Topdressing or soil replacement","Residential and professional projects"];
  }
  return ["Garden and landscape beds","Curb-appeal refreshes","Moisture and weed management","Residential and professional landscaping"];
}

function productBenefits(product){
  if(product.category === "firewood") return [["Local supply","Confirm current stock directly with the yard."],["Flexible fulfillment","Ask about pickup or delivery for your quantity."],["Seasonal convenience","A practical local source for cool-weather use."],["Real support","Talk to the Earth Works team before making the trip."]];
  if(product.category === "decorative-stone") return [
    ["Durable finish", "Decorative stone does not decompose like organic mulch."],
    ["Visual contrast", "Different sizes and tones add texture around plants and hardscape."],
    ["Drainage value", "Many stone applications allow water to move through the landscape more easily."],
    ["Low maintenance", "A properly installed stone area can reduce ongoing ground-cover replacement."]
  ];
  if(product.category === "gravel-sand") return [
    ["Project-specific grades", "Earth Works carries multiple sizes so the application can drive the material choice."],
    ["Hard-wearing", "Limestone gravel is widely used in practical landscape and site applications."],
    ["Drainage applications", "Selected grades are commonly considered where drainage and erosion control matter."],
    ["Home + pro projects", "The product range serves both homeowners and professional landscape work."]
  ];
  if(product.category === "soil-blends") return [
    ["Right base for the job", "Different soils serve planting, grading, lawn preparation and soil-improvement needs."],
    ["Purpose-built blends", "Selected mixes combine topsoil, compost and sand around a specific landscape purpose."],
    ["Local material knowledge", "Earth Works can help explain which soil type is suited to the intended use."],
    ["Pickup or delivery discussion", "The team can confirm material availability and delivery options before you proceed."]
  ];
  return [
    ["Moisture retention", "Mulch helps slow moisture loss from exposed soil."],
    ["Weed suppression", "A proper mulch layer can reduce light reaching weed seeds."],
    ["Finished appearance", "Mulch gives beds a more deliberate, polished look."],
    ["Organic material", "Organic mulch breaks down over time and contributes material back to the soil."]
  ];
}

function beforeOrdering(product){
  const common = [
    ["Confirm availability", "Landscape materials and stock can change. Call or request a quote for current availability."],
    ["Confirm quantity", "Earth Works can discuss the project and help you confirm the material before finalizing a quote."],
    ["Plan pickup or delivery", "Tell the team whether you plan to pick up or need material delivered to the project site."],
    ["Check site access", "For delivery, share the project address and any access details the team should know."]
  ];
  if(product.category === "soil-blends") common[1] = ["Match soil to the use", "Planting, grading, sod and raised-bed projects can require different soil products. Confirm the intended use first."];
  if(product.category === "gravel-sand") common[1] = ["Choose the correct grade", "Driveway surface, base, drainage and masonry applications can call for different grades or sand types."];
  return common;
}

function iconText(index){ return ["01","02","03","04"][index] || "•"; }

function categoryCard(key){
  const c = CATEGORY_DATA[key];
  const image = key === "decorative-stone" ? VISUALS.decorativeStone : key === "gravel-sand" ? VISUALS.gravelSand : key === "soil-blends" ? VISUALS.soil : key === "firewood" ? "assets/embedded_966921189f59.webp" : VISUALS.mulch;
  return `<a class="category-card reveal" href="#category/${key}">
    <div class="category-card__image"><img src="${image}" onerror="this.onerror=null;this.src='${c.image}'" alt="${esc(c.name)}"></div>
    <div class="category-card__body">
      <h3>${c.short}</h3>
      <span class="category-card__link">Explore ${c.count} materials <span>→</span></span>
    </div>
  </a>`;
}

function projectCarouselMarkup(){
  return `<div class="project-carousel project-carousel--project reveal" data-carousel>
    <div class="client-section-heading client-section-heading--project">
      <div><span>Browse by project</span><h2>Find the right<br>starting point.</h2></div>
      <p>Choose the project that looks most like yours, then explore the material family that fits it.</p>
      <div class="project-carousel__controls">
        <button type="button" class="carousel-button" data-carousel-prev aria-label="Previous projects">←</button>
        <button type="button" class="carousel-button" data-carousel-next aria-label="Next projects">→</button>
      </div>
    </div>
    <div class="project-carousel__viewport" data-carousel-viewport>
      <div class="project-carousel__track" data-carousel-track>
        ${PROJECT_SHORTCUTS.map(project => `<a class="project-card project-card--carousel" href="${project.href}">
          <img src="${project.image}" onerror="this.onerror=null;this.src='${project.fallback}'" alt="${esc(project.title)}">
          <div class="project-card__copy"><small>${project.eyebrow}</small><h3>${project.title}</h3><span>${project.cta}</span></div>
        </a>`).join("")}
      </div>
    </div>
  </div>`;
}

function productCard(product){
  const c = CATEGORY_DATA[product.category];
  return `<a class="product-card reveal" data-product-name="${esc(product.name.toLowerCase())}" href="#product/${product.slug}">
    <div class="product-card__media"><img src="${imageForProduct(product)}" alt="${esc(product.name)}"></div>
    <div class="product-card__body">
      <small>${c.short}</small>
      <h3>${esc(product.name)}</h3>
      <p>${esc(productDescription(product).split(".")[0])}.</p>
      <span class="product-card__link"><span>View product details</span><span>→</span></span>
    </div>
  </a>`;
}

function locationCards(){
  return `
  <article class="location-card reveal">
    <div class="location-card__top location-card__top--yard">${remoteImage(VISUALS.yardOne,"assets/location-indian-springs.png","Earth Works Indian Springs location","location-card__image--yard")}</div>
    <div class="location-card__body"><div><small>Indian Springs Village</small><h3>Cahaba Valley Road</h3><div class="ew21-mini-contact-list"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>3225 Cahaba Valley Rd<br>Indian Springs Village, AL 35124</span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>Mon–Fri 7–4 · Sat–Sun Closed</span></div></div><a class="location-card__call" href="tel:2059829922">205-982-9922 →</a></div>
  </article>
  <article class="location-card reveal">
    <div class="location-card__top location-card__top--yard">${remoteImage(VISUALS.yardTwo,"assets/location-birmingham.png","Earth Works Birmingham location","location-card__image--yard")}</div>
    <div class="location-card__body"><div><small>Birmingham</small><h3>Shannon Oxmoor Road</h3><div class="ew21-mini-contact-list"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>2839 Shannon Oxmoor Rd<br>Birmingham, AL 35211</span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>Mon–Fri 7–4 · Sat–Sun Closed</span></div></div><a class="location-card__call" href="tel:2059423311">205-942-3311 →</a></div>
  </article>`;
}

function faqBlock(items){
  return `<div class="faq-list">${items.map(([q,a]) => `<div class="faq"><button type="button" aria-expanded="false"><span>${esc(q)}</span><span>+</span></button><div class="faq__answer">${a}</div></div>`).join("")}</div>`;
}

function mascotCTA(){ return "";
}

function homePage(){
  const featured = [
    {title:"Mulch & Pine Straw", copy:"Fresh beds, natural coverage and clean finishing touches.", image:"assets/homepage-category-mulch-reference.jpg", href:"collections/all/index.html?category=mulch-pine-straw"},
    {title:"Gravel, Palletized, and Decorative Stone", copy:"Driveways, drainage, decorative path, patios, and luxury outdoor living spaces.", image:"assets/homepage-category-gravel-reference.jpg", href:"collections/all/index.html?category=gravel-decorative-stone&category=palletized-stone"},
    {title:"Soil & Sand", copy:"Planting, gardening, lawn prep, site leveling, and masonry materials.", image:"assets/homepage-category-soil-reference.jpg", href:"collections/all/index.html?category=soil-sand"},
    {title:"Pipe & Erosion", copy:"Drainage and erosion control materials for the home and commercial job sites.", image:"assets/homepage-category-pipe-reference.jpg", href:"collections/all/index.html?category=storm-drainage&category=erosion-geotextiles"}
  ];
  const reviews = [
    {quote:"Excellent service.", name:"Arturo Galicia"},
    {quote:"Great products and great people. They are always ready to help with advice on their products.", name:"Joan Ware"},
    {quote:"Courteous and fast service.", name:"Nic Ogles"},
    {quote:"What an incredible business and incredible customer service. Fair prices and timely service.", name:"Drew McIntosh"},
    {quote:"Great place to get very quality mulch. Delivered promptly, and the driver was very skilled.", name:"Austin Ehrhart"},
    {quote:"Great selection of rock. They loaded my truck carefully, and I was out of there in ten minutes.", name:"Jamie Hooks"}
  ];
  const resources = [
    {title:"How Much Do I Need?", copy:"Get practical guidance before requesting pricing.", cta:"Get Guidance", href:"tel:2059829922", image:"assets/plan-confidence-01.png", icon:"01"},
    {title:"Delivery Information", copy:"Understand pickup, delivery and service-area questions.", cta:"Learn More", href:"#ew-service-panel", service:"delivery", image:"assets/plan-confidence-02.png", icon:"02"},
    {title:"Product FAQs", copy:"Find quick answers before calling the yard.", cta:"View FAQs", href:"faq/index.html", image:"assets/plan-confidence-03.png", icon:"03"},
    {title:"How-To Videos", copy:"Explore visual tips for common landscape projects.", cta:"Watch Videos", href:"#", notice:"How-to videos coming soon.", image:"assets/plan-confidence-04.png", icon:"▶"}
  ];
  return `
    <section class="client-home-hero ew33-mobile-hero" aria-label="Beautiful yards start here">
      <picture>
        <source media="(max-width:767px)" srcset="assets/v33/homepage-mobile-hero-banner.png" width="1200" height="1400">
        <img src="assets/homepage-option-v5.png" alt="Beautiful yards start here — Earth Works landscape supply hero with Dirt mascot">
      </picture>
    </section>

    <section class="client-featured-strip" aria-label="Featured landscape supplies">
      <div class="page-width">
        <div class="client-featured-grid">
          ${featured.map(item => `<article class="client-feature-card reveal"><a class="ew46-card-link" href="${item.href}" tabindex="-1" aria-hidden="true"></a><img src="${item.image}" alt="${item.title}"><div class="client-feature-card__shade"></div><div class="client-feature-card__copy"><h3>${item.title}</h3><p>${item.copy}</p><a class="client-feature-card__button" href="${item.href}">Explore <b>›</b></a></div></article>`).join("")}
        </div>
        <a class="ew21-help-band ew21-help-band--image reveal" aria-label="Call Earth Works for help choosing materials" href="tel:2059829922">
          <img class="ew29-help-desktop" src="assets/v21/not-sure-what-you-need-banner.png" alt="Not sure what you need? Call us. We'd love to help ya!">
          <span class="ew29-help-mobile" aria-hidden="true"><svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="698" height="228" rx="7" fill="#050604" stroke="#6f9d12" stroke-width="2"/>
            <svg x="85" y="18" width="530" height="92.0808" viewBox="420 15 495 86" overflow="hidden"><image href="assets/v21/not-sure-what-you-need-banner.png" width="1913" height="128"/></svg>
            <svg x="42" y="113" width="616" height="93.4267" viewBox="916 15 600 91" overflow="hidden"><image href="assets/v21/not-sure-what-you-need-banner.png" width="1913" height="128"/></svg>
            <svg x="14" y="54" width="63" height="14" viewBox="59 42 342 30"><image href="assets/v21/not-sure-what-you-need-banner.png" width="1913" height="128"/></svg>
            <svg x="623" y="54" width="63" height="14" viewBox="59 42 342 30"><image href="assets/v21/not-sure-what-you-need-banner.png" width="1913" height="128"/></svg>
          </svg></span>
        </a>
      </div>
    </section>

    <section class="client-testimonials" id="homeReviews" data-review-carousel>
      <div class="page-width client-testimonials__inner">
        <div class="client-review-heading"><span>What our<br>customers are saying</span><div class="client-stars">★★★★★</div><div class="client-review-controls"><button type="button" data-review-prev aria-label="Previous reviews">‹</button><button type="button" data-review-next aria-label="Next reviews">›</button></div></div>
        <div class="client-review-viewport" data-review-viewport><div class="client-review-rail" id="clientReviewRail" data-review-track>
          ${reviews.map(review => `<blockquote><p>${review.quote}</p><cite>— ${review.name}</cite></blockquote>`).join("")}
        </div></div>
      </div>
    </section>

    <section class="client-resource-strip" id="homeFaq">
      <div class="page-width"><div class="client-resource-heading"><span>Plan with confidence</span><h2>Frequently Asked Questions &amp; Videos</h2></div>
      <div class="client-resource-grid">
        ${resources.map(resource => `<a href="${resource.href}"${resource.service ? ` data-open-service="${esc(resource.service)}" aria-controls="ew-service-panel"` : ''}${resource.notice ? ` data-coming-soon="${esc(resource.notice)}"` : ''} class="client-resource-card reveal"><div class="client-resource-visual"><img src="${resource.image}" alt=""><span>${resource.icon}</span></div><div class="client-resource-copy"><b>${resource.title}</b><p>${resource.copy}</p><span>${resource.cta} →</span></div></a>`).join("")}
      </div></div>
    </section>

    <section class="client-project-section">
      <div class="page-width">
        ${projectCarouselMarkup()}
      </div>
    </section>

    <section class="client-why-section">
      <div class="page-width client-why-grid">
        <div class="client-why-mascot reveal"><img src="assets/why-earthworks-mascot-nobg.png" alt="Dirt, the Earth Works mascot"></div>
        <div class="client-why-copy reveal"><span>Why Earth Works?</span><h2>Local materials. Real people. A simpler path to the yard.</h2><p>Earth Works helps homeowners and professionals move from an idea to the right material with a broad local range, direct support, and pickup or delivery options.</p><div class="client-why-points"><div><b>Since 1999</b><small>Serving Birmingham-area projects for more than two decades.</small></div><div><b>Pickup + Delivery</b><small>Choose the fulfillment route that works for the material and jobsite.</small></div><div><b>Home + Pro Friendly</b><small>Clear product information for first-time buyers and trade customers.</small></div><div><b>Material Guidance</b><small>Call a yard when you need help identifying the right product.</small></div></div></div>
      </div>
    </section>

    <section class="client-delivery-section">
      <div class="page-width client-delivery-panel reveal"><div class="client-delivery-image"><img src="assets/embedded_55de088bdbf1.webp" alt="Dirt mascot in an Earth Works delivery truck"></div><div class="client-delivery-copy"><span>Pickup · Delivery · Install</span><h2>Get materials where the project needs them.</h2><p>Choose the material, confirm current price and availability, and talk with the Earth Works team about pickup or delivery. Installation availability can be confirmed directly with the yard.</p><div><a class="client-quote-button" href="contact-us/index.html#contact-form">Get a Quote</a><a class="client-text-link" href="#contact">View Locations →</a></div></div></div>
    </section>

    <section class="client-locations-section">
      <div class="page-width"><div class="client-section-heading client-section-heading--locations"><div><span>Visit a yard</span><h2>Two locations. One<br>helpful team.</h2></div><p>Call the location that works for you before making the trip or arranging delivery.</p></div><div class="client-location-grid">${locationCards()}</div></div>
    </section>

    <section class="client-bottom-cta"><div class="page-width client-bottom-cta__inner"><div><h2>Ready to get started?</h2><p>Quality materials. Reliable delivery. Friendly service.</p></div><a class="client-bottom-cta__button" href="contact-us/index.html#contact-form">Get a Quote <b>›</b></a><img src="assets/ready-to-get-started-mascot.png" alt="Earth Works mascot"></div></section>

  `;
}

function suppliesPage(){
  return `
    <section class="page-hero"><div class="page-width page-hero__grid"><div><div class="breadcrumbs"><a href="#home">Home</a> / Landscape Supplies</div><div class="eyebrow">All current materials</div><h1>Landscape Supplies</h1><p>Browse the current Earth Works product range by material family. Each product page explains common uses and gives visitors a clear next step to call or request a quote.</p><div class="quote-box__actions" style="margin-top:24px"><a class="button button--primary" href="contact-us/index.html#contact-form">Request a quote</a><a class="button button--ghost" href="tel:2059829922">Call Indian Springs</a></div></div><div class="page-hero__image"><img src="${VISUALS.heroYard}" onerror="this.onerror=null;this.src='assets/embedded_63a61224dd92.webp'" alt="Landscape supply yard"></div></div></section>
    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Five material families</div><h2>Browse the range.</h2></div><p>Clear product families and prominent search make the current catalogue easier to browse.</p></div><div class="category-grid category-grid--four" id="suppliesRail">${Object.keys(CATEGORY_DATA).map(categoryCard).join("")}</div></div></section>
    <section class="section section--cream"><div class="page-width"><div class="material-search-block"><div><div class="eyebrow">Search the catalogue</div><h2>Already know the product name?</h2><p>Jump directly to the product page, then request pricing or call the yard.</p></div><div class="material-search-field"><input id="suppliesSearch" placeholder="Search all ${PRODUCTS.length} products"><button id="suppliesSearchButton">→</button><div class="material-search-hint">Examples: #57 Limestone · Screened Topsoil · Black Hardwood · White River Rock</div></div></div></div></section>
    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">All products</div><h2>${PRODUCTS.length} current materials, one clean browse experience.</h2></div></div><div class="product-grid" id="allProductsGrid">${PRODUCTS.map(productCard).join("")}</div></div></section>
    ${mascotCTA("Can't find the material by name?", "Call Earth Works or send a quote request. The Phase I site keeps human help close to the product catalogue.")}
  `;
}

function categoryPage(key){
  const c = CATEGORY_DATA[key];
  if(!c) return notFound();
  const products = PRODUCTS.filter(p => p.category === key);
  return `
    <section class="page-hero"><div class="page-width page-hero__grid"><div><div class="breadcrumbs"><a href="#home">Home</a> / <a href="#supplies">Landscape Supplies</a> / ${c.short}</div><div class="eyebrow">${c.count} current materials</div><h1>${c.name}</h1><p>${c.detail}</p><div class="quote-box__actions" style="margin-top:24px"><a class="button button--primary" href="contact-us/index.html#contact-form">Request a quote</a><a class="button button--ghost" href="tel:2059829922">Call 205-982-9922</a></div></div><div class="page-hero__image"><img src="${key === "decorative-stone" ? VISUALS.decorativeStone : key === "gravel-sand" ? VISUALS.gravelSand : key === "soil-blends" ? VISUALS.soil : key === "firewood" ? "assets/embedded_966921189f59.webp" : VISUALS.mulch}" onerror="this.onerror=null;this.src='${c.image}'" alt="${esc(c.name)}"></div></div></section>

    <section class="section section--paper"><div class="page-width category-content-grid">
      <div><div class="eyebrow">Why this material family</div><h2 style="font-size:46px">Built around real project needs.</h2><p class="lead">${c.intro}</p><div class="bullet-benefits" style="margin-top:28px">${c.benefits.map((item,i) => `<div class="benefit-row reveal"><span class="benefit-row__icon">${iconText(i)}</span><div><b>${item[0]}</b><span>${item[1]}</span></div></div>`).join("")}</div></div>
      <div class="visual-stack reveal"><div><img src="${c.image}" alt="${esc(c.short)} material"><span>${c.short}</span></div><div>${remoteImage(VISUALS.heroYard,"assets/embedded_63a61224dd92.webp","Landscape supply materials")}<span>Earth Works materials</span></div><div><img src="assets/embedded_21ae15e2aafa.webp" alt="Earth Works pickup and delivery"><span>Pickup + delivery</span></div></div>
    </div></section>

    <section class="section section--cream"><div class="page-width">
      <div class="section-head"><div class="section-head__copy"><div class="eyebrow">Common project uses</div><h2>Where customers use these materials.</h2></div><p>These are informational use cases, not an automated recommendation. Earth Works confirms the material choice for the individual project.</p></div>
      <div class="use-grid">${c.projects.slice(0,4).map((item,i)=>`<div class="use-card reveal"><div class="use-card__icon">${iconText(i)}</div><h3>${item}</h3><p>Explore the products below, then call or request a quote to confirm the best fit.</p></div>`).join("")}</div>
    </div></section>

    <section class="section section--paper"><div class="page-width collection-layout">
      <aside class="collection-sidebar"><div class="filter-panel"><h3>Find a product</h3><div class="filter-search"><input id="collectionFilter" placeholder="Filter ${c.short.toLowerCase()}…"></div><div class="filter-list"><button class="active" data-filter="all">All ${products.length} products</button>${products.slice(0,8).map(p=>`<button data-jump="${p.slug}">${esc(p.name)}</button>`).join("")}</div></div><div class="help-card"><h3>Need material help?</h3><p>Call the yard and describe the project before you finalize a quote.</p><a href="tel:2059829922">Call 205-982-9922 →</a></div></aside>
      <div><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Product range</div><h2>${c.short}</h2></div><p>Every current item has a dedicated product page with uses, benefits, ordering considerations, pickup/delivery guidance and related products.</p></div><div class="product-grid" id="collectionGrid">${products.map(productCard).join("")}</div></div>
    </div></section>

    <section class="section section--dark"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Simple customer journey</div><h2>Browse → understand → contact.</h2></div><p>The current experience is optimized for confident enquiries now, with a clean foundation for future online ordering.</p></div><div class="trust-grid"><div class="trust-card"><div class="trust-card__number">01</div><h3>Browse the range</h3><p>Product names and categories match the current Earth Works website.</p></div><div class="trust-card"><div class="trust-card__number">02</div><h3>Read the product page</h3><p>Understand common uses, benefits and what to discuss with the yard.</p></div><div class="trust-card"><div class="trust-card__number">03</div><h3>Request current pricing</h3><p>Use the prefilled quote path or call either location.</p></div><div class="trust-card"><div class="trust-card__number">04</div><h3>Confirm fulfillment</h3><p>Discuss pickup or delivery directly with Earth Works.</p></div></div></div></section>
    ${mascotCTA(`Questions about ${c.short.toLowerCase()}?`, "Use the product pages for context, then let the Earth Works team confirm the right material, availability and next step.", key === "soil-blends" ? "assets/embedded_e0391ca67374.webp" : key === "mulch-pine" ? "assets/embedded_a39155df168d.webp" : "assets/embedded_50ddcf38e389.webp")}
  `;
}

function productPage(slug){
  const product = PRODUCTS_BY_SLUG[slug];
  if(!product) return notFound();
  const c = CATEGORY_DATA[product.category];
  const uses = productUses(product);
  const benefits = productBenefits(product);
  const before = beforeOrdering(product);
  let related = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0,6);
  if(!related.length) related = PRODUCTS.filter(p => p.category !== product.category).slice(0,6);
  const image1 = imageForProduct(product), image2 = altImageForProduct(product,1), image3 = altImageForProduct(product,2);
  const faqs = [
    [`What is ${product.name} commonly used for?`, `Common applications can include ${uses.slice(0,3).join(", ").toLowerCase()}. The correct use depends on the project, so confirm the material with Earth Works before ordering.`],
    ["Can I buy this online?", "Not yet. This website currently supports product discovery and enquiries. Use Request a Quote or call either Earth Works location for current pricing and availability."],
    ["Can Earth Works deliver this material?", "Earth Works advertises delivery options. Share the material, quantity and job location so the team can confirm availability and delivery details."],
    ["Can I pick up from either location?", "Contact the preferred yard first to confirm current availability and the best pickup arrangement for this material."],
    ["How do I know how much I need?", "Contact Earth Works with the project dimensions and intended use so the team can discuss the material and next step."]
  ];
  return `
    <section class="product-hero"><div class="page-width">
      <div class="breadcrumbs" style="color:#73766c"><a href="#home" style="color:#536d28">Home</a> / <a href="#supplies" style="color:#536d28">Supplies</a> / <a href="#category/${product.category}" style="color:#536d28">${c.short}</a> / ${esc(product.name)}</div>
      <div class="product-hero__grid">
        <div class="product-gallery reveal"><div class="product-gallery__thumbs"><button class="gallery-thumb active" data-gallery-src="${image1}"><img src="${image1}" alt="${esc(product.name)} material view"></button><button class="gallery-thumb" data-gallery-src="${image2}"><img src="${image2}" alt="Earth Works material context"></button><button class="gallery-thumb" data-gallery-src="${image3}"><img src="${image3}" alt="Earth Works pickup and delivery context"></button></div><div class="product-gallery__main"><img id="productMainImage" src="${image1}" alt="${esc(product.name)}"><span class="gallery-label">Earth Works material</span></div></div>
        <div class="product-summary"><a class="product-category-link" href="#category/${product.category}">${c.short} →</a><h1>${esc(product.name)}</h1><p class="lead">${esc(productDescription(product))}</p><div class="product-summary__chips"><span class="chip"><i></i> Open to the public</span><span class="chip"><i></i> Pickup available</span><span class="chip"><i></i> Ask about delivery</span><span class="chip"><i></i> Home + pro projects</span></div>
          <div class="quote-box"><div class="eyebrow">Pricing + availability</div><h3>Ready to ask about ${esc(product.name)}?</h3><p>Current pricing and stock are confirmed directly by Earth Works. Send the product name with your project details, or call the yard for current information.</p><div class="quote-box__actions"><a class="button button--primary" href="contact-us/index.html?product=${encodeURIComponent(product.name)}#contact-form">Request a quote</a><a class="button button--outline" href="tel:2059829922">Call 205-982-9922</a></div><div class="product-note">Earth Works confirms final product suitability, availability, pricing, quantity and fulfillment details.</div></div>
        </div>
      </div>
    </div></section>

    <section class="section section--cream"><div class="page-width"><div class="product-facts reveal"><div class="product-fact"><small>Material family</small><b>${c.short}</b></div><div class="product-fact"><small>Customer type</small><b>Home + Pro</b></div><div class="product-fact"><small>Fulfillment</small><b>Pickup / Delivery</b></div><div class="product-fact"><small>Purchase path</small><b>Quote / Call</b></div></div></div></section>

    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">What it is</div><h2>A clearer product page than a simple photo gallery.</h2></div><p>The new structure answers the questions a customer typically has before they contact a landscape-supply yard.</p></div><div class="category-content-grid"><div><p class="lead">${esc(productDescription(product))}</p><p class="muted">Earth Works serves homeowners and professional landscapers in Indian Springs Village, Birmingham and nearby communities. Product availability and final project suitability are confirmed directly by the team.</p></div><div class="visual-stack"><div><img src="${image1}" alt="${esc(product.name)}"><span>${esc(product.name)}</span></div><div><img src="${image2}" alt="Landscape project context"><span>Project context</span></div><div><img src="${image3}" alt="Pickup and delivery"><span>Pickup + delivery</span></div></div></div></div></section>

    <section class="section section--cream"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Where it can work</div><h2>Common project uses.</h2></div><p>Use cases are educational and intentionally stop short of an automated product recommendation.</p></div><div class="use-grid">${uses.map((use,i)=>`<div class="use-card reveal"><div class="use-card__icon">${iconText(i)}</div><h3>${esc(use)}</h3><p>Discuss the project conditions and material requirements with Earth Works before finalizing the quote.</p></div>`).join("")}</div></div></section>

    <section class="section section--dark"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Why people choose this material family</div><h2>Practical benefits, not just product names.</h2></div></div><div class="trust-grid">${benefits.map((b,i)=>`<div class="trust-card reveal"><div class="trust-card__number">${iconText(i)}</div><h3>${b[0]}</h3><p>${b[1]}</p></div>`).join("")}</div></div></section>

    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Before you request a quote</div><h2>Four things to have ready.</h2></div><p>These details help Earth Works answer the enquiry faster and reduce back-and-forth.</p></div><div class="consider-grid">${before.map((item,i)=>`<div class="consider-card ${i%2 ? "consider-card--light" : ""} reveal"><div class="eyebrow">${iconText(i)}</div><h3>${item[0]}</h3><p>${item[1]}</p></div>`).join("")}</div></div></section>

    <section class="section section--cream"><div class="page-width"><div class="delivery-panel reveal"><div class="delivery-panel__media"><img src="assets/embedded_21ae15e2aafa.webp" alt="Earth Works material pickup and delivery"></div><div class="delivery-panel__copy"><div class="eyebrow">Pickup + delivery</div><h2>From product page to yard conversation.</h2><div class="delivery-steps"><div class="delivery-step"><span class="delivery-step__num">1</span><div><b>Send the product name</b><span>The quote form can be prefilled with ${esc(product.name)}.</span></div></div><div class="delivery-step"><span class="delivery-step__num">2</span><div><b>Add your project details</b><span>Include intended use, approximate quantity if known, and the project location.</span></div></div><div class="delivery-step"><span class="delivery-step__num">3</span><div><b>Earth Works confirms the next step</b><span>The team can confirm pricing, availability and pickup or delivery details.</span></div></div></div><div class="quote-box__actions"><a class="button button--primary" href="contact-us/index.html?product=${encodeURIComponent(product.name)}#contact-form">Request a quote</a><a class="button button--ghost" href="#contact">View both locations</a></div></div></div></div></section>

    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Product FAQ</div><h2>Questions customers ask before buying.</h2></div></div>${faqBlock(faqs)}</div></section>

    <section class="section section--cream"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">More in ${c.short}</div><h2>Related materials.</h2></div><div class="scroll-controls"><button class="scroll-button" data-scroll="relatedRail" data-dir="prev">←</button><button class="scroll-button" data-scroll="relatedRail" data-dir="next">→</button></div></div><div class="related-rail" id="relatedRail">${related.map(productCard).join("")}</div></div></section>
    ${mascotCTA(`Ask Earth Works about ${product.name}.`, "The strongest Phase I conversion path is simple: understand the product, then contact the yard with a better question.", product.category === "soil-blends" ? "assets/embedded_e0391ca67374.webp" : product.category === "mulch-pine" ? "assets/embedded_a39155df168d.webp" : product.category === "firewood" ? "assets/embedded_7ac5a568320e.webp" : "assets/embedded_50ddcf38e389.webp")}
  `;
}

function aboutPage(){
  return `
    <section class="page-hero"><div class="page-width page-hero__grid"><div><div class="breadcrumbs"><a href="#home">Home</a> / About Us</div><div class="eyebrow">Local landscape supply since 1999</div><h1>Built from the ground up.</h1><p>Earth Works serves homeowners and professional landscapers with landscape materials, local knowledge and two Birmingham-area locations.</p><div class="quote-box__actions" style="margin-top:24px"><a class="button button--primary" href="#supplies">View supplies</a><a class="button button--ghost" href="#contact">Contact Earth Works</a></div></div><div class="page-hero__image">${remoteImage(REAL_SITE_IMAGES.aboutFounder,"assets/embedded_21ae15e2aafa.webp","Earth Works business story")}</div></div></section>
    <section class="section section--paper"><div class="page-width about-story"><div class="about-story__media reveal"><div>${remoteImage(REAL_SITE_IMAGES.aboutFounder,"assets/embedded_21ae15e2aafa.webp","Earth Works history")}</div><div>${remoteImage(REAL_SITE_IMAGES.aboutGrowth,"assets/embedded_5c8d999fdef8.webp","Earth Works growth")}</div><div></div></div><div class="about-story__copy"><div class="eyebrow">The Earth Works story</div><h2>From a truck and a Bobcat to a trusted local supplier.</h2><p>Earth Works' current website describes the business as having grown steadily since Danny started with a truck and a Bobcat. Today the company serves residential and commercial customers with mulch, sand, gravel, topsoil, soil blends, pine straw, river rock, red rock and other landscape materials.</p><p>The business emphasizes knowledgeable service, economical pricing, material selection and convenient delivery options. Those strengths are central to the Earth Works customer experience.</p></div></div></section>
    <section class="section section--cream"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">What the business stands for</div><h2>Useful products. Helpful people. Local access.</h2></div></div><div class="timeline"><div class="timeline-card reveal"><strong>1999</strong><h3>Earth Works begins</h3><p>The business story starts with Danny, a truck and a Bobcat.</p></div><div class="timeline-card reveal"><strong>2 yards</strong><h3>Indian Springs + Birmingham</h3><p>Customers can contact or visit either current Earth Works location.</p></div><div class="timeline-card reveal"><strong>Home + Pro</strong><h3>Open to the public</h3><p>The company serves homeowners as well as commercial landscapers.</p></div></div></div></section>
    <section class="section section--dark"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Why customers come back</div><h2>The website should feel as practical as the yard.</h2></div></div><div class="trust-grid"><div class="trust-card"><div class="trust-card__number">01</div><h3>Broad material range</h3><p>Core landscape materials are organized into four clear product families.</p></div><div class="trust-card"><div class="trust-card__number">02</div><h3>Knowledgeable team</h3><p>Earth Works positions staff help as part of the customer experience.</p></div><div class="trust-card"><div class="trust-card__number">03</div><h3>Competitive pricing</h3><p>The current site notes discounted / wholesale-style pricing for both commercial customers and the general public.</p></div><div class="trust-card"><div class="trust-card__number">04</div><h3>Pickup + delivery</h3><p>Customers can discuss the fulfillment route that fits the project.</p></div></div></div></section>
    <section class="section section--paper"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Visit Earth Works</div><h2>Two local locations.</h2></div></div><div class="location-grid">${locationCards()}</div></div></section>
    ${mascotCTA("See what Earth Works has to offer.", "Browse the current material range online, then call or visit the yard when you're ready to talk pricing and availability.")}
  `;
}

function contactPage(){
  return `
    <section class="page-hero page-hero--integrated"><div class="page-width page-hero__grid"><div><div class="breadcrumbs"><a href="#home">Home</a> / Contact</div><div class="eyebrow">Talk to a real person</div><h1>Questions about a material? Start here.</h1><p>Earth Works can answer product questions, discuss project needs, provide pricing information and talk through pickup or delivery options.</p></div><div class="page-hero__image page-hero__image--integrated page-hero__image--banner"><img src="${VISUALS.contactHeroBanner}" onerror="this.onerror=null;this.src='assets/embedded_21ae15e2aafa.webp'" alt="Earth Works contact banner"></div></div></section>
    <section class="section section--paper"><div class="page-width contact-layout contact-layout--balanced"><aside class="contact-card contact-card--tall"><div class="eyebrow">Contact information</div><h2 style="font-size:38px">Two yards. One team.</h2><div class="contact-card__image">${remoteImage(VISUALS.heroYard,"assets/embedded_63a61224dd92.webp","Landscape supply materials")}</div><div class="contact-detail"><small>Indian Springs Village</small><b>3225 Cahaba Valley Road</b><div class="ew21-mini-contact-list"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>Indian Springs Village, AL 35124</span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 4 5-2 3c2 3 3 4 6 6l3-2 5 4c-1 3-3 4-6 3C8 20 4 16 2 9 1 6 2 4 5 3Z"/></svg><a href="tel:2059829922"><strong>205-982-9922</strong></a></span></div></div><div class="contact-detail"><small>Birmingham</small><b>2839 Shannon Oxmoor Road</b><div class="ew21-mini-contact-list"><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>Birmingham, AL 35211</span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 3 4 5-2 3c2 3 3 4 6 6l3-2 5 4c-1 3-3 4-6 3C8 20 4 16 2 9 1 6 2 4 5 3Z"/></svg><a href="tel:2059423311"><strong>205-942-3311</strong></a></span></div></div><div class="contact-detail"><small>Email + hours</small><b><a href="mailto:info@earthworkstoday.com">info@earthworkstoday.com</a></b><div class="ew21-mini-contact-list"><span><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/></svg><a href="mailto:info@earthworkstoday.com">info@earthworkstoday.com</a></span><span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2"/><circle cx="12" cy="12" r="9"/></svg>Mon–Fri 7:00 AM–4:00 PM<br>Sat Closed · Sun Closed</span></div></div></aside><div class="form-card form-card--tall"><div class="eyebrow">Leave a message</div><h2 style="font-size:42px">How can Earth Works help?</h2><p class="muted">Use this for general questions. If you already know the material, the quote form is the faster path.</p><form data-prototype-form><div class="form-grid"><div class="field"><label>First name</label><input required></div><div class="field"><label>Last name</label><input required></div><div class="field"><label>Email</label><input type="email" required></div><div class="field"><label>Phone</label><input type="tel"></div><div class="field field--full"><label>What do you need help with?</label><select><option>General question</option><option>Material guidance</option><option>Delivery question</option><option>Visit a yard</option><option>Other</option></select></div><div class="field field--full"><label>Message</label><textarea required placeholder="Tell us what you are working on or what material you need."></textarea></div><div class="field field--full"><button class="button button--primary" type="submit">Send message</button><div class="form-success">Prototype submitted. In Shopify this form will route to the agreed Earth Works contact workflow.</div></div></div></form></div></div></section>
    <section class="section section--cream"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Visit a yard</div><h2>Choose the location that works for you.</h2></div></div><div class="location-grid">${locationCards()}</div></div></section>
    ${mascotCTA("Need current pricing instead?", "Use the Request a Quote form and include the material name, quantity if known, project location and whether you need pickup or delivery.", "assets/embedded_58282130fe58.webp", "dark")}
  `;
}

function reviewsPage(){
  return `
    <section class="page-hero"><div class="page-width page-hero__grid"><div><div class="breadcrumbs"><a href="#home">Home</a> / Reviews</div><div class="eyebrow">Customer feedback</div><h1>Local service people remember.</h1><p>The current Earth Works homepage highlights service, staff helpfulness, rock selection and the convenience of delivery or pickup.</p></div><div class="page-hero__image"><img src="assets/embedded_63a61224dd92.webp" alt="Earth Works decorative stone"></div></div></section>
    <section class="section section--paper"><div class="page-width"><div class="reviews-wall"><article class="review-tile review-tile--featured"><div class="stars">★★★★★</div><p>Customers consistently emphasize that Earth Works is easy to work with — from helpful staff to the convenience of pickup and delivery.</p><b>What the current reviews say most clearly</b></article><article class="review-tile"><div class="stars">★★★★★</div><p>“Excellent service.”</p><b>Arturo Galicia</b></article><article class="review-tile"><div class="stars">★★★★★</div><p>A customer praised the rock selection, staff and the ability to arrange delivery or pickup.</p><b>Pamela Behrle</b></article><article class="review-tile"><div class="stars">★★★★★</div><p>“Always have great service…”</p><b>Steve Davidson</b></article><article class="review-tile"><div class="stars">★★★★★</div><p>Those trust signals are an important part of the Earth Works customer experience.</p><b>Earth Works customer experience</b></article></div></div></section>
    <section class="section section--dark"><div class="page-width"><div class="section-head"><div class="section-head__copy"><div class="eyebrow">Why reviews matter here</div><h2>Landscape materials are local — trust should feel local too.</h2></div></div><div class="trust-grid"><div class="trust-card"><div class="trust-card__number">01</div><h3>Helpful people</h3><p>Service quality matters when customers are unsure about material choice or next steps.</p></div><div class="trust-card"><div class="trust-card__number">02</div><h3>Material selection</h3><p>Customers value being able to see and discuss different stone, soil and mulch options.</p></div><div class="trust-card"><div class="trust-card__number">03</div><h3>Pickup convenience</h3><p>Two yards give customers local options for contacting or visiting Earth Works.</p></div><div class="trust-card"><div class="trust-card__number">04</div><h3>Delivery access</h3><p>Delivery is an important part of the value proposition for bulk landscape materials.</p></div></div></div></section>
    ${mascotCTA("Ready to see the material range?", "Browse the current Earth Works catalogue, then request pricing or call the yard that works for you.")}
  `;
}

function notFound(){
  return `<section class="empty-state"><div class="page-width"><h2>Page not found.</h2><p>Try the product search or head back to Landscape Supplies.</p><a class="button button--primary" href="#supplies">View supplies</a></div></section>`;
}

function setActiveNav(route){
  const path = (location.hash.slice(1).split("?")[0] || "home");
  const parts = path.split("/");
  const product = parts[0] === "product" ? PRODUCTS_BY_SLUG[parts[1]] : null;
  const links = Array.from(document.querySelectorAll("[data-nav]"));
  const hasExactProductLink = links.some(link => (link.getAttribute("href") || "").replace(/^#/, "") === path);
  links.forEach(link => {
    const href = (link.getAttribute("href") || "").replace(/^#/, "");
    let active = href === path;
    if(!active && product && !hasExactProductLink && href === `category/${product.category}`) active = true;
    if(!active && route === "contact" && link.dataset.nav === "contact") active = true;
    link.classList.toggle("active", active);
  });
}

function closeMobileMenu(){
  const nav = document.getElementById("mainNav"), btn = document.getElementById("menuButton");
  if(nav) nav.classList.remove("open");
  if(btn) btn.setAttribute("aria-expanded","false");
  document.body.classList.remove("menu-open");
}

function revealSetup(){
  const nodes = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ nodes.forEach(n=>n.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), {threshold:.08});
  nodes.forEach(node => observer.observe(node));
}

function setupScrollButtons(){
  document.querySelectorAll("[data-scroll]").forEach(btn => btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.scroll);
    if(!target) return;
    const amount = Math.max(280, target.clientWidth * .72) * (btn.dataset.dir === "prev" ? -1 : 1);
    target.scrollBy({left:amount,behavior:"smooth"});
  }));
}

function setupReviewCarousels(){
  document.querySelectorAll('[data-review-carousel]').forEach(carousel => {
    const viewport = carousel.querySelector('[data-review-viewport]');
    const track = carousel.querySelector('[data-review-track]');
    const prev = carousel.querySelector('[data-review-prev]');
    const next = carousel.querySelector('[data-review-next]');
    if(!viewport || !track || !prev || !next) return;
    const getStep = () => {
      const card = track.querySelector('blockquote');
      if(!card) return viewport.clientWidth;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 0) || 0;
      return card.getBoundingClientRect().width + gap;
    };
    const update = () => {
      prev.disabled = viewport.scrollLeft <= 4;
      next.disabled = viewport.scrollLeft + viewport.clientWidth >= track.scrollWidth - 4;
    };
    prev.addEventListener('click', () => viewport.scrollBy({left:-getStep(),behavior:'smooth'}));
    next.addEventListener('click', () => viewport.scrollBy({left:getStep(),behavior:'smooth'}));
    viewport.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    update();
  });
}

function setupProjectCarousels(){
  document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const viewport = carousel.querySelector("[data-carousel-viewport]");
    const track = carousel.querySelector("[data-carousel-track]");
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    if(!viewport || !track || !prev || !next) return;
    const getStep = () => {
      const card = track.querySelector('.project-card');
      if(!card) return 320;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || 0) || 0;
      return card.getBoundingClientRect().width + gap;
    };
    const update = () => {
      prev.disabled = viewport.scrollLeft < 10;
      next.disabled = viewport.scrollLeft + viewport.clientWidth >= track.scrollWidth - 10;
    };
    prev.addEventListener('click', () => viewport.scrollBy({left:-getStep(), behavior:'smooth'}));
    next.addEventListener('click', () => viewport.scrollBy({left:getStep(), behavior:'smooth'}));
    viewport.addEventListener('scroll', update, {passive:true});
    window.addEventListener('resize', update);
    update();
  });
}

function setupFaqs(){
  document.querySelectorAll(".faq button").forEach(btn => btn.addEventListener("click", () => {
    const item = btn.closest(".faq");
    const isOpen = item.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  }));
}

function setupForms(){
  document.querySelectorAll('form[data-prototype-form]').forEach(form => form.addEventListener('submit', e => {
    e.preventDefault();
    form.querySelector('.form-success')?.classList.add('show');
  }));
}

function setupStepForms(){
  document.querySelectorAll('.step-form').forEach(form => {
    const steps = Array.from(form.querySelectorAll('[data-step]'));
    if(!steps.length) return;
    const prev = form.querySelector('[data-step-prev]');
    const next = form.querySelector('[data-step-next]');
    const submit = form.querySelector('[data-step-submit]');
    const progress = form.querySelector('[data-step-progress]');
    let index = 0;
    const render = () => {
      steps.forEach((step,i)=>step.classList.toggle('active', i===index));
      if(prev) prev.style.visibility = index === 0 ? 'hidden' : 'visible';
      if(next) next.style.display = index === steps.length - 1 ? 'none' : 'inline-flex';
      if(submit) submit.style.display = index === steps.length - 1 ? 'inline-flex' : 'none';
      if(progress) progress.style.width = `${((index + 1) / steps.length) * 100}%`;
    };
    prev?.addEventListener('click', ()=>{ if(index>0){ index -= 1; render(); }});
    next?.addEventListener('click', ()=>{ if(index<steps.length-1){ index += 1; render(); }});
    render();
  });
}

function setupGallery(){
  const main = document.getElementById("productMainImage");
  if(!main) return;
  document.querySelectorAll(".gallery-thumb").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".gallery-thumb").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    main.src = btn.dataset.gallerySrc;
  }));
}

function setupCollectionFilter(){
  const input = document.getElementById("collectionFilter"), grid = document.getElementById("collectionGrid");
  if(input && grid){
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      grid.querySelectorAll(".product-card").forEach(card => card.style.display = (card.dataset.productName || "").includes(q) ? "block" : "none");
    });
  }
  document.querySelectorAll("[data-jump]").forEach(btn => btn.addEventListener("click", () => location.hash = `#product/${btn.dataset.jump}`));
}

function findProductAndGo(value){
  const q = value.trim().toLowerCase();
  if(!q) return;
  const exact = PRODUCTS.find(p => p.name.toLowerCase() === q);
  const fuzzy = PRODUCTS.find(p => p.name.toLowerCase().includes(q));
  const found = exact || fuzzy;
  if(found) location.href = `products/${found.slug}/index.html`;
  else location.hash = "#supplies";
}

const SEARCH_INDEX = [{"type": "Category", "name": "Mulch & Pine Straw", "href": "collections/mulch-and-pine-straw/index.html", "image": "assets/catalog/mulch-and-pine-straw/Double%20Shred%20Pine.jpg"}, {"type": "Category", "name": "Soil & Sand", "href": "collections/soil-and-sand/index.html", "image": "assets/catalog/soil-and-sand/Topsoil%20Unscreened.png"}, {"type": "Category", "name": "Gravel & Decorative Stone", "href": "collections/gravel-and-decorative-stone/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Crushed%20Pea%20Gravel.jpg"}, {"type": "Category", "name": "Palletized Stone", "href": "collections/palletized-stone/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thin%20Stack%20.png"}, {"type": "Category", "name": "Erosion Control & Geotextiles", "href": "collections/erosion-control-and-geotextiles/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Silt%20Fence%20%26%20Accessories.png"}, {"type": "Category", "name": "Storm & Drainage Pipe", "href": "collections/storm-and-drainage-pipe/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls%20_4_%20%26%206__%20Solid%20.png"}, {"type": "Category", "name": "Artificial Turf", "href": "collections/artificial-turf/index.html", "image": "assets/catalog/artificial-turf/Artificial%20Turf.png"}, {"type": "Category", "name": "Additional Products & Services", "href": "collections/additional-products-and-services/index.html", "image": "assets/category-images/gravel.jpg"}, {"type": "Product", "name": "Double Shred Pine", "href": "products/double-shred-pine/index.html", "image": "assets/catalog/mulch-and-pine-straw/Double%20Shred%20Pine.jpg"}, {"type": "Product", "name": "Big Nugget Pine", "href": "products/big-nugget-pine/index.html", "image": "assets/catalog/mulch-and-pine-straw/Big%20Nugget%20Pine.jpg"}, {"type": "Product", "name": "Mini-Nugget Pine", "href": "products/mini-nugget-pine/index.html", "image": "assets/catalog/mulch-and-pine-straw/Mini%20Nugget%20Pine.jpg"}, {"type": "Product", "name": "Brown Hardwood", "href": "products/brown-hardwood/index.html", "image": "assets/catalog/mulch-and-pine-straw/Brown%20Hardwood.jpg"}, {"type": "Product", "name": "Red Hardwood", "href": "products/red-hardwood/index.html", "image": "assets/catalog/mulch-and-pine-straw/Red%20Hardwood.jpg"}, {"type": "Product", "name": "Black Hardwood", "href": "products/black-hardwood/index.html", "image": "assets/catalog/mulch-and-pine-straw/Black%20Hardwood.jpg"}, {"type": "Product", "name": "AL Certified Playground", "href": "products/al-certified-playground/index.html", "image": "assets/catalog/mulch-and-pine-straw/AL%20Certified%20Playground.jpg"}, {"type": "Product", "name": "Pine Straw", "href": "products/pine-straw/index.html", "image": "assets/catalog/mulch-and-pine-straw/Pine%20Straw.jpg"}, {"type": "Product", "name": "Natural Hardwood Mulch", "href": "products/natural-hardwood-mulch/index.html", "image": "assets/catalog/mulch-and-pine-straw/Natural%20Hardwood%20Mulch.webp"}, {"type": "Product", "name": "Topsoil Unscreened", "href": "products/topsoil-unscreened/index.html", "image": "assets/catalog/soil-and-sand/Topsoil%20Unscreened.png"}, {"type": "Product", "name": "Topsoil Screened", "href": "products/topsoil-screened/index.html", "image": "assets/catalog/soil-and-sand/Topsoil%20Screened.png"}, {"type": "Product", "name": "Fill Dirt Unscreened", "href": "products/fill-dirt-unscreened/index.html", "image": "assets/catalog/soil-and-sand/Fill%20Dirt%20Unscreened.png"}, {"type": "Product", "name": "Fill Dirt Screened", "href": "products/fill-dirt-screened/index.html", "image": "assets/catalog/soil-and-sand/Fill%20Dirt%20Screened.png"}, {"type": "Product", "name": "Compost", "href": "products/compost/index.html", "image": "assets/catalog/soil-and-sand/Compost.png"}, {"type": "Product", "name": "Lawn Mix", "href": "products/lawn-mix/index.html", "image": "assets/catalog/soil-and-sand/Lawn%20Mix.png"}, {"type": "Product", "name": "Soil Mix", "href": "products/soil-mix/index.html", "image": "assets/catalog/soil-and-sand/Soil%20Mix.png"}, {"type": "Product", "name": "Soil Conditioner", "href": "products/soil-conditioner/index.html", "image": "assets/catalog/soil-and-sand/Soil%20Conditioner.png"}, {"type": "Product", "name": "Concrete", "href": "products/concrete/index.html", "image": "assets/catalog/soil-and-sand/Concrete.png"}, {"type": "Product", "name": "Mason Tan/Brown", "href": "products/mason-tan-brown/index.html", "image": "assets/catalog/soil-and-sand/Mason%20TanBrown.png"}, {"type": "Product", "name": "Mason White", "href": "products/mason-white/index.html", "image": "assets/catalog/soil-and-sand/Mason%20White.png"}, {"type": "Product", "name": "Sand Mix", "href": "products/sand-mix/index.html", "image": "assets/catalog/soil-and-sand/Sand%20Mix.png"}, {"type": "Product", "name": "Crushed Pea Gravel", "href": "products/crushed-pea-gravel/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Crushed%20Pea%20Gravel.jpg"}, {"type": "Product", "name": "White Pea Gravel", "href": "products/white-pea-gravel/index.html", "image": "assets/catalog/gravel-and-decorative-stone/White%20Pea%20Gravel.jpg"}, {"type": "Product", "name": "Brown Pea Gravel", "href": "products/brown-pea-gravel/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Brown%20Pea%20Gravel.jpg"}, {"type": "Product", "name": "Selma Brown Pea Gravel", "href": "products/selma-brown-pea-gravel/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Selma%20Brown%20Pea%20Gravel.jpg"}, {"type": "Product", "name": "White River Rock #5", "href": "products/white-river-rock-num-5/index.html", "image": "assets/catalog/gravel-and-decorative-stone/White%20River%20Rock%20%235.jpg"}, {"type": "Product", "name": "Brown River Rock #5", "href": "products/brown-river-rock-num-5/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Brown%20River%20Rock%20%235.jpg"}, {"type": "Product", "name": "White River Rock #4", "href": "products/white-river-rock-num-4/index.html", "image": "assets/catalog/gravel-and-decorative-stone/White%20River%20Rock%20%234.jpg"}, {"type": "Product", "name": "Brown River Rock #4", "href": "products/brown-river-rock-num-4/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Brown%20River%20Rock%20%234.jpg"}, {"type": "Product", "name": "White Oversize River Rock", "href": "products/white-oversize-river-rock/index.html", "image": "assets/catalog/gravel-and-decorative-stone/White%20Oversize%20River%20Rock.jpg"}, {"type": "Product", "name": "Oversize Brown River Rock", "href": "products/oversize-brown-river-rock/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Oversize%20Brown%20River%20Rock.jpg"}, {"type": "Product", "name": "Red Rock Nuggets #5", "href": "products/red-rock-nuggets-num-5/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Red%20Rock%20Nuggets%20%235.jpg"}, {"type": "Product", "name": "Red Rock Pea Gravel #78", "href": "products/red-rock-pea-gravel-num-78/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Red%20Rock%20Pea%20Gravel%20%2378.jpg"}, {"type": "Product", "name": "Red Rock 1” to 2”", "href": "products/red-rock-1-to-2/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Red%20Rock%201in%20to%202in.webp"}, {"type": "Product", "name": "Sylacauga Marble 1” to 2”", "href": "products/sylacauga-marble-1-to-2/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Sylacauga%20Marble%201in%20to%202in.webp"}, {"type": "Product", "name": "Sylacauga Marble Under 1”", "href": "products/sylacauga-marble-under-1/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Sylacauga%20Marble%20Under%201in.webp"}, {"type": "Product", "name": "#5 Appalachian", "href": "products/num-5-appalachian/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Appalachian%20%235.webp"}, {"type": "Product", "name": "2” Appalachian Stone", "href": "products/2-appalachian-stone/index.html", "image": "assets/catalog/gravel-and-decorative-stone/2in%20Appalachian%20Stone.webp"}, {"type": "Product", "name": "4” Appalachian Stone", "href": "products/4-appalachian-stone/index.html", "image": "assets/catalog/gravel-and-decorative-stone/4in%20Appalachian%20Stone.webp"}, {"type": "Product", "name": "6”-12” Appalachian Stone", "href": "products/6-12-appalachian-stone/index.html", "image": "assets/catalog/gravel-and-decorative-stone/6in%20to%2012in%20Appalachian%20Stone.webp"}, {"type": "Product", "name": "Appalachian Boulders", "href": "products/appalachian-boulders/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Appalachian%20Boulders.webp"}, {"type": "Product", "name": "Limestone Grey Gravel #8910", "href": "products/limestone-grey-gravel-num-8910/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%238910.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #89", "href": "products/limestone-grey-gravel-num-89/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%2389.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #78", "href": "products/limestone-grey-gravel-num-78/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%2378.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #67", "href": "products/limestone-grey-gravel-num-67/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%2367.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #57", "href": "products/limestone-grey-gravel-num-57/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%2357.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #5", "href": "products/limestone-grey-gravel-num-5/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%235.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #4", "href": "products/limestone-grey-gravel-num-4/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%234.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel #24", "href": "products/limestone-grey-gravel-num-24/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gravel%20%2324.jpg"}, {"type": "Product", "name": "Limestone Grey Gravel Gabion Rip Rap 3”-6”", "href": "products/limestone-grey-gravel-gabion-rip-rap-3-6/index.html", "image": "assets/catalog/gravel-and-decorative-stone/Gabion%20Rip%20Rap%203in%20to%206in.jpg"}, {"type": "Product", "name": "Thin Stack", "href": "products/thin-stack/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thin%20Stack%20.png"}, {"type": "Product", "name": "Thin Regular", "href": "products/thin-regular/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thin%20Stack%20.png"}, {"type": "Product", "name": "Medium Stack", "href": "products/medium-stack/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%20%20Medium%20Stack%20.png"}, {"type": "Product", "name": "Medium Long", "href": "products/medium-long/index.html", "image": "assets/catalog/palletized-stone/Alabaam%20Field%20Stone%2C%20Medium%20Long.png"}, {"type": "Product", "name": "Medium Regular", "href": "products/medium-regular/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%20%2C%20Medium%20Regular%20.png"}, {"type": "Product", "name": "Thick Long", "href": "products/thick-long/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Thick%20Long.png"}, {"type": "Product", "name": "Extra Thick Long", "href": "products/extra-thick-long/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Extra%20Thick%20Long%20.png"}, {"type": "Product", "name": "1 Man/Mini Boulders (thick stack)", "href": "products/1-man-mini-boulders-thick-stack/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%201%20Man_Mini%20Boulders%20%28thick%20stack%29.png"}, {"type": "Product", "name": "2-4 Man Boulders", "href": "products/2-4-man-boulders/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%202-4%20Man%20Boulders.png"}, {"type": "Product", "name": "Stackable/Wall Boulders", "href": "products/stackable-wall-boulders/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Stackable_Wall%20Boulders.png"}, {"type": "Product", "name": "Speciamen/Landscape Boulders", "href": "products/speciamen-landscape-boulders/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Speciamen_Landscape%20Boulders.png"}, {"type": "Product", "name": "Finger Boulders", "href": "products/finger-boulders/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Finger%20Boulders%20.png"}, {"type": "Product", "name": "Basket Steppers", "href": "products/basket-steppers/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Basket%20Steppers.png"}, {"type": "Product", "name": "Large/Banded Steppers", "href": "products/large-banded-steppers/index.html", "image": "assets/catalog/palletized-stone/Alabama%20Field%20Stone%2C%20Large_Banded%20Steppers.png"}, {"type": "Product", "name": "2\" Brown Varigated Flagstone", "href": "products/2-brown-varigated-flagstone/index.html", "image": "assets/catalog/palletized-stone/Tennesse%20Flagstone%2C%20r2_%20Brown%20Varigated%20Flagstone%20.png"}, {"type": "Product", "name": "TN Blue/Grey regular Flagstone", "href": "products/tn-blue-grey-regular-flagstone/index.html", "image": "assets/catalog/palletized-stone/Blue_Grey%2C%20TN%20Blue_Grey%20regular%20Flagstone%20.png"}, {"type": "Product", "name": "TN Blue/Grey 2\" Flagstone", "href": "products/tn-blue-grey-2-flagstone/index.html", "image": "assets/catalog/palletized-stone/Blue_Grey%2C%20TN%20Blue_Grey%202_%20%20Flagstone%20%20%20.png"}, {"type": "Product", "name": "18\" x 36\" Stone Step Treads(3 Grey/3 Brown/ 3 Greybrown)", "href": "products/18-x-36-stone-step-treads-3-grey-3-brown-3-greybrown/index.html", "image": "assets/catalog/palletized-stone/Step%20Treads%2C%208_%20x%2036_%20Stone%20Step%20Treads%283%20Grey_3%20Brown_%203%20Greybrown%29.png"}, {"type": "Product", "name": "18\" x 48\" Stone Step Treads(3 Grey/3 Brown/ 3 Greybrown)", "href": "products/18-x-48-stone-step-treads-3-grey-3-brown-3-greybrown/index.html", "image": "assets/catalog/palletized-stone/Step%20Treads%2C%2018_%20x%2048_%20Stone%20Step%20Treads%283%20Grey_3%20Brown_%203%20Greybrown%29%20.png"}, {"type": "Product", "name": "Silt Fence & Accessories", "href": "products/silt-fence-accessories/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Silt%20Fence%20%26%20Accessories.png"}, {"type": "Product", "name": "Stakes & Posts", "href": "products/stakes-posts/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Stakes%20%26%20Posts.png"}, {"type": "Product", "name": "Wattles & Sediment Barriers", "href": "products/wattles-sediment-barriers/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Wattles%20%26%20Sediment%20Barriers.png"}, {"type": "Product", "name": "Erosion Control Blankets (ECB)", "href": "products/erosion-control-blankets-ecb/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Erosion%20Control%20Blankets%20%28ECB%29.png"}, {"type": "Product", "name": "Nonwoven Geotextile Fabric", "href": "products/nonwoven-geotextile-fabric/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Nonwoven%20Geotextile%20Fabric.png"}, {"type": "Product", "name": "Woven Geotextile Fabric", "href": "products/woven-geotextile-fabric/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Woven%20Geotextile%20Fabric.png"}, {"type": "Product", "name": "Construction Site Protection & Accessories", "href": "products/construction-site-protection-accessories/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Construction%20Site%20Protection%20%26%20Accessories.png"}, {"type": "Product", "name": "Natural Erosion Control Mats", "href": "products/natural-erosion-control-mats/index.html", "image": "assets/catalog/erosion-control-and-geotextiles/Natural%20Erosion%20Control%20Mats.png"}, {"type": "Product", "name": "4\" Roll Solid", "href": "products/4-roll-solid/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls%20_4_%20%26%206__%20Solid%20.png"}, {"type": "Product", "name": "6\" Roll Solid", "href": "products/6-roll-solid/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls%20_4_%20%26%206__%20Solid%20.png"}, {"type": "Product", "name": "4\" Roll Perforated", "href": "products/4-roll-perforated/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%20%204_%20%26%206__%20Perforated%20.png"}, {"type": "Product", "name": "6\" Roll Perforated", "href": "products/6-roll-perforated/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%20%204_%20%26%206__%20Perforated%20.png"}, {"type": "Product", "name": "4\" W/ Sock", "href": "products/4-w-sock/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%204_%20%26%206_%20_W_%20Sock%20.png"}, {"type": "Product", "name": "6\" W/ Sock", "href": "products/6-w-sock/index.html", "image": "assets/catalog/storm-and-drainage-pipe/Pipe%20%20%20Single%20Wall%20100%27%20Rolls_%20%204_%20%26%206_%20_W_%20Sock%20.png"}, {"type": "Product", "name": "Artificial Turf", "href": "products/artificial-turf/index.html", "image": "assets/catalog/artificial-turf/Artificial%20Turf.png"}];

function rankedSearch(q, limit=7){
  const query = q.trim().toLowerCase();
  const base = SEARCH_INDEX.filter(x => x.type === "Product" || x.type === "Category");
  if(!query) return base.slice(0, limit);
  const tokens = query.split(/\s+/).filter(Boolean);
  const matches = base.map(item => {
    const hay = item.name.toLowerCase();
    let score = hay.startsWith(query) ? 100 : hay.includes(query) ? 60 : 0;
    tokens.forEach(t => { if(hay.includes(t)) score += 18; });
    return {item, score};
  }).filter(x => x.score > 0).sort((a,b) => b.score-a.score || a.item.name.localeCompare(b.item.name)).slice(0,limit).map(x=>x.item);
  return matches.length ? matches : base.slice(0,limit);
}

function suggestionMarkup(items){
  return items.map(item => `<a class="inline-suggestion" href="${item.href}"><span><b>${esc(item.name)}</b><small>${item.type}</small></span><span>→</span></a>`).join("");
}

function setupInPageSearch(){
  const input = document.getElementById("homeProductSearch"), button = document.getElementById("homeProductSearchButton"), box = document.getElementById("homeProductSuggestions");
  if(input && button && box){
    const render = () => {
      const items = rankedSearch(input.value, 7);
      box.innerHTML = items.length ? suggestionMarkup(items) : suggestionMarkup(rankedSearch("", 7));
      box.classList.add("active");
    };
    const go = () => { const item = rankedSearch(input.value,1)[0]; if(item) location.href=item.href; };
    input.addEventListener("focus", render);
    input.addEventListener("input", render);
    input.addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); go(); } });
    button.addEventListener("click", go);
    document.addEventListener("click", e => { if(!e.target.closest(".material-search-field")) box.classList.remove("active"); });
  }

  const suppliesInput = document.getElementById("suppliesSearch"), suppliesButton = document.getElementById("suppliesSearchButton");
  if(suppliesInput && suppliesButton){
    const go = () => findProductAndGo(suppliesInput.value);
    suppliesButton.addEventListener("click", go);
    suppliesInput.addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); go(); } });
  }
}

function route(){
  const raw = location.hash.slice(1) || "home";
  const path = raw.split("?")[0];
  const parts = path.split("/");
  if(parts[0] === "product") { const aliases={"screened-topsoil": "topsoil-screened", "unscreened-topsoil": "topsoil-unscreened", "fill-dirt": "fill-dirt-unscreened", "concrete-sand": "concrete", "mason-mortar-sand-brown": "mason-tan-brown", "mason-mortar-sand-white": "mason-white", "earthtone-pea-gravel": "brown-pea-gravel", "earthtone-river-rock-num-4": "brown-river-rock-num-4", "earthtone-river-rock-num-5": "brown-river-rock-num-5", "oversize-earthtone-river-rock": "oversize-brown-river-rock", "gabion-rip-rap-3-6": "limestone-grey-gravel-gabion-rip-rap-3-6", "num-8910-limestone": "limestone-grey-gravel-num-8910", "num-89-limestone": "limestone-grey-gravel-num-89", "num-78-limestone": "limestone-grey-gravel-num-78", "num-67-limestone": "limestone-grey-gravel-num-67", "num-57-limestone": "limestone-grey-gravel-num-57", "num-5-limestone": "limestone-grey-gravel-num-5", "num-4-limestone": "limestone-grey-gravel-num-4", "num-24-limestone": "limestone-grey-gravel-num-24"}; location.replace("products/"+(aliases[parts[1]]||parts[1])+"/index.html"); return; }
  if(parts[0] === "category") { const categories={"mulch-pine": "mulch-and-pine-straw", "gravel-sand": "gravel-and-decorative-stone", "soil-blends": "soil-and-sand", "decorative-stone": "gravel-and-decorative-stone", "firewood": "additional-products-and-services", "mulch-pine-straw": "mulch-and-pine-straw", "soil-sand": "soil-and-sand", "gravel-decorative-stone": "gravel-and-decorative-stone", "palletized-stone": "palletized-stone", "erosion-geotextiles": "erosion-control-and-geotextiles", "storm-drainage": "storm-and-drainage-pipe", "artificial-turf": "artificial-turf", "additional": "additional-products-and-services"}; const category=categories[parts[1]]; location.replace(category?"collections/"+category+"/index.html":"collections/all/index.html"); return; }
  if(path === "supplies") { location.replace("collections/all/index.html"); return; }
  let html;
  if(path === "home") html = homePage();
  else if(path === "supplies") html = suppliesPage();
  else if(path === "about") html = aboutPage();
  else if(path === "contact") html = contactPage();
  else if(path === "quote") {
    const query = raw.includes("?") ? "?" + raw.split("?").slice(1).join("?") : "";
    location.replace("contact-us/index.html" + query + "#contact-form");
    return;
  }
  else if(path === "reviews") html = reviewsPage();
  else if(parts[0] === "category") html = categoryPage(parts[1]);
  else if(parts[0] === "product") html = productPage(parts[1]);
  else html = notFound();
  document.body.classList.toggle("is-home", path === "home");
  document.getElementById("app").innerHTML = html;
  setActiveNav(parts[0] === "category" ? "category" : parts[0]);
  closeMobileMenu();
  window.scrollTo({top:0,behavior:"instant"});
  revealSetup(); setupScrollButtons(); setupReviewCarousels(); setupProjectCarousels(); setupFaqs(); setupForms(); setupStepForms(); setupGallery(); setupCollectionFilter(); setupInPageSearch();
  const section = new URLSearchParams((location.hash.split("?")[1] || "")).get("section");
  if(path === "home" && section){
    requestAnimationFrame(() => {
      const target = document.getElementById(section === "faq" ? "homeFaq" : section === "reviews" ? "homeReviews" : section);
      if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
    });
  }
}

function setupHeaderSearch(){
  const input = document.getElementById("siteSearch"), box = document.getElementById("searchResults"), overlay = document.getElementById("searchOverlay");
  const openButtons = [document.getElementById("openSearch"), document.getElementById("mobileSearchButton")].filter(Boolean);
  const closeButtons = [document.getElementById("closeSearch"), document.getElementById("closeSearchBackdrop")].filter(Boolean);
  if(!input || !box || !overlay) return;

  const render = () => {
    const results = rankedSearch(input.value, 9);
    box.innerHTML = results.length ? results.map(item => `<a class="search-result" href="${item.href}"><img class="search-thumb" src="${item.image}" onerror="this.style.display='none'" alt=""><span><b>${esc(item.name)}</b><small>${item.type === "Product" ? "Product in the current catalogue" : "Material category"}</small></span><span class="type">${item.type}</span></a>`).join("") : `<div class="search-empty"><b>Stay inside the Earth Works catalogue</b><span>Try gravel, limestone, river rock, topsoil, mulch or pine straw.</span></div>`;
    box.classList.add("active");
  };
  const open = () => { overlay.classList.add("open"); overlay.setAttribute("aria-hidden","false"); document.body.classList.add("search-open"); input.value=""; render(); setTimeout(()=>input.focus(),80); };
  const close = () => { overlay.classList.remove("open"); overlay.setAttribute("aria-hidden","true"); document.body.classList.remove("search-open"); };
  openButtons.forEach(btn => btn.addEventListener("click", open));
  closeButtons.forEach(btn => btn.addEventListener("click", close));
  input.addEventListener("input", render);
  input.addEventListener("keydown", e => { if(e.key === "Enter"){ e.preventDefault(); const found=rankedSearch(input.value,1)[0]; if(found){ location.href=found.href; close(); } } if(e.key === "Escape") close(); });
  box.addEventListener("click", e => { if(e.target.closest("a")) close(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape" && overlay.classList.contains("open")) close(); });
}

function setupMobileMenu(){
  const btn = document.getElementById("menuButton"), nav = document.getElementById("mainNav");
  if(!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded",String(open));
    document.body.classList.toggle("menu-open",open);
  });
  const supplyTrigger = nav.querySelector(".client-nav-dropdown__trigger");
  if(supplyTrigger) supplyTrigger.addEventListener("click", e => {
    e.preventDefault();
    const drop=supplyTrigger.closest(".client-nav-dropdown");
    const open=drop.classList.toggle("open");
    supplyTrigger.setAttribute("aria-expanded",String(open));
  });
  nav.addEventListener("click", e => {if(e.target.closest("a")) closeMobileMenu();});
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", () => {setupHeaderSearch();setupMobileMenu();route();});

