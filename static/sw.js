importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.36a489cea0b748b94334.js",
    "revision": "4da534078369fbb85255345998db865e"
  },
  {
    "url": "/_nuxt/layouts_default.951b211b5d84f11d9c67.js",
    "revision": "691f3996562065ced850321d0fadb5f4"
  },
  {
    "url": "/_nuxt/manifest.13660e0969b5fae6d7c0.js",
    "revision": "47626afd039dc080492ed3249e1a01df"
  },
  {
    "url": "/_nuxt/pages_auth.2dbe9ec7ed62039d2d67.js",
    "revision": "86b8562210010afa143aa8405b7d14ed"
  },
  {
    "url": "/_nuxt/pages_chat.a71084ab809223c4c506.js",
    "revision": "9a3340f766c9dbd669c0db2cfc0cfcfd"
  },
  {
    "url": "/_nuxt/pages_index.4c339ed71a719100dc2e.js",
    "revision": "990f384351192ec11511d93fd7c37b6e"
  },
  {
    "url": "/_nuxt/pages_logout.d2ac9f4337dd01d2eaae.js",
    "revision": "6a641225662bb257dbf11c6b04d8faa0"
  },
  {
    "url": "/_nuxt/pages_member.06bf04508fd3253f74fb.js",
    "revision": "5e52c91f1e0ecbb56e1de2ad7e029a51"
  },
  {
    "url": "/_nuxt/pages_register.3f4fb4c6ade38cef57fe.js",
    "revision": "5823cb45b7b4e2e12216570f31bb16a6"
  },
  {
    "url": "/_nuxt/pages_student_add_beh.eabffcf2c12c1d4d6cfe.js",
    "revision": "c714251d02cfaca76fe5c9a734d160c2"
  },
  {
    "url": "/_nuxt/pages_student_add.9859cef962116c789065.js",
    "revision": "648358f690498be6143e58f98ab57f80"
  },
  {
    "url": "/_nuxt/pages_student_behavior.1.44539aef9afe98bcd3ab.js",
    "revision": "e6e9d5916f764fa95a44f96b51aff87f"
  },
  {
    "url": "/_nuxt/pages_student_behavior.ee19fd2900ca107b5fc1.js",
    "revision": "a7612a9c6fd6d7c3529a194ea9ae0bc4"
  },
  {
    "url": "/_nuxt/pages_student_check.76ad89257b2691a1fc98.js",
    "revision": "ea1e97ee002e0386980951b1a52cd94d"
  },
  {
    "url": "/_nuxt/pages_student_delete.00eb67e12704c4eac545.js",
    "revision": "968034c72d09fad6f5e0338c6f759c7c"
  },
  {
    "url": "/_nuxt/pages_student_edit.8bd057562114c2849f6a.js",
    "revision": "3f15d103efb8b19027be551a7d6bbada"
  },
  {
    "url": "/_nuxt/pages_student_index.e31a6fbdee7f36562f94.js",
    "revision": "dcb8b7dee7f7a43d5d962ffa45d3b01d"
  },
  {
    "url": "/_nuxt/pages_student_member.868a10e2aba5a6d4fe99.js",
    "revision": "e3ecb2610a0e84e30780a55cd16b63e6"
  },
  {
    "url": "/_nuxt/pages_student_student3.785ca3a9dbd92d69731c.js",
    "revision": "f171a04763de3c719182b22459285e42"
  },
  {
    "url": "/_nuxt/pages_student.f9474dda01d369192b07.js",
    "revision": "b8d2aae534cedc5ab955d1a5de5390e1"
  },
  {
    "url": "/_nuxt/pages_student2.2990939f51fc3e328ce7.js",
    "revision": "d2e71ae39c8a2a1eec84e8a12ba06ee7"
  },
  {
    "url": "/_nuxt/vendor.140c0d875b72c64c6df7.js",
    "revision": "37dbd4542cd243c7d2066ecf1a36d663"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

