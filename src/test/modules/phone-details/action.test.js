import axios from 'axios';

import * as actions from '../../../modules/phone-details/actions.js';
import * as actionTypes from '../../../modules/phone-details/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';

jest.mock('axios');

describe('actions for phone details', () => {
    const phoneId = '1';
    const dispatch = jest.fn();
    afterEach(() => dispatch.mockRestore());

    const checkActionIsCalled = (numberCalled, expectedActions) => expect(dispatch).toHaveBeenNthCalledWith(numberCalled, expectedActions);

    const checkFetchPhoneDetailsActions = async ({ actionName, payload = undefined, isPromiseResolve, apiResponse = {}, numberCalled = 1 }) => {
      const expectedAction = {
        type: actionName, payload
      };
      axios.get.mockImplementationOnce(() => isPromiseResolve ? Promise.resolve(apiResponse) :  Promise.reject(apiResponse));
      await actions.fetchPhoneDetails(phoneId)(dispatch);
      checkActionIsCalled(numberCalled, expectedAction);      
    };
    
    test('should create an action to fetch phone details attempt', async () => {    
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_ATTEMPTED, isPromiseResolve: true }); 
    });

    test('should create an action to fetch phone details success', async () => {    
      const payload = PhonesAPI.getPhone(phoneId);
      const apiResponse = {data: payload};
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_SUCCEEDED, apiResponse, isPromiseResolve: true, numberCalled: 2, payload}); 
    });

    test('should create an action to fetch phone details failes', async () => {
      const payload = "error message";
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_FAILED, apiResponse: payload, numberCalled: 2, payload}); 
    });
});
