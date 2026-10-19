EARTH WORKS LOCAL PREVIEW

1. Extract this ZIP completely.
2. Open index.html in Chrome.
3. All collection, product, reviews, about, contact, FAQ, quote, and shop-all links now point to the actual index.html file inside each route folder, so Chrome will open the page instead of showing a folder directory listing.
4. The full black header + tan navigation uses a fixed-position fallback so it stays visible while scrolling in local Chrome preview.

Shopify production note:
The folder structure still mirrors Shopify-style routes such as /collections/mulch-and-pine-straw/ and /products/product-name/. The explicit index.html links are only for reliable local file preview; Shopify itself will use its normal clean routes when the templates are implemented there.
