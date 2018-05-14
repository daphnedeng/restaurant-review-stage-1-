 'use strict';

let currentVersion = 'review-v777';

//install the files to be access offline
self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(currentVersion).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/img/1.jpg',
                '/img/2.jpg',
                '/img/3.jpg',
                '/img/4.jpg',
                '/img/5.jpg',
                '/img/6.jpg',
                '/img/7.jpg',
                '/img/8.jpg',
                '/img/9.jpg',
                '/img/10.jpg',              
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
            ])
        })
    );
});

//render pages even the user is offline
self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    //these pages are individual resaurant.html?id=x
    if (url.pathname.startsWith('/restaurant.html')) {
        event.respondWith(
            caches.match('restaurant.html')
            .then(response => {
                return response || fetch(event.request)
            })
        );
        return;
    }  
    event.respondWith(  
      caches.match(event.request).then(response => {  
            // Cache hit - return response  
            return response || fetch(event.request);
        }) 
    );  
});

//update service worker
self.addEventListener('activate', event => 
    event.waitUntil(
        //get all the cache that exists
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    //remove the cache if it's different from current version
                    if (!currentVersion.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    )
);
