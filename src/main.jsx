import * as serviceWorker from './serviceWorker';
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Store from "./store/store";
import "./output.css"
import "flowbite-react"
import 'flowbite';

export const store = new Store();

export const Context = createContext({
    store,
})

ReactDOM.render(
    <Context.Provider value={{
        store
    }}>
        <App />
    </Context.Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();