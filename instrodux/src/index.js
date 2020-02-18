import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Header from './Header'
import Loading from './Loading'
import Config from './Config'
import Basic from './Basic'
import Business from './Business'
import * as serviceWorker from './serviceWorker';

let introduction_state = {
    bubble: "こんにちは！\na-know（えいのう）です！",
    avatar: "https://secure.gravatar.com/avatar/6a9380c04ac4778efc300439707c517a?s=200&d=retro",
    name: "a-know",
    title: "Software Developer",
    message: "趣味でWebサービスなどを作るのが好きです！\nよろしくお願いします！",
    columnlabel1: "所属",
    columnvalue1: "株式会社はてな",
}

function edit(state = introduction_state, action) {
    switch (action.type) {
        case 'EDIT':
            return {
                bubble: action.bubble,
                avatar: action.avatar,
                name: action.name,
                title: action.title,
                message: action.message,
                columnlabel1: action.columnlabel1,
                columnvalue1: action.columnvalue1,
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
ReactDOM.render(<Provider store={store}><Business /></Provider>, document.getElementById('dom-business'));

serviceWorker.unregister();
