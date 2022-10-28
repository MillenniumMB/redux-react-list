import {applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk";
import {rootReducer} from "./redusers";


export const store = createStore(rootReducer, applyMiddleware(thunk));