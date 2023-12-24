/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "29b25847d963d6424bbb76fa472f047e"
  },
  {
    "url": "assets/css/0.styles.903a69a8.css",
    "revision": "4f4d8ba03743d0dfd8c279cdf67067e3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9bd71ba.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.df6d0676.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.b5784633.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.588a47b5.js",
    "revision": "760e3d4c11e406692744d7bef1f3df15"
  },
  {
    "url": "assets/js/16.4d29a29a.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.7eef65f5.js",
    "revision": "ced0d7f95b068c1f078fcbaee7132348"
  },
  {
    "url": "assets/js/18.e7c1cb81.js",
    "revision": "4b38030804be7f5717134b1ab72e3d35"
  },
  {
    "url": "assets/js/19.e32e026c.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.cc6a562c.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.353c1912.js",
    "revision": "f8f38967df47377e29665f980a20dbe5"
  },
  {
    "url": "assets/js/21.2d8c1bb4.js",
    "revision": "921d165ff088bff4dbe15e0649f0d006"
  },
  {
    "url": "assets/js/22.f4c4e787.js",
    "revision": "9278543b9041c4bc43a3fd5bf2535d74"
  },
  {
    "url": "assets/js/23.685cdddc.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.8fc7eda5.js",
    "revision": "5b70c25fb8cee668199b784a36df7071"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.612a98a1.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.b06b704d.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.020435f7.js",
    "revision": "fa502914de005121d73ba6c51e57efb2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f5c4fe41e40aa4153ed9badeb5aaf64b"
  },
  {
    "url": "design/index.html",
    "revision": "ef7023dbe2bc089656be30befb76a61e"
  },
  {
    "url": "index.html",
    "revision": "abd577d4692a1e2743b9bab50e75906e"
  },
  {
    "url": "intro/index.html",
    "revision": "266094a4c694bd937f6366815c53d54f"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "9b12aac53b2454b811efe0020f355e3c"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f1d8f326424ac5941aab8fd599272c28"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3e6ec477132021d73526ce1f87ba8b3f"
  },
  {
    "url": "software/index.html",
    "revision": "06336431f87736d35bad5ef392ed33fa"
  },
  {
    "url": "test/index.html",
    "revision": "25b725e187847cf0a19c8cd813899ae6"
  },
  {
    "url": "use cases/index.html",
    "revision": "c52fce7842529c21e6dbee1bd6ddf20a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
