import axios from 'axios';
import {getPhoneUrl} from '../../utils/urlUtils.js';

import {
    FETCH_ATTEMPTED,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from './actionTypes';

const fetchPhonesAttempt = () => ({
    type: FETCH_ATTEMPTED
});

const fetchPhonesSuccess = payload => ({
    type: FETCH_SUCCEEDED,
    payload
});

const fetchPhonesFail = payload => ({
    type: FETCH_FAILED,
    payload
});


export const fetchPhones = page => dispatch => {
    dispatch(fetchPhonesAttempt());
    const phoneUrl = getPhoneUrl({page});

    return axios.get(phoneUrl)
        .then(response => dispatch(fetchPhonesSuccess(response.data)))
        .catch(err => dispatch(fetchPhonesFail(err)));
};