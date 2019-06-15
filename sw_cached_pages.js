const cacheName = 'v1'


//cache manually
const cacheAssets = [
    'index.html',
    'yoshi.html',
    '/css/style.css',
    '/js/main.js'
]


self.addEventListener('install', (event) => {
    console.log('service worker installed');
    event.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('service worker: caching files');
                cache.addAll(cacheAssets)
            })
            .then(() => {
                self.skipWaiting()
            })
    )
})

//here you can clean old cache here
self.addEventListener('activate', (event) => {
    console.log('service worker activated');

})
