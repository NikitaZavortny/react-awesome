import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import { ClickReducer } from "./clicks-reducer";
import { UserReducer } from "./users-reducer";
import { clicksWatcher } from "../saga/clickSaga";

const SagaMiddleware = createSagaMiddleware(createStore);

//reducers combiner
const RootReducer = combineReducers({
    clicks: ClickReducer,
    users: UserReducer,
});


export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(SagaMiddleware)));

SagaMiddleware.run(clicksWatcher);