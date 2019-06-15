self.addEventListener('install', (event) => {
    console.log('service worker installed');
})

//here you can clean old cache here
self.addEventListener('activate', (event) => {
    console.log('service worker activated');
})
