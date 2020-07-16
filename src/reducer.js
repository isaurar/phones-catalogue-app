import {combineReducers} from 'redux';
import phones from './modules/phones-list/reducers';
import phoneDetails from './modules/phone-details/reducers';

export default combineReducers({
    phones,
    phoneDetails
});