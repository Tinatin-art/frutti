import {
    combineReducers
} from "redux";
import authSlice from "../auth/store/AuthSlice";
import productSlice from "../pages/main/store/ProductSlice";
// import categories from "../components/sidebar/store/SidebarSlice"

const createReducer = (asyncReducer) => (state, action) => {
    const combineReducer = combineReducers({
        authSlice,
        productSlice,
        ...asyncReducer,
    });

    return combineReducer(state, action);
};

export default createReducer;