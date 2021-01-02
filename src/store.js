import { combineReducers, createStore } from "redux";
import usersReducer from './reducers/users';
import postsReducer from './reducers/posts';


let reducers = combineReducers({
    usersReducer,
    postsReducer
})

let store = createStore(reducers)

export default store