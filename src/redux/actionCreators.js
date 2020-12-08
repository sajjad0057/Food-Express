import * as actionTypes from "./actionTypes.js";
import axios from "axios";
import { baseUrl } from "./baseUrl.js";
import LoadComment from "../components/body/LoadComment.jsx";

export const addComment = (dishId, rating, author, comment) => dispatch => {
  const newComment  = {
    dishId:dishId,
    author:author,
    rating : rating,
    comment : comment,
    date : new Date().toISOString()
  }

  axios.post(baseUrl+"comments",newComment)
  .then(response=>{
    console.log("actionCreators.js----->",response.data)
    return response.data
  })
  .then(comment=>dispatch(commentConcat(comment)))
};

/* payload : {} is a object, in dispatch() function By this object
   send all info to store for performing something */


export const commentConcat = (comment) =>({
  type : actionTypes.ADD_COMMENT,
  payload : comment
})

export const commentLoading = () => ({
  type: actionTypes.COMMENT_LOADING,
});

export const loadComments = (comments) => ({
  type : actionTypes.LOAD_COMMENTS,
  payload : comments
});

export const fetchComments = ()=>dispatch=>{
  dispatch(commentLoading());
  axios.get(baseUrl+"comments")
  .then(response=>response.data)
  .then(comment=>dispatch(loadComments(comment)))
}



export const loadDishes = (dish) => {
  //console.log(dish);

  return {
    type: actionTypes.LOAD_DISHES,
    payload: dish,
  };
};

export const dishesLoading = () => {
  return {
    type: actionTypes.DISHES_LOADING,
  };
};

export const dishesFailed = errorMessage =>{
 console.log("actionCreators.js ---->",errorMessage)
 return {
  type : actionTypes.DISHES_FAILED,
  payload : errorMessage
 }
}

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());
    axios
      .get(baseUrl + "dishes")
      .then((response) => response.data)
      .then((dishes) => dispatch(loadDishes(dishes)))
      .catch(error=>dispatch(dishesFailed(error.message)))
  };
};
