const cacheName = 'site-static-v1';
const staticAssets = [
    '/',
    '/index.html',
    '/manifest.webmanifest.json',
    '/static/index.js',
    '/static/enums/InterestCalculatorEnums.js',
    '/static/services/Calculations.js',
    '/static/view/CalculatorContainer.js',
    '/static/view/CalculatorInput.js',
    '/static/view/CalculatorOutput.js',
    '/static/view/CalculatorSwitch.js',
    '/static/view/DomUtilities.js',
    '/static/view/calculators/Calculator.js',
    '/static/view/calculators/DownPaymentCalculator.js',
    '/static/view/calculators/InterestCalculator.js',
    '/static/view/style/ColorPalette.js',
    '/static/view/style/FormStyle.js',
    '/static/view/style/SwitchStyle.js',
    '/static/view/style/TableStyle.js',
    '/static/images/icon-192x192.png',
    '/static/images/icon-512x512.png',
];

self.addEventListener('install', async event => {
    console.log("Install event");
    event.waitUntil(addToCache());
});

async function addToCache() {
    const cache = await caches.open(cacheName);
    try {
        console.log("Trying to add static assets to cache: ", staticAssets);
        await cache.addAll(staticAssets);
    } catch(e) {
        console.log("Cache add failed..", e)
    }
}

self.addEventListener('activate', event => {
    console.log("Activate event");
    self.clients.claim(); // TODO ?
});

self.addEventListener('fetch', event => {
    //console.log("Fetch event");
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkAndCache(req))
    }
});

//TODO
async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

//TODO
async function networkAndCache(req) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req, fresh.clone());
        return fresh;
    } catch (e) {
        return await cache.match(req);
    }
}

