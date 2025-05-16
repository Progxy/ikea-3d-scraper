document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("results");

  chrome.storage.local.get("glbRecords", ({ glbRecords }) => {
    if (!glbRecords || glbRecords.length === 0) {
      container.innerHTML = "<p>No models found yet.</p>";
      return;
    }

    glbRecords.reverse().forEach(({ product, modelUrl, timestamp }) => {
      const entry = document.createElement("div");
      entry.className = "entry";

      const productElem = document.createElement("div");
      productElem.className = "product";
      productElem.textContent = product;

      const urlElem = document.createElement("a");
      urlElem.className = "url";
      urlElem.href = modelUrl;
      urlElem.textContent = modelUrl;
      urlElem.target = "_blank";

      const timeElem = document.createElement("div");
      timeElem.className = "timestamp";
      timeElem.textContent = new Date(timestamp).toLocaleString();

      entry.appendChild(productElem);
      entry.appendChild(urlElem);
      entry.appendChild(timeElem);

      container.appendChild(entry);
    });
  });
});
