chrome.webRequest.onCompleted.addListener(
  (details) => {
    const url = details.url;
    const initiator = details.initiator || details.documentUrl || "";

    const isIkea = /:\/\/([^/]*\.)?ikea\.com/.test(initiator);
    const isGlb = url.endsWith(".glb");

    if (isIkea && isGlb) {
      // Get tab info from the request
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;

        const tabUrl = tabs[0].url || "";
        const match = tabUrl.match(/\/p\/([^/]+)/);
        const productId = match ? match[1] : "unknown";

        const record = {
          product: productId,
          modelUrl: url,
          timestamp: new Date().toISOString()
        };

        // Append to existing list in storage
        chrome.storage.local.get({ glbRecords: [] }, (data) => {
          chrome.storage.local.set({
            glbRecords: [...data.glbRecords, record]
          });
          console.log("Stored GLB for:", productId, url);
        });
      });
    }
  },
  { urls: ["<all_urls>"] }
);
