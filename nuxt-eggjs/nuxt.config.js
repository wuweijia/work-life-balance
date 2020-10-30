'use strict';

const pkg = require('./package');
module.exports = {
  srcDir: 'client/',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#000000' },

  modules: [
    [ '@nuxtjs/axios', { baseURL: 'http://127.0.0.1:7001' }],
  ],
  build: {},
};
