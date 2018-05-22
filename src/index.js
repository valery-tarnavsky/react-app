import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {store} from "./store";
import AppRoutes from './routes';
import {Provider} from "react-redux";
import { Router } from 'react-router';
import {history} from './history';

import * as localStore from './localStore';

let state = store.getState();
localStore.set(state, ['decks', 'cards']);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
         <AppRoutes />
        </Router>
    </Provider>,  document.getElementById('root'));

