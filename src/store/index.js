import Vuex from 'vuex';
import Vue from 'vue';
import profiles from '~packages/profiles/store/index';
import newsfeed from '~packages/newsfeed/store/index';

// Vuex requies this polyfill in some browsers
require('es6-promise').polyfill();

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true, // Error on any changes outside of mutation handlers
  modules: {
    profiles,
    newsfeed,
  },
});

export default store;
