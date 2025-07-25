'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0e466bb013202febdb57ee1755936069",
"version.json": "2a4bdd3370ee966319e180d97d91e050",
"index.html": "dc4c49f916166ce1a650dbe8fd538222",
"/": "dc4c49f916166ce1a650dbe8fd538222",
"main.dart.js": "fa353dad4d8b5c4e9da2c68c3b2a04a4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "9d352258ee21c357018bf1eb16313336",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b68dbc4f5b4f96af08509da0635caa5",
"assets/AssetManifest.json": "57bfc3354b4c1b4084363edea5fd1a4d",
"assets/NOTICES": "ede8f7cdea3f6a2f4a350840e1b81f3a",
"assets/FontManifest.json": "d4a7bad73f60109c776464d295509d3d",
"assets/AssetManifest.bin.json": "a77ee220b082ac936480b722c49ab930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6c5f1db04a3b4e41d9f066e1818f215e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/svg/circle_title.svg": "68729a3e63204e59208880c7de8edcd2",
"assets/assets/svg/email.svg": "09ff13ab7cc563323bfe5794eb98c408",
"assets/assets/svg/fi-rr-download.svg": "2f68f53b098cb890318cf70cb83c1f8b",
"assets/assets/svg/phone.svg": "ed65633ef899b1cfd4a1eb4eadecb165",
"assets/assets/svg/location.svg": "7992b5e9db89b8add297a42e46a7e213",
"assets/assets/svg/hobbi/sports.svg": "39b637f47c39d96b0df57a7afa3de89b",
"assets/assets/svg/hobbi/developing.svg": "46d14a697398165f3578c62543c2e9a6",
"assets/assets/svg/hobbi/plane.svg": "5e38b425d7e1feb545fdcc50f6cf89b0",
"assets/assets/svg/hobbi/coffee.svg": "580d26bf66654d93ea28e06ec4d10e6d",
"assets/assets/svg/hobbi/design.svg": "c91befe8fecb3cb2846a65aabd6f6c60",
"assets/assets/svg/hobbi/mac_os.svg": "fba00ed9cf3a90243d109a7e59bd2986",
"assets/assets/svg/hobbi/reading.svg": "058a8e12a38f38036108fbaff3a02914",
"assets/assets/svg/hobbi/other_activity.svg": "0a7b0d38616581d7d379f2f4dde04cf1",
"assets/assets/images/left_1.png": "3434d614a069b53abcb37b03e274c67f",
"assets/assets/images/right_bottom.png": "2423a676dffce6c30ff66619408aeff6",
"assets/assets/images/profile_image.png": "4eafbf739d32a5379cf4426be8b73059",
"assets/assets/images/projects/vtac.png": "d242d606aa3038c4b72d964695264012",
"assets/assets/images/projects/grow.png": "2b91b59503651f2da9afc5301105194a",
"assets/assets/images/projects/vpm_cloud.png": "1198a420bd228d222454d557f2359e9a",
"assets/assets/images/projects/one_ummah.png": "1997cf926538a8c02ed847b59c8e5f1f",
"assets/assets/images/projects/yippekart.png": "0d0ca0aeaf2474abc7a66513d8f6ab19",
"assets/assets/images/projects/top_seat.png": "81d1ecf949fa9c5a6082630db43f5399",
"assets/assets/images/jewel_logo.png": "30a547d54d3daf028c8ec20fef8f7a1a",
"assets/assets/images/logo.png": "95635860334840b86ddc90f7f53d0be2",
"assets/assets/images/top_center.png": "b8ff5f1ae74be48cce735458a65e5d1a",
"assets/assets/images/my_skills/figma.svg": "47d5d026bc10e486a8a2ae254000847f",
"assets/assets/images/my_skills/firebase.svg": "c556aae40872857790f6cc749be2be82",
"assets/assets/images/my_skills/java.svg": "37869e6768d15e8dd8d744186a237715",
"assets/assets/images/my_skills/github.svg": "946c3c6e3596e1821ba63e67f4e96960",
"assets/assets/images/my_skills/ci_cd.svg": "2034e902f15c729db12f877cff39df8b",
"assets/assets/images/my_skills/flutter.svg": "6dcb4317409680692e33f517c100a0f9",
"assets/assets/images/my_skills/git.svg": "e2344144f7f14c3b0b6eee71bec111cb",
"assets/assets/images/my_skills/rest_api.svg": "7973ad4d34b6243b6173f5248ab0e0dd",
"assets/assets/images/my_skills/jira.svg": "72ead1b1fb66203edf0a1d6e072823ee",
"assets/assets/images/my_skills/kotlin.svg": "77615d68e56de399fef0c54fb1c2fb7e",
"assets/assets/images/my_skills/dart.svg": "1506ee80142d3c62ba7588b7805b66db",
"assets/assets/images/my_skills/riverpod.svg": "9b0f21dfdb34167136701cbd68ecc962",
"assets/assets/images/my_skills/getx.svg": "6fcf3285fbe01c45c69e184ec2364888",
"assets/assets/images/my_skills/trello.svg": "aa0274ac5b900f2b34378b6e96984958",
"assets/assets/images/my_skills/slack.svg": "1165308c321a37ed462b7d39a32ee596",
"assets/assets/images/my_skills/bloc.svg": "5cbea097623bc30a705b9eabb02d713a",
"assets/assets/images/picofme.png": "1b4bf5d5d91e7742dfa4b0139c64e2c7",
"assets/assets/images/pic.png": "6d500865a4f30f7924516bc523039f59",
"assets/assets/images/my_services/flutter.png": "fc21a6bda4efc83b136550cc6573868d",
"assets/assets/images/my_services/deploy.png": "7e48ecd16d193ef8db2cb43d70576b9e",
"assets/assets/images/my_services/custom_dev.png": "a3631346eb874a53f8bf12edc1a1dc47",
"assets/assets/images/my_services/sdk.png": "0db4e4ebf3d5062bf13437e8f9260a8a",
"assets/assets/images/my_services/mvp.png": "26bd00f10206559569bc8a6215f343f7",
"assets/assets/images/my_services/performance.png": "c8b56a82f0c096063e7ae43b8b96e6d9",
"assets/assets/images/my_services/bug.png": "28b1d459f0b884d091410010c1862676",
"assets/assets/images/my_services/api.png": "ecefe48cd7d7dc453c8904bc791aaf5d",
"assets/assets/images/my_services/ui.png": "4d11e0e8c13bbe37cf585ed06716b016",
"assets/assets/images/bg.png": "ad17e0b60512c37d8c55eaa935f8cefd",
"assets/assets/icons/github-2.png": "e94a005b15b2ce077bad43fbca576488",
"assets/assets/icons/facebook-2.png": "a6d140315d43c40ba46c84c6923bf31c",
"assets/assets/icons/whatsapp.png": "2f75eb1e8bea2a770985aa91bdf27ff6",
"assets/assets/icons/linkedin-2.png": "992686714d3d9810ddcb798c329d9802",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat-Italic.ttf": "5128267cb132ae4a1a9e1d8ed61c1834",
"assets/assets/fonts/Roboto-Italic.ttf": "1fc3ee9d387437d060344e57a179e3dc",
"assets/assets/fonts/Roboto-Bold.ttf": "8c9110ec6a1737b15a5611dc810b0f92",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
