import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes.js";
import { initialContactForm } from "./form.js";
import { createForms } from "react-redux-form";

const dishReducer = (dishState = { isLoading: false, errMess:null, dishes: [] }, action) => {
  switch (action.type) {
    case actionTypes.DISHES_LOADING:
      return {
        ...dishState,
        isLoading: true,
      };
    case actionTypes.LOAD_DISHES:
      //console.log("reducer.js",action.payload);
      return {
        ...dishState,
        isLoading: false,
        dishes: action.payload,
      };
    case actionTypes.DISHES_FAILED:
      return {
        ...dishState,
        isLoading : false,
        errMess : action.payload,
        dishes : null,
      }
    default:
      return dishState;
  }
};

const commentReducer = (commentState = { isLoading: true, comments: [] },action) => {
  //console.log("reducer.js action ----> ",action);
  switch (action.type) {
    case actionTypes.LOAD_COMMENTS:
      //console.log("********",action.payload);
      return {
        ...commentState,
        isLoading: false,
        comments: action.payload,
      };
    case actionTypes.COMMENT_LOADING:
      return {
        ...commentState,
        isLoading: true,
        comments: [],
      };
    case actionTypes.ADD_COMMENT:
      let newComment = action.payload;
      return {
        ...commentState,
        comments:commentState.comments.concat(newComment)
      }

    /* The concat() method is used to join two or more arrays.
       This method does not change the existing arrays, but returns a new array,
       containing the values of the joined arrays.
    */
    default:
      return commentState;
  }
};

export const Reducer = combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
  ...createForms({
    feedback: initialContactForm,
  }),
});

/* combineReducers() function uses to combine two or more helperReducer function,
   combineReducers() receives a object and helperReducer functions are being object
   property value. 
 */
