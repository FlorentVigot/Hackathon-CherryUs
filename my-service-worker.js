function registerServiceWorker() {
  // enregistre le script sw avec les navigateurs qui le gèrent
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      // scope: requète de 'URl'
      .register("sw.js", { scope: "/" })
      .then(() => {
        console.log("Service Worker enregistré correctement.");
      })
      .catch((error) => {
        console.log(
          "Erreur lors de lenregistrement du Service Worker : ",
          error
        );
      });
  }
}

// sw.js
self.addEventListener("install", (e) => {
  e.waitUntil(
    // Après l'installation du service worker,
    // ouvre un nouveau cache
    caches.open("mon-cache-pwa").then((cache) => {
      // Ajoute toutes les URLs des éléments à mettre en cache
      return cache.addAll(["/", "/scan.html", "/tri.html"]);
    })
  );
});
