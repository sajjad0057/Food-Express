import DISHES from '../data/dishes';
import COMMNETS from '../data/comments';


const initialState = {
    dishes : DISHES,
    comments : COMMNETS,

}


export const Reducer = (state=initialState,action) =>{
    //console.log("reducer.js action ----> ",action);
    if (action.type === "ADD_COMMENT"){
        let newComment = action.payload;
        newComment.id = state.comments.length;    // for add new object property javaScript follow "objectName.propertyName = value" format.
        newComment.date = new Date().toDateString()
        console.log("reducer.js newComment --->",newComment);
        return {
            ...state,
            comments : state.comments.concat(newComment)
            
            /**The concat() method is used to join two or more arrays.
             This method does not change the existing arrays, but returns a new array,
             containing the values of the joined arrays.
             */
        }

    }
    return state;

}