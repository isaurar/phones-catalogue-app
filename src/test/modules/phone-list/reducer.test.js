import reducer from '../../../modules/phones-list/reducers.js';
import * as actionTypes from '../../../modules/phones-list/actionTypes.js';
import PhonesAPI from '../../testData/testDataPhonesAPI.js';


describe('reducer for phone list', () => {
    const initialState =  {
        error: null,
        data: null,
        metadata: null,
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

    test('should retrieve a list phones and metadata when invoked with the action.type "FETCH_SUCCEEDED" and payload', () => {
        const page = 1;
        const limit = 5;
        const payload = PhonesAPI.getPhonesAndMetadataFiltered(page, limit);
        const actionForReducer =  {...initialState,  type: actionTypes.FETCH_SUCCEEDED, payload  }; 
        const resultToExpected = {...initialState, data: payload.phones, metadata: payload.metadata};

        expect(reducer(initialState, actionForReducer)).toEqual(resultToExpected);
    });

    test('should retrieve an error when invoked with the action.type "FETCH_FAILED" and error payload', () => {
        const payload = "error message";
        const actionForReducer =  {...initialState,  type: actionTypes.FETCH_FAILED, payload  }; 
        const resultToExpected = {...initialState, error: payload };

        expect(reducer(initialState, actionForReducer)).toEqual(resultToExpected);
    });
});