import DISHES from '../data/dishes';
import COMMNETS from '../data/comments';


const initialState = {
    dishes : DISHES,
    comments : COMMNETS,
    sample : "Hello World",
}


export const Reducer = (state=initialState,action) =>{
    //console.log("from Reducer :", action);
    //console.log("check spread Operator : ",{...state});
    if(action.type === "TEST"){
        return{
            ...state,
            sample : action.val
        }
    }
    return state;

}