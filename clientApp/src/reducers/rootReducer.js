import postReducer from "./index"
import { combineReducers } from "redux"

const rootReducer = combineReducers({ postReducer })

export default rootReducer;