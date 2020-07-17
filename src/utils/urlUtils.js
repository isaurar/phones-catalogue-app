import {PAGE, LIMIT} from '../enums/PAGINATION.js';
const BASE_URL = '/api';

export const getPhoneUrl = ({page = PAGE , limit = LIMIT, phoneId} = {}) => 
phoneId ?
        `${BASE_URL}/phones/${phoneId}` :
        `${BASE_URL}/phones?page=${page}&limit=${limit}`;