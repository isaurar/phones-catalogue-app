import axios from 'axios';

import * as actions from '../../../modules/phones-list/actions.js';
import * as actionTypes from '../../../modules/phones-list/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';

jest.mock('axios');

describe('actions for list phones', () => {
    const page = 1;
    const dispatch = jest.fn();
    afterEach(() => dispatch.mockRestore());    
  
  test('should create an action to fetch phones attempt ', async () => {
    const expectedAction = {
      type: actionTypes.FETCH_ATTEMPTED, payload: undefined
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({}));
    await actions.fetchPhones(page)(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(1, expectedAction);
  });

  test('should create an action to fetch phones success', async () => {    
    const limit = 5;
    const payload = PhonesAPI.getPhonesAndMetadataFiltered(page, limit);
    const expectedAction = {
       type: actionTypes.FETCH_SUCCEEDED, payload,
    };
    axios.get.mockImplementationOnce(() => Promise.resolve({data: payload}));
    
      await actions.fetchPhones(page)(dispatch);
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });
 
  test('should create an action to fetch phones failes', async () => {
    const payload = "error message";
    const expectedAction = {
      type: actionTypes.FETCH_FAILED, payload,
    };
    axios.get.mockImplementation(() => Promise.reject(payload));
    
    await actions.fetchPhones(page)(dispatch);
    expect(dispatch).toHaveBeenNthCalledWith(2, expectedAction);
  });
});
