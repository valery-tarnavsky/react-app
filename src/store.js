import { createStore, combineReducers, applyMiddleware } from 'redux'
import {cardsReducer, deckReducer, addingDeckReducer} from "./reducers";
import { routerReducer, routerMiddleware } from 'react-router-redux'
import {history} from './history';

import * as localStore from './localStore';

const middleware = routerMiddleware(history);

export const store = createStore(combineReducers({
    cards : cardsReducer,
    decks: deckReducer,
    addingDeck: addingDeckReducer,
    routing: routerReducer,
}),
    localStore.get(),
applyMiddleware(middleware)
);