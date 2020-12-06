import * as actionTypes from "./actionTypes.js";
import axios from "axios";
import { baseUrl } from "./baseUrl.js"


export const addComment = (dishId, rating, author, comment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: {
      dishId: dishId,
      author: author,
      rating: rating,
      comment: comment,
    },
  };
};

/* payload : {} is a object, in dispatch() function By this object
   send all info to store for performing something */

export const loadDishes = (dish) => {
  //console.log(dish);

  return {
    type: actionTypes.LOAD_DISHES,
    payload: dish
  };
};

export const dishesLoading = () => {
  return {
    type: actionTypes.DISHES_LOADING,
  };
};

export const fetchDishes = () => {
  return (dispatch) => {
    dispatch(dishesLoading());
    axios.get(baseUrl+"dishes")
    .then(response=>response.data)
    .then(dishes=>dispatch(loadDishes(dishes)))

  };
};
 