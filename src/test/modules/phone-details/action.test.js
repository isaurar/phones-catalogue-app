import axios from 'axios';

import * as actions from '../../../modules/phone-details/actions.js';
import * as actionTypes from '../../../modules/phone-details/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';

jest.mock('axios');

describe('actions for phone details', () => {
    const phoneId = '1';
    const dispatch = jest.fn();
    afterEach(() => dispatch.mockRestore());
  
  test('should create an action to fetch phone details attempt ', async () => {
    const expectedAction = {
      type: actionTypes.FETCH_ATTEMPTED, payload: undefined
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({}));
    await actions.fetchPhoneDetails(phoneId)(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  test('should create an action to fetch phone details success', async () => {    
    const payload = PhonesAPI.getPhone(phoneId);
    const expectedAction = {
       type: actionTypes.FETCH_SUCCEEDED, payload,
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({data: payload}));
    
      await actions.fetchPhoneDetails(phoneId)(dispatch);
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });
 
  test('should create an action to fetch phone details failes', async () => {
    const payload = "error message";
    const expectedAction = {
      type: actionTypes.FETCH_FAILED, payload,
    };
    axios.get.mockImplementation(() => Promise.reject(payload));
    
    await actions.fetchPhoneDetails(phoneId)(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });
});
