import React from 'react';
import {Route} from 'react-router-dom';
import PhonesListContainer from './modules/phones-list/PhonesListContainer';
import PhoneDetailsContainer from './modules/phone-details/PhoneDetailsContainer';

function App() {
  return (
    <div className="App">
        <h1>Phones</h1>
        <Route path="/phones-list" component={PhonesListContainer}></Route>
        <Route path="/phone-details/:id" component={PhoneDetailsContainer}></Route>
    </div>
  );
}

export default App;
