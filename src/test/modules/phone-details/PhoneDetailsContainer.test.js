import React from 'react';
import TestRenderer from 'react-test-renderer';
import PhoneDetailsContainer from '../../../modules/phone-details/PhoneDetailsContainer.js';
import { MemoryRouter } from 'react-router-dom';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
    .mockReturnValue({}),
  useDispatch: jest.fn()
}));

describe('phone details container', () => {
  test('should be rendered phone details components correctly', () => {
    const rendered = TestRenderer.create(
      <MemoryRouter>
        <PhoneDetailsContainer />
      </MemoryRouter>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
}); 