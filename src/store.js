import { combineReducers, createStore } from "redux";
import usersReducer from './reducers/users';

let reducers = combineReducers({
    usersReducer
})

let store = createStore(reducers)

export default store