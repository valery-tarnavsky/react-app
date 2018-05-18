import { createStore, combineReducers } from 'redux'
import {cardsReducer, deckReducer, addingDeckReducer} from "./reducers";

export const store = createStore(combineReducers({
    cards : cardsReducer,
    decks: deckReducer,
    addingDeck: addingDeckReducer
}));