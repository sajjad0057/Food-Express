import * as actionTypes from "./actionTypes.js";
import DISHES from "../data/dishes";



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
  return (x) => {
    x(dishesLoading());

    setTimeout(() => {
      x(loadDishes(DISHES));
    }, 700);
  };
};
