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
      const expectedAction = { type: actionTypes.FETCH_ATTEMPTED, payload: undefined };
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_ATTEMPTED, expectedAction, isPromiseResolve: true }); 
    });

    test('should create an action to fetch phone details success', async () => {    
      const payload = PhonesAPI.getPhone(phoneId);
      const expectedAction = {
        type: actionTypes.FETCH_SUCCEEDED, payload,
      };
      const apiResponse = {data: payload};
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_SUCCEEDED, apiResponse, expectedAction, isPromiseResolve: true, numberCalled: 2, payload}); 
    });

    test('should create an action to fetch phone details failes', async () => {
      const payload = "error message";
      const expectedAction = {
        type: actionTypes.FETCH_FAILED, payload,
      };
      checkFetchPhoneDetailsActions({ actionName: actionTypes.FETCH_FAILED, apiResponse: payload, expectedAction, numberCalled: 2, payload}); 
    });
});
