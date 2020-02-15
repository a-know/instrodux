import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Header from './Header'
import Loading from './Loading'
import Config from './Config'
import Basic from './Basic'
import * as serviceWorker from './serviceWorker';

let introduction_state = {
    name: "a-know",
}

function edit(state = introduction_state, action) {
    switch (action.type) {
        case 'EDIT':
            return {
                name: action.name
            };
        default:
            return state;
    }
}

let store = createStore(edit);


ReactDOM.render(<Header />, document.getElementById('dom-header'));
ReactDOM.render(<Loading />, document.getElementById('dom-loading'));
ReactDOM.render(<Provider store={store}><Config /></Provider>, document.getElementById('dom-config'));
ReactDOM.render(<Provider store={store}><Basic /></Provider>, document.getElementById('dom-basic'));

serviceWorker.unregister();
