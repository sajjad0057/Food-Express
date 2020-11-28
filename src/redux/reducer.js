import DISHES from '../data/dishes';
import COMMNETS from '../data/comments';
import { combineReducers } from 'redux';



const dishReducer = (dishState = DISHES, action) =>{
    return dishState
}

const commentReducer = (commentState = COMMNETS, action) =>{
    //console.log("reducer.js action ----> ",action);
    if (action.type === "ADD_COMMENT"){
        let newComment = action.payload;
        newComment.id = commentState.length;    // for add new object property javaScript follow "objectName.propertyName = value" format.
        newComment.date = new Date().toDateString()
        console.log("reducer.js newComment --->",newComment);
        return commentState.concat(newComment)
            
            /**The concat() method is used to join two or more arrays.
             This method does not change the existing arrays, but returns a new array,
             containing the values of the joined arrays.
             */
        

    }
    return commentState

}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer
})

/* combineReducers() function uses to combine two or more helperReducer function,
   combineReducers() receives a object and helperReducer functions are being object
   property value. 
 */