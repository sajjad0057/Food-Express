import { createStore, applyMiddleware } from 'redux';
import { Reducer } from './reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



//console.log("store.js ---->",thunk);

/* logger is a opensource Middleware package,
 * logger basically monitor each step and print step in console when dispatching action to Store.
 * For this we passing logger as parameter with applyMiddleware().
 * applyMiddleware( ) receives all middleware as parameter.
 */

 /**
  * Redux Thunk middleware allows you to write action creators that return a 
  * function instead of an action. The thunk can be used to delay the dispatch of an 
  * action, or to dispatch only if a certain condition is met.
  * for more about Thunk middleware see documentation .
  */


const myStore = createStore(Reducer,applyMiddleware(logger,thunk));

export default myStore;
