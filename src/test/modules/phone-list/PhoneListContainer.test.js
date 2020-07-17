import React from 'react';
import TestRenderer from 'react-test-renderer';
import PhonesListContainer from '../../../modules/phones-list/PhonesListContainer.js';
import { MemoryRouter } from 'react-router-dom';

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn()
    .mockReturnValue({}),
  useDispatch: jest.fn()
}));

describe('phone list container', () => {
  test('should render the phones list correctly', () => {
    const rendered = TestRenderer.create(
      <MemoryRouter>
        <PhonesListContainer />
      </MemoryRouter>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
}); 