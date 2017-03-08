import Vue from 'vue';

// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind');

Vue.config.productionTip = false;

// require all test files (files that ends with .test.js)
const testsContext = require.context('./specs', true, /\.spec.js$/);
testsContext.keys().forEach(testsContext);
