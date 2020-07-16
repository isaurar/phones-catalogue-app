import {combineReducers} from 'redux';

import {
    FETCH_ATTEMPTED,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from './actionTypes.js';

const initialState = {
    error: null,
    data: null,
    metadata: null,
    isFetching: false
};

const isFetching = (state = initialState.isFetching, {type}) => {
    switch(type) {
        case FETCH_ATTEMPTED:
            return true;
        case FETCH_SUCCEEDED:
        case FETCH_FAILED:
            return false;
        default:
            return state;
    }
};

const error = (state = initialState.error, {type, payload}) => {
    switch (type) {
        case FETCH_FAILED:
            return payload;
        case FETCH_ATTEMPTED:
        case FETCH_SUCCEEDED:
            return null;
        default:
            return state;
    }
};

const data = (state = initialState.data, {type, payload}) => {
    switch(type) {
        case FETCH_SUCCEEDED:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
    isFetching,
    error,
    data
});