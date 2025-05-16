# Ikea 3D Model Scraper

The following extension offers the possibility to scrape the .glb models that ikea shows in their "Preview 3D Model" mode.

To use it, clone it, then go to Chrome, and then in `chrome://extensions`, then enable/toggle on the `Developer mode`,
and then once the `Load unpacked` button appear press it, at this point select the `i3d-scraper` folder within this repository,
and let Chrome load it.

At this point the extension is triggered only by `ikea.com` domain, and similar ikea domains, therefore it will not watch anything else, otherwise your machine
would probably start spinning :).

So visit a ikea product page, visualize the 3d preview mode, and exit it (wait a few seconds for the extension to pick up the url),
now if everything goes ok, you just need to open the `ikea-3d-scraper` extension, by clicking on its icon in the Chrome top bar
(NOTE: if there is no icon, it should be pinned by opening the extensions icon in the top bar and pinning `ikea-3d-scraper`).

After clicking on the extension it should appear a popup containing all the urls of the 3d models found.

### Proudly made by TheProgxy for necessity.

