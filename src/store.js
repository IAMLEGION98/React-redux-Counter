import { createStore } from "redux";
import { combineReducers } from "redux";

import count_reducer from "./reducers/counter_reducer";



const rootReducer = combineReducers(
    {
        count_reducer
    }
)
const store = createStore(rootReducer);

export default store;