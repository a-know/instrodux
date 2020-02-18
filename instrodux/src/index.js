import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Header from './Header'
import Loading from './Loading'
import Config from './Config'
import Basic from './Basic'
import Business from './Business'
import Forcus from './Forcus'
import Gauge1 from './Gauge1'
import * as serviceWorker from './serviceWorker';

let introduction_state = {
    bubble: "こんにちは！\na-know（えいのう）です！",
    avatar: "https://secure.gravatar.com/avatar/6a9380c04ac4778efc300439707c517a?s=200&d=retro",
    name: "a-know",
    title: "Software Developer",
    message: "趣味でWebサービスなどを作るのが好きです！\nよろしくお願いします！",
    columnlabel1: "所属",
    columnvalue1: "株式会社はてな",
    columnlabel2: "住所",
    columnvalue2: "岡山県倉敷市",
    columnlabel3: "TEL",
    columnvalue3: "123-4567-8901",
    columnlabel4: "EMail",
    columnvalue4: "a-know@example.com",
    columnlabel5: "Website",
    columnvalue5: "https://home.a-know.me/",
    forcuslabel: "とくいなこと",
    forcuscolumn1: "早寝早起き",
    forcuscolumn2: "子守り",
    forcuscolumn3: "早食い",
    forcuscolumn4: "散歩",
    gaugelabel: "ステータス",
    gaugecolumnlabel1: "HP",
    gaugecolumnvalue1: "70",
    gaugecolumnlabel2: "MP",
    gaugecolumnvalue2: "40",
    gaugecolumnlabel3: "ちから",
    gaugecolumnvalue3: "20",
    gaugecolumnlabel4: "すばやさ",
    gaugecolumnvalue4: "30",
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
                columnlabel2: action.columnlabel2,
                columnvalue2: action.columnvalue2,
                columnlabel3: action.columnlabel3,
                columnvalue3: action.columnvalue3,
                columnlabel4: action.columnlabel4,
                columnvalue4: action.columnvalue4,
                columnlabel5: action.columnlabel5,
                columnvalue5: action.columnvalue5,
                forcuslabel: action.forcuslabel,
                forcuscolumn1: action.forcuscolumn1,
                forcuscolumn2: action.forcuscolumn2,
                forcuscolumn3: action.forcuscolumn3,
                forcuscolumn4: action.forcuscolumn4,
                gaugelabel: action.gaugelabel,
                gaugecolumnlabel1: action.gaugecolumnlabel1,
                gaugecolumnvalue1: action.gaugecolumnvalue1,
                gaugecolumnlabel2: action.gaugecolumnlabel2,
                gaugecolumnvalue2: action.gaugecolumnvalue2,
                gaugecolumnlabel3: action.gaugecolumnlabel3,
                gaugecolumnvalue3: action.gaugecolumnvalue3,
                gaugecolumnlabel4: action.gaugecolumnlabel4,
                gaugecolumnvalue4: action.gaugecolumnvalue4,
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
ReactDOM.render(<Provider store={store}><Forcus /></Provider>, document.getElementById('dom-forcus'));
ReactDOM.render(<Provider store={store}><Gauge1 /></Provider>, document.getElementById('dom-gauge1'));

serviceWorker.unregister();
