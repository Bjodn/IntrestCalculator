
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
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    try {
        await cache.addAll(staticAssets);
    } catch(e) {
        console.log(e)
    }
    return self.skipWaiting(); // TODO?
});

self.addEventListener('activate', event => {
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkAndCache(req))
    }
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

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

/*

// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});
// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    );
});*/