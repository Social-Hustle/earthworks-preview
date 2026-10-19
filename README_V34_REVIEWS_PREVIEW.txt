EARTH WORKS - V34 TWO-LOCATION REVIEWS PREVIEW

BASE
This package is based on earthworks_v33_hero_images_update.zip.

OPEN
Extract the full ZIP into a new folder, then open index.html and choose Reviews.
To open the revised page directly, open reviews/index.html.
The existing pages/reviews/index.html alias continues to redirect to that page.
No build command or additional dependency is required.

WHAT CHANGED
Only the existing reviews/index.html file was modified.
New page-scoped styles, interaction code and small preview-image assets were added.
The previous review wall is replaced by two independently controlled carousels:
- Earth Works Landscape Supply - Indian Springs
- Earth Works Landscape Supply - Birmingham

The layout follows the reference screenshot: rounded light-grey business summary,
Google styling, review cards, star rows, photo stacks, Show more and Leave a Review.
There are three cards visible on desktop, two on tablet and one on phones.
Previous/next buttons, horizontal touch/trackpad scrolling, keyboard navigation,
full-review dialogs and sample-photo galleries are functional.

PREVIEW DATA - IMPORTANT
The ten testimonial names, quotes and star values are carried forward from the
V33 Reviews page. They have not been independently verified against Google.
The split into two groups is for layout demonstration only, not verified
location assignment. The on-page notice makes this explicit.
Business ratings, review counts and posting dates have NOT been invented.
Cards say Website testimonial rather than claiming a recent Google posting date.
Photo thumbnails and galleries use existing website photography and are labelled
Sample photos; they are not claimed to be customer-submitted review photographs.
No Google verification badges or fake reviewer portrait photographs were added.

LEAVE A REVIEW
In this static client preview, each Leave a Review button displays a two-second,
bottom-right notice explaining that the correct location's Google review form
will be opened after connection. It does not collect or submit a review.
The previously removed review-submission form has not been reintroduced.

SHOPIFY HANDOFF
App supplied by the user:
https://apps.shopify.com/google-reviews-trust-badge
Demo supplied by the user:
https://reputon-google-reviews-demo.myshopify.com/
The demo was password-protected when checked on 8 October 2026, so the supplied
screenshot was the visual specification for this preview.

The Shopify implementation remains a separate step: connect the correct Google
Business Profiles for Indian Springs and Birmingham in Reputon, configure the
selected widget layout, and replace the preview with the actual app widgets.
Verify the exact business profile and review destination for each yard before
publication. Remove the sample-data notice and sample assets only when real,
correctly attributed location data is connected. This ZIP does not install or
configure the app and does not contain third-party account credentials.

UNCHANGED
The original V33 hero artwork, header, navigation, footer, homepage review strip,
contact page, forms, FAQ page, About Us page, collection/product pages and shared
site scripts/styles are retained. Every original file other than reviews/index.html
is byte-for-byte identical to V33.

QA
The review layouts were rendered in Chromium at 320, 390, 760, 768, 1024, 1440 and
1920px. No horizontal page overflow or missing review-widget images was found.
Carousel independence, previous/next/end states, keyboard Home, modal opening,
Escape and focus restoration, sample-photo browsing and the two review-button
preview notices were checked. See QA_V34_REVIEWS.json for details.
