importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7d0df2761eb36bb66609.js",
    "revision": "fdb5c4129253ab15c5f9217f561c3898"
  },
  {
    "url": "/_nuxt/layouts_default.9689c17e7f4f54e8d21a.js",
    "revision": "a678bde36c7419c03ff6279ea96b2e6a"
  },
  {
    "url": "/_nuxt/layouts_public.66fb1e8951e1d383a93f.js",
    "revision": "06563c98d54d2a23769ff12d574babac"
  },
  {
    "url": "/_nuxt/layouts_std.06bc0a2d9e77bf6d809e.js",
    "revision": "3f088c36dc5f3f7d039560139db2b00b"
  },
  {
    "url": "/_nuxt/manifest.47cefbaeb9014e5554fe.js",
    "revision": "418556e05f981e5559eef90264349d0f"
  },
  {
    "url": "/_nuxt/pages_auth.99e6447203d3217f45c6.js",
    "revision": "c04407d8d08721dd6c6842c80a604d99"
  },
  {
    "url": "/_nuxt/pages_chat.9ed79b10349bfb407021.js",
    "revision": "92f9116b949899ef428453239d6fd143"
  },
  {
    "url": "/_nuxt/pages_index.9c21285822c80f69b8de.js",
    "revision": "94eab8c9cefb5eaed7a130fa0db790a9"
  },
  {
    "url": "/_nuxt/pages_logout.dcbc1996508bf93212a6.js",
    "revision": "1d2799ec16abe000097da4e7683dce97"
  },
  {
    "url": "/_nuxt/pages_member.a630d0e51a5e2c0eacd5.js",
    "revision": "2de8a92c6ab2e9d4e9705818a7df3417"
  },
  {
    "url": "/_nuxt/pages_register.4ef39e97af56769c8f0f.js",
    "revision": "ac3c9e7063a7ce89bf78bb7884228eb7"
  },
  {
    "url": "/_nuxt/pages_stdpage_behavior.d6c9eba1f9faf8ca148b.js",
    "revision": "14db4ba6775ef697e2133d90699c7129"
  },
  {
    "url": "/_nuxt/pages_stdpage_index.e1c594bc7cd2b6a84fdb.js",
    "revision": "bea29b16f39f91b045a8c646f25fb972"
  },
  {
    "url": "/_nuxt/pages_stdpage_profile.63d37a7aea5ea7b576b1.js",
    "revision": "1f2df8ddb47df6f76ed21ff478768c8f"
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
    "url": "/_nuxt/pages_student_behavior.2cb70b97307ac9c2ec06.js",
    "revision": "8a7ddb8ac5c52a59e3d0636559c3cbeb"
  },
  {
    "url": "/_nuxt/pages_student_check.7f233ba29ac13847051c.js",
    "revision": "97f22f2dd953b67da508f3c0a118c279"
  },
  {
    "url": "/_nuxt/pages_student_delete.acd78cc7d83dcae04286.js",
    "revision": "d67155344742215d834eb755b2b86c82"
  },
  {
    "url": "/_nuxt/pages_student_edit.e336f3554d951de2e45f.js",
    "revision": "88e2002cfc27e87ac7fd7b4487177d65"
  },
  {
    "url": "/_nuxt/pages_student_index.aec93820b34d27a7d14e.js",
    "revision": "8854efbe87433b7457874ff25b55ccc6"
  },
  {
    "url": "/_nuxt/pages_student_member.d28d2cbb7ed6979ffa6d.js",
    "revision": "07862b09d4d2ae8e51e84d18c37f6a10"
  },
  {
    "url": "/_nuxt/pages_student_student3.c627d4aeaea454505e10.js",
    "revision": "c4497900dbbe2e8f0e502feff870dd11"
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
    "url": "/_nuxt/vendor.e2cc2caffb89d6e15fd5.js",
    "revision": "50053f54d06f6cf192b0742741eddc8c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

