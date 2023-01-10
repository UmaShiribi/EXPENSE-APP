import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import userReducer from "../reducers/userReducer"
import budgetReducer from "../reducers/budgetReducer"
import categoriesReducer from "../reducers/categoriesReducer"
import expenseReducer from "../reducers/expenseReducer"

const configureStore = ()=>{
    const store = createStore(combineReducers({
        users: userReducer,
        budget: budgetReducer,
        categories: categoriesReducer,
        expenses: expenseReducer
    }), applyMiddleware(thunk))
    return store

}

export default configureStore
