import {combineReducers} from 'redux';
import items from './items';


const createReducer = (asyncReducers) =>
    combineReducers({
        items,
        ...asyncReducers
    });

export default createReducer;
