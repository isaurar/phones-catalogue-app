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

const fetchPhonesFailed = payload => ({
    type: FETCH_FAILED,
    payload
});

export const fetchPhones = () => dispatch => {
    dispatch(fetchPhonesAttempt());
    //...añadir código axios
    // manejar success
    // manejar fail
};