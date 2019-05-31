import { createStore, combineReducers } from "redux";
import movieReducer from "./reducer";
import ratingReducer from "./ratingReducer"
const store = createStore(combineReducers({movieReducer,ratingReducer})
,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;