import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import mathReducer from "../reducers/mathReducer";
import userReducer from "../reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default createStore(
    combineReducers({mathReducer: mathReducer, userReducer: userReducer}),
    {},
    applyMiddleware(logger, thunk, promise)
);