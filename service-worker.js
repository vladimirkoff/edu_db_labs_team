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
    "revision": "956cf4ff3caa6c6ec128a694536e7e3f"
  },
  {
    "url": "assets/css/0.styles.abf47e4f.css",
    "revision": "f33b7c703bf5afc75064fd8c9d8c1bbe"
  },
  {
    "url": "assets/img/delete_after.20d579b9.png",
    "revision": "20d579b9152d87afc4e20eea2fef6044"
  },
  {
    "url": "assets/img/delete_before.125dcac9.png",
    "revision": "125dcac99e3960f0e6fc2c2be0fb4601"
  },
  {
    "url": "assets/img/delete.30197b72.png",
    "revision": "30197b7238cd25bcffa240edae059fa1"
  },
  {
    "url": "assets/img/get_id.18cae8de.png",
    "revision": "18cae8dea424479dd708ea8de8cdc9e8"
  },
  {
    "url": "assets/img/post_after.d2b40520.png",
    "revision": "d2b405200632aaa09f60086f5b8bac4b"
  },
  {
    "url": "assets/img/post_before.f486847a.png",
    "revision": "f486847adcba71c9bbae65861a06b157"
  },
  {
    "url": "assets/img/post.f36bead4.png",
    "revision": "f36bead48baffd8ddbe8fcbc0471b3bf"
  },
  {
    "url": "assets/img/put_after.c97183b9.png",
    "revision": "c97183b9f3e1b7a7cdcbf4e5b2dd680c"
  },
  {
    "url": "assets/img/put.6701ce67.png",
    "revision": "6701ce67c4714b2601787dd57630a9c6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7226da2e.js",
    "revision": "32b93e696044aa7949f21faa4fabdd5d"
  },
  {
    "url": "assets/js/10.04356aee.js",
    "revision": "266ac7d94d5ae16655657069635c41f2"
  },
  {
    "url": "assets/js/13.b612c842.js",
    "revision": "34cd4832cf0e156bbb6f93ebb984f881"
  },
  {
    "url": "assets/js/14.2fece8c3.js",
    "revision": "a9be234867bf435ced3ec427db81b47a"
  },
  {
    "url": "assets/js/15.17116c44.js",
    "revision": "94ab40b0ae0bbc0015f4bd0859395be6"
  },
  {
    "url": "assets/js/16.3329258b.js",
    "revision": "3099e06b7dfd7d8b9005083984299663"
  },
  {
    "url": "assets/js/17.05b2949f.js",
    "revision": "ec82a8c7195d2dde6c794482253869da"
  },
  {
    "url": "assets/js/18.d34f706c.js",
    "revision": "d12dba1a9a7706c8b37cca889e347d37"
  },
  {
    "url": "assets/js/19.55185ad3.js",
    "revision": "4892856f92a3216b9bba4673ac4d367d"
  },
  {
    "url": "assets/js/2.5f96e462.js",
    "revision": "0abd1cd3b731142577b4cd70528c3ec0"
  },
  {
    "url": "assets/js/20.8db00af0.js",
    "revision": "3ded936e7af0b19d2eb3571af102111b"
  },
  {
    "url": "assets/js/21.c296e57e.js",
    "revision": "d7dc3d84e830e67a538c6785e54fffa6"
  },
  {
    "url": "assets/js/22.c165295c.js",
    "revision": "2d2aefcd7cb000ccfc7354d5c4d7992b"
  },
  {
    "url": "assets/js/23.2d5a883a.js",
    "revision": "05c3867aa6d44f09d35b28d89ffa8c7b"
  },
  {
    "url": "assets/js/24.cdf75a7e.js",
    "revision": "b342b9b2b02e6391a04927931da827b1"
  },
  {
    "url": "assets/js/25.2d14e857.js",
    "revision": "b9f0f7fdbd160f6264d23c9893ce1523"
  },
  {
    "url": "assets/js/26.2dd59344.js",
    "revision": "92d71d3eb5ee696b989946a96af0daf5"
  },
  {
    "url": "assets/js/27.48da715e.js",
    "revision": "ee41162037347f14957e9ace8e0a2224"
  },
  {
    "url": "assets/js/28.35e3ec0a.js",
    "revision": "8f39a319263e194f9f3d8b316913d65c"
  },
  {
    "url": "assets/js/29.98fcd9b8.js",
    "revision": "178976665ef9bfb9f143a398d231d8bc"
  },
  {
    "url": "assets/js/3.49439aac.js",
    "revision": "ba785f5ef9f15b19603ffb18aee7c990"
  },
  {
    "url": "assets/js/30.ac104949.js",
    "revision": "b845a1a3acbd17507e4b6c5e79250ca9"
  },
  {
    "url": "assets/js/31.4673b59d.js",
    "revision": "0a70b87eecd7590975f0b0a1d581750f"
  },
  {
    "url": "assets/js/32.bcb30731.js",
    "revision": "ae1fb79fa9c51faaaba55506f83f4da5"
  },
  {
    "url": "assets/js/33.5b719926.js",
    "revision": "1c613b4b445817614b7a01e489982e13"
  },
  {
    "url": "assets/js/34.da2e7b40.js",
    "revision": "d6e3cd1fa1879f4e5c44d71feeb769aa"
  },
  {
    "url": "assets/js/35.44a167a7.js",
    "revision": "1fe8d43a8457e576f2c346d7ac551233"
  },
  {
    "url": "assets/js/36.20fda74f.js",
    "revision": "6db8b838d8358bfabaa4fa8b2f1930e3"
  },
  {
    "url": "assets/js/37.3523e510.js",
    "revision": "7e2b3c09ec82bb514d9201d1eae2f265"
  },
  {
    "url": "assets/js/38.d6318c72.js",
    "revision": "2f620998bdae51f51a0aa549772d8771"
  },
  {
    "url": "assets/js/39.27c75d27.js",
    "revision": "391ac2e0bb7492ae3dd78ef29afb97b8"
  },
  {
    "url": "assets/js/4.b70c6aa3.js",
    "revision": "e90f434892453473b4c78681bc06a039"
  },
  {
    "url": "assets/js/41.b7ad4f39.js",
    "revision": "4a64eabbfdab15775cabe77202431645"
  },
  {
    "url": "assets/js/5.4a2b7df8.js",
    "revision": "a4d2c877c751bf6b268eabc6554b2ce5"
  },
  {
    "url": "assets/js/6.977d1ad9.js",
    "revision": "e051645315a365f35e29fd17ee2b9786"
  },
  {
    "url": "assets/js/7.a52464e1.js",
    "revision": "59fd54a7987b4411a11a74b7814005d1"
  },
  {
    "url": "assets/js/8.f8fc1c55.js",
    "revision": "69a6d1499586d7290b3301c901582bfd"
  },
  {
    "url": "assets/js/9.4f228a25.js",
    "revision": "919b9f0643e716960e5f9ac6db6310d1"
  },
  {
    "url": "assets/js/app.604f62d6.js",
    "revision": "409c3f88f7b131f9b0c2f59a480cd1a1"
  },
  {
    "url": "assets/js/vendors~docsearch.3cefa927.js",
    "revision": "a771ffaa589785db57bba23b6f8f053b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "2651b7b4a7b2b6c1a6a9daf93322d97f"
  },
  {
    "url": "design/index.html",
    "revision": "a376ed8283536c6cd26f2c12113b72e7"
  },
  {
    "url": "index.html",
    "revision": "ccae9656bb0ba194f9f4779d69250980"
  },
  {
    "url": "intro/index.html",
    "revision": "afd2a1f662d21b7d1ec2c68352fe34d4"
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
    "revision": "0f43846229335bdaa4fe405ed03378c4"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "697731e9a3c9cb8adcebcfc98f9586c4"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "44d4940c072a9332b29cedc429479907"
  },
  {
    "url": "software/index.html",
    "revision": "52471bfa6f2e0521cdac29ad589b0e7c"
  },
  {
    "url": "test/index.html",
    "revision": "ae56e3e77ad1a8320fe82969972aaf4b"
  },
  {
    "url": "use cases/index.html",
    "revision": "7c2ee329f0867307b3ce8fdaf5549a91"
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
