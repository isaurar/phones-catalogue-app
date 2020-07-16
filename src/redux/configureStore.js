import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

const defaultReducer = state => state;

const configureStore = ({reducer = defaultReducer, initialState = {}, middlewares = []} = {}) => {
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const enhancers = composeEnhancers(
        applyMiddleware(thunkMiddleware, ...middlewares)
    );
    const store = createStore(reducer, initialState, enhancers);
    return store;
};

export default configureStore;