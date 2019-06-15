//make sure service workers are supported

if ('serviceWorker' in navigator) {
    console.log('service worker supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_pages.js')
            .then(() => {
                console.log('service worker: registered');
            })
            .catch((err) => {
                console.log(`service worker: error: ${err}`);
            })
    })
}