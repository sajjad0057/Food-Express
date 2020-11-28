import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducer.js';
import logger from 'redux-logger';

/* logger is a opensource Middleware package,
 * logger basically monitor each step and print step in console when dispatching action to Store.
 * For this we passing logger as parameter with applyMiddleware().
 * applyMiddleware( ) receives all middleware as parameter.
 */


const myStore = createStore(Reducer,applyMiddleware(logger));

export default myStore;
