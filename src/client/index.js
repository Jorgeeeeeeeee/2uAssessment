import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import ItemsList from './components/ItemsList';
import './index.css';

import store from './store';


ReactDOM.render(
    <Provider store={ store }>
        <App />
        <hr/>
        <ItemsList />
    </Provider>,
    document.getElementById('root')
);
