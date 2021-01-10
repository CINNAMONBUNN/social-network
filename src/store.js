import { combineReducers, createStore } from "redux";
import usersReducer from './reducers/users';
import postsReducer from './reducers/posts';
import profileReducer from './reducers/profile';


let reducers = combineReducers({
    usersReducer,
    postsReducer,
    profileReducer
})

let store = createStore(reducers)

window.store = store
export default store