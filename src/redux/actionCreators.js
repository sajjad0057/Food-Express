import * as actionTypes from "./actionTypes.js";

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
