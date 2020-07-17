import React from 'react';
import App from '../App.js';
import TestRenderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

test('Application should render the phone catalogue', () => {
    const rendered = TestRenderer.create(
        <Router>
            <App />
        </Router>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
});