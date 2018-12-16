import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import itemsReducer from './reducers/itemsReducer';
import searchTermReducer from './reducers/searchTermReducer';

const logger = createLogger();

export default (initialState = {}) => (
    createStore(
        combineReducers({
            items: itemsReducer,
            searchTerm: searchTermReducer
        }),
        initialState,
        addMiddleware(logger)
    )
);