import { createStore } from 'redux';
import { Reducer } from './reducer.js';


const myStore = createStore(Reducer);

export default myStore;
