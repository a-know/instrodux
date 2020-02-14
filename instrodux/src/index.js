import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Loading from './Loading'
import Config from './Config'
import Basic from './Basic'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('dom-header'));
ReactDOM.render(<Loading />, document.getElementById('dom-loading'));
ReactDOM.render(<Config />, document.getElementById('dom-config'));
ReactDOM.render(<Basic />, document.getElementById('dom-basic'));

serviceWorker.unregister();
