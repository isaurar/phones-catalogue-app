import axios from 'axios';
import {getPhoneUrl} from '../../utils/urlUtils.js';

import {
    FETCH_ATTEMPTED,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from './actionTypes.js';

const fetchPhoneDetailsAttempt = () => ({
    type: FETCH_ATTEMPTED
});

const fetchPhoneDetailsSuccess = payload => ({
    type: FETCH_SUCCEEDED,
    payload
});

const fetchPhoneDetailsFail = payload => ({
    type: FETCH_FAILED,
    payload
});


export const fetchPhoneDetails = phoneId => dispatch => {
    dispatch(fetchPhoneDetailsAttempt());
    const phoneUrl = getPhoneUrl({phoneId});
    return axios.get(phoneUrl)
        .then(response => dispatch(fetchPhoneDetailsSuccess(response.data)))
        .catch(err => dispatch(fetchPhoneDetailsFail(err)));
};