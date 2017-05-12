# es6testing
How to mock es6 imports using Sinon

Simply run `npm start` to run tests. The interesting code is in 2ndModule.spec.js, where we `import * as FirstModule from './1stModule'` in order to allow Sinon to mock any export for the secondModule's tests.
