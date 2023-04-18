
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

precacheAndRoute([{ "revision": "0f79c7eb67e55e6b804ba41312b2e119", "url": "App.css" }, { "revision": "d41d8cd98f00b204e9800998ecf8427e", "url": "sw.js" }]);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/serviceworker.js");
}