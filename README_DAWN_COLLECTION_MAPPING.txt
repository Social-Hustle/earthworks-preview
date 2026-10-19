Earth Works static prototype — Dawn collection mapping

The collection prototypes intentionally follow Shopify Dawn's native collection architecture:
- Collection banner / hero
- Horizontal facets (Category)
- Product count
- Sort-by select
- 4-column desktop / 2-column mobile product grid
- Product-card links to /products/{handle}

In Shopify Dawn these map naturally to main-collection-banner and main-collection-product-grid with enable_filtering=true, filter_type=horizontal, enable_sorting=true.
The static HTML JavaScript is only for prototype behavior; production should use Dawn collection objects, filters and sort options.
