import axios from 'axios';

import * as actions from '../../../modules/phones-list/actions.js';
import * as actionTypes from '../../../modules/phones-list/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';

jest.mock('axios');

describe('actions for list phones', () => {
    const page = 1;
    const dispatch = jest.fn();
    afterEach(() => dispatch.mockRestore());    

    const checkActionIsCalled = (numberCalled, expectedActions) => expect(dispatch).toHaveBeenNthCalledWith(numberCalled, expectedActions);

    const checkFetchPhonesActions = async ({ actionName, payload = undefined, isPromiseResolve, apiResponse = {}, numberCalled = 1 }) => {
      const expectedAction = {
        type: actionName, payload
      };
      axios.get.mockImplementationOnce(() => isPromiseResolve ? Promise.resolve(apiResponse) :  Promise.reject(apiResponse));
      await actions.fetchPhones(page)(dispatch);
      checkActionIsCalled(numberCalled, expectedAction);      
    };
  
    test('should create an action to fetch phones attempt ', async () => {
      checkFetchPhonesActions({actionName: actionTypes.FETCH_ATTEMPTED, isPromiseResolve: true });
    });

    test('should create an action to fetch phones success', async () => {    
      const limit = 5;
      const payload = PhonesAPI.getPhonesAndMetadataFiltered(page, limit);
      const apiResponse = {data: payload};
      checkFetchPhonesActions({actionName: actionTypes.FETCH_SUCCEEDED, isPromiseResolve: true, payload, apiResponse, numberCalled: 2 });
    });

    test('should create an action to fetch phones failes', async () => {
      const payload = "error message";
      checkFetchPhonesActions({ actionName: actionTypes.FETCH_FAILED, apiResponse: payload, numberCalled: 2, payload}); 
    });  
});
