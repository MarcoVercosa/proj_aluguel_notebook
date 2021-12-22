//com tookit

import { configureStore, combineReducers } from "@reduxjs/toolkit"

import SelectMenuReducer from "./reducers/redux_changeMenu.reducers"
import increment from "./reducers/redux_counter.reducers"
import decrement from "./reducers/redux_counter.reducers"

const reducer = combineReducers({
    SelectMenuReducer: SelectMenuReducer,
    counterIncrement: increment,
    counterDecrement: decrement
})


const store = configureStore({
    reducer
})

export default store







