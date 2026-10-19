Earth Works v17 navigation update

Implemented for the static prototype in a Shopify Dawn-friendly structure:
- Thin announcement bar with clickable Call Today phone link.
- Black utility row: service promise + Pick Up / Delivery / Install, product search, both yard phone numbers, Account, Language, Cart.
- Account / Language / Cart are prototype controls and display Coming Soon messaging.
- White primary navigation: logo, Landscape Supplies mega menu, Reviews, About Us, Contact Us, FAQ, Get a Quote.
- Home link removed; logo is the home link.
- Pick Up / Delivery / Install open responsive service panels; mobile uses click/popup behavior.
- Landscape Supplies mega menu is a category list. Hovering/focusing a category refreshes product cards and a service/help panel on the right.
- Existing product and collection routes are reused wherever catalogue data exists.

Dawn implementation mapping:
- Announcement bar -> announcement-bar section/block
- Utility + primary header -> header section/snippets
- Mega menu -> header mega-menu snippet / menu-driven blocks
- Product cards -> standard card-product style markup/data
- Service panels -> theme app/section blocks or custom header snippets
