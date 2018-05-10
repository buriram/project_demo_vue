importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.3ed2555c4baf2d3a5a44.js",
    "revision": "e43d73bd544a3c59c4a3903988486786"
  },
  {
    "url": "/_nuxt/layouts_default.90260e1c401e1259fc3a.js",
    "revision": "6cc127c1df67fd4d02972dace92afac9"
  },
  {
    "url": "/_nuxt/layouts_login.840f80a15735469616c7.js",
    "revision": "d0f09388bd09cd6e71b0138a6f5c46ea"
  },
  {
    "url": "/_nuxt/manifest.2ce22d182b0acf4bb37a.js",
    "revision": "b62db5e7fc6784ded0d11666f39e9172"
  },
  {
    "url": "/_nuxt/pages_auth.bc5c2637d4ce9086f214.js",
    "revision": "c16d34e1811ae12bdcc17b433d71d798"
  },
  {
    "url": "/_nuxt/pages_chat.47e2a508fdc6a2df7447.js",
    "revision": "308340aa29e438a9f36dd7dc246e1e9d"
  },
  {
    "url": "/_nuxt/pages_index.f3f25aac531f0870ebe0.js",
    "revision": "749d61af72ca3c159c9bc3aaee960769"
  },
  {
    "url": "/_nuxt/pages_logout.413cfbe795bcfdd10298.js",
    "revision": "c27671005570d3365925dfd8190bae32"
  },
  {
    "url": "/_nuxt/pages_member.43e54292fb6c8a980a63.js",
    "revision": "ae9c27fd8339ff25e2d65162bd1cb359"
  },
  {
    "url": "/_nuxt/pages_register.cea61b0e6f189d115e12.js",
    "revision": "d7fc0809656d242ee19fa38473255c90"
  },
  {
    "url": "/_nuxt/pages_student_add_beh.a642e53a6b2255949b75.js",
    "revision": "77d2de854cbd65cdd20570ab7cce26a2"
  },
  {
    "url": "/_nuxt/pages_student_add.eabc15be357a555ec124.js",
    "revision": "b4e655f15345551cc429dd1d9300e247"
  },
  {
    "url": "/_nuxt/pages_student_behavior.88a83e9c1cfef6248d57.js",
    "revision": "db5b0e56c80f68ce24c9783d1854c02d"
  },
  {
    "url": "/_nuxt/pages_student_delete.b5bc3955d8c6b24a31c7.js",
    "revision": "0e11796adf6ce55021f647be6c34fc61"
  },
  {
    "url": "/_nuxt/pages_student_edit.8c295b6b606b01e6c569.js",
    "revision": "c21c9d42e8f67a3da907c145e36d02ca"
  },
  {
    "url": "/_nuxt/pages_student_index.1a94fdb31a920bb4e3f0.js",
    "revision": "2b131addf6da3ff2aa1140a76f88c5c0"
  },
  {
    "url": "/_nuxt/pages_student_member.bc5bf01aa383ac980e4b.js",
    "revision": "8ff6a4bd91ceaea8e27783890d8d274d"
  },
  {
    "url": "/_nuxt/pages_student.effb353586ffc4f7ac4d.js",
    "revision": "6a719ade2e51d32ff5fceac13c91b182"
  },
  {
    "url": "/_nuxt/pages_student2.ba4ff67e43dd366db803.js",
    "revision": "61c50c6af79fda7f61baefb3ab5c056e"
  },
  {
    "url": "/_nuxt/pages_student3.66e57d62f9abc6f1675c.js",
    "revision": "24a4f2ede6015f8ce745a15721befde6"
  },
  {
    "url": "/_nuxt/vendor.df846c8cc22b88ae8f14.js",
    "revision": "145eb7515c162dd2a68d4d6c14f15a48"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

