import * as _ from 'lodash';

// eslint-disable-next-line
const axiosVCR = require('axios-vcr');

// store => vuex store instance
// expectedMutations => what you think should be passed in
// done => function provided by jasmine for async tests
// action => what you dispatch to the vuex store
export const testStoreAction = (({ store, expectedMutations, action, done }) => {
  const observedMutations = [];

  store.subscribe((mutation) => {
    observedMutations.push(mutation);
  });

  function matchExpectedActions() {
    _.forEach(expectedMutations, (expected) => {
      const mutationPayloads = observedMutations.map(m => m.payload);

      expect(_.some(mutationPayloads, expected))
      .toBe(true,
        // eslint-disable-next-line
        `Did not find expected mutation: \n ${JSON.stringify(expected)} \n` +
        `in Observed Mutations \n ${JSON.stringify(mutationPayloads)}`);
    });

    done();

    axiosVCR.ejectCassette('./fixtures/cats.json');
  }


  axiosVCR.mountCassette('./fixtures/cats.json');

  return store.dispatch(action)
    .then(() => matchExpectedActions())
    .catch((err) => {
      // eslint-disable-next-line
      console.log(`${JSON.stringify(err)} \n Error swallowed in vuexHelper for action \n ${JSON.stringify(action)}`);
      matchExpectedActions();
    });
});
