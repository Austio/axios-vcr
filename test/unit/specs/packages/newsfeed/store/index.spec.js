import Vuex from 'vuex';
import Vue from 'vue';

import storeConfig, {
  FETCH_NEWSFEED,
  MUT_NEWSFEED,
  SET_PAGINATION,
  initialState,
} from '~packages/newsfeed/store/index';

import { testStoreAction } from '~test/vuexHelper';

describe('newsfeed store', () => {
  Vue.use(Vuex);
  const store = new Vuex.Store(storeConfig);

  beforeEach(() => {
    store.replaceState(initialState());
  });

  describe(FETCH_NEWSFEED, () => {
    it('Commits actions', (done) => {
      const action = {
        type: FETCH_NEWSFEED,
      };

      const expectedMutations = [
        { type: MUT_NEWSFEED },
        { type: SET_PAGINATION },
      ];

      testStoreAction({ expectedMutations, store, done, action });
    });

    xit('Creates Proper Store Shape', () => {
      expect(1).toBe(2);
    });
  });
});
