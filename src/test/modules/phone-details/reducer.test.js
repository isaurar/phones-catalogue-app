import reducer from '../../../modules/phone-details/reducers.js';
import * as actionTypes from '../../../modules/phone-details/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';


describe('reducer for phone details', () => {
    const initialState =  {
        error: null,
        data: null,
        isFetching: false
    }; 
    test('should return the initial state', () => { 
        const actionForReducer =  {};      
        expect(reducer(undefined, actionForReducer)).toEqual(initialState);
    });
    
    test('should retrieve the default value when invoked with an unhanlded action.type', () => {
        const actionForReducer =  { type : '@@FAKE' }; 
        expect(reducer(undefined, actionForReducer)).toEqual(initialState);
    });

    test('should retrieve isFetching true value when invoked with the action.type "FETCH_ATTEMPTED"', () => {
        const actionForReducer =  { type : actionTypes.FETCH_ATTEMPTED }; 
        const resultToExpected = {...initialState, isFetching: true};
        expect(reducer(undefined, actionForReducer)).toEqual(resultToExpected);
    });

    test('should retrieve a detail phones when invoked with the action.type "FETCH_SUCCEEDED" and id payload', () => {
        const phoneId = '1';
        const phone = PhonesAPI.getPhone(phoneId);
        const actionForReducer =  {...initialState,  type: actionTypes.FETCH_SUCCEEDED, payload: phone  }; 
        const resultToExpected = {...initialState, data: phone };

        expect(reducer(initialState, actionForReducer)).toEqual(resultToExpected);
    });

    test('should retrieve an error when invoked with the action.type "FETCH_FAILED" and error payload', () => {
        const payload = "error message";
        const actionForReducer =  {...initialState,  type: actionTypes.FETCH_FAILED, payload  }; 
        const resultToExpected = {...initialState, error: payload };

        expect(reducer(initialState, actionForReducer)).toEqual(resultToExpected);
    });
});