import {
    combineReducers
} from "redux";
import authSlice from "../auth/store/AuthSlice";
import productSlice from "../pages/store/ProductSlice";
import commentSlice from "../pages/store/CommentSlice";

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        authSlice,
        productSlice,
        commentSlice,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;