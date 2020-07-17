import configureStore from 'redux-mock-store';

const store = (initialState = {}) => {
  const mockStore = configureStore([]);
  return mockStore(initialState);
};

export default store;