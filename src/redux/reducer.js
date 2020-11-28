import DISHES from "../data/dishes.js";
import COMMNETS from "../data/comments.js";
import { combineReducers } from "redux";
import * as actionTypes from "./actionTypes.js"

const dishReducer = (dishState = DISHES, action) => {
  switch (action.type) {
    default:
      return dishState;
  }
};

const commentReducer = (commentState = COMMNETS, action) => {
  //console.log("reducer.js action ----> ",action);
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      let newComment = action.payload;
      newComment.id = commentState.length; // for add new object property javaScript follow "objectName.propertyName = value" format.
      newComment.date = new Date().toDateString();
      //console.log("reducer.js newComment --->", newComment);
      return commentState.concat(newComment);

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
});

/* combineReducers() function uses to combine two or more helperReducer function,
   combineReducers() receives a object and helperReducer functions are being object
   property value. 
 */
