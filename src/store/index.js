import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { ClickReducer } from "./clicks-reducer";
import { UserReducer } from "./users-reducer";

const RootReducer = combineReducers({
    clicks: ClickReducer,
    users: UserReducer,
});


export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));