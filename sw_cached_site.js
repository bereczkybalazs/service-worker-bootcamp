const cacheName = 'v2'

self.addEventListener('install', (event) => {
    console.log('service worker installed');
})

//here you can clean old cache here
self.addEventListener('activate', (event) => {
    console.log('service worker activated');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            console.log(cacheNames);
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('service worker: clearing old cache');
                        return caches.delete(cache)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    console.log('service worker fetching');
    event.respondWith(
        //load the request on online
        fetch(event.request)
            .then(response => {
                // console.log(response.body);
                const cacheAssets = response.clone()
                caches
                    .open(cacheName)
                    .then(cache => {
                        console.log('service worker: caching files');
                        //put the actual response to the cache
                        cache.put(event.request, cacheAssets)
                    })
                return response
            })
            .catch(() => {
                //load cache on offline
                caches.match(event.request)
            })
    )
})
