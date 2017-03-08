// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.config');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters: ['spec', 'coverage'],
    files: [
      '../../node_modules/es6-promise/dist/es6-promise.auto.js',
      './index.js'
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ]
    },
    concurrency: Infinity,
    logLevel: 'warn',
  });
};
