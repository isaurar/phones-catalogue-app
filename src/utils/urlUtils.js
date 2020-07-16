import {PAGE, LIMIT} from '../enums/PAGINATION.js';
const BASE_URL = '/api';

export const getPhoneUrl = ({page = PAGE , limit = LIMIT, id} = {}) => 
    id ?
        `${BASE_URL}/phones/${id}` :
        `${BASE_URL}/phones?page=${page}&limit=${limit}`;