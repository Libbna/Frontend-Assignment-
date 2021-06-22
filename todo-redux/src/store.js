import { combineReducers, createStore } from "redux";

import todos from "./reducer/todo";

const rootReducer = combineReducers({
    todos
});

//creating central store
const store = createStore(rootReducer);

export default store;