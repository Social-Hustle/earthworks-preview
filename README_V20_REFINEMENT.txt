EARTH WORKS - V20 HEADER, DROPDOWNS AND BRAND REFINEMENT
=====================================================
Based on the supplied V19 ZIP. All 128 original HTML routes, approved main-page
copy, footer copy, original images and supplied documents are retained.
The shared V20 header/brand layer is present on all 119 full pages.

PREVIEW
Unzip and open index.html. For local development, serve this folder with a normal
static web server. Upload the entire folder contents, including all assets.

CHANGES
- Tighter five-part desktop utility header; smaller service links with light,
  curved underlines. Balanced account icon/text padding and phone widths.
- Pickup, Delivery and Install panels anchored directly below their triggers.
  Hover opens temporarily and closes on leaving the trigger/panel region.
  Clicking pins the panel open; Close, Escape or an outside click dismiss it.
  Keyboard Arrow Down and touch/click are supported.
- Client reference artwork and service photos, compact editable HTML copy,
  faded image edges, consistent cream callouts and readable primary CTAs.
- Two complete pickup location cards: street address, phone and email.
- Source-level normalization of legacy typography, including embedded page CSS.
  Existing V19 Arial heading and Segoe UI body roles are shared across pages,
  generated service panels, menu cards, buttons, forms and utilities. The short
  handwriting accent falls back to the approved body family, not a serif face.
- Shared collection/menu product-card markup and appearance, including image,
  title, meta text, View Product and Get a Quote. Laptop menus show three cards;
  arrows and horizontal scrolling reveal remaining products. Screens 1600px and
  wider show four. Service / Good to know keep their own visible sidebar.
- Real SVG United States and Spain flags next to English / Spanish. No reliance
  on OS emoji. Existing Spanish 'coming soon' availability is preserved.
- Sticky black/white navigation corrected on inner pages as well as the home page.

DEVELOPER NOTES
assets/earthworks-v20-refinement.css must remain the last stylesheet.
assets/earthworks-v20-navigation.js replaces the old V18 navigation script.
Older files/documents remain in the archive for baseline continuity; the V20
header spacing and component refinements above take precedence over older values.
The site remains a static prototype. Existing account, cart, unpopulated category
and Spanish placeholders are retained; this update does not add a backend.

LOCATION CONTENT NOTE
The V19 site's Indian Springs address (3225 Cahaba Valley Road, Indian Springs
Village, AL 35124) is retained so the dropdown and existing contact/footer pages
agree. The client's pickup layout reference labels a Pelham location at 119
Cahaba Valley Road. This was not silently substituted for the approved site data.
Both location cards use the existing site's phone numbers and email address.

LOCAL QA
- Header/menu bounds checked at 320, 390, 620, 768, 980, 981, 1024, 1121, 1280,
  1366, 1440, 1600 and 1920px viewport widths.
- 11 representative inner pages checked for loaded imagery, shared typography,
  correct nested asset paths and browser script errors.
- Hover enter/leave, hover-to-click pinning, close, keyboard, touch, scroll,
  sticky header, product carousel, language flags and existing search checked.
- Original main/footer copy and image/document bytes compared against V19.
- Tested locally; not deployed to a live website.
