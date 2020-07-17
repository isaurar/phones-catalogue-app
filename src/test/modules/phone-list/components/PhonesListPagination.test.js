import React from 'react';
import TestRenderer from 'react-test-renderer';
import PhonesListPagination from '../../../../modules/phones-list/components/PhonesListPagination.js';
import {MemoryRouter} from 'react-router-dom';

const props = {
    page: 1,
    limit: 5,
    total: 15
};

describe('phone list pagination component', () => {
  test('should render the phones list correctly', () => {
    const rendered = TestRenderer.create(
        <MemoryRouter>
            <PhonesListPagination {...props} />
        </MemoryRouter>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
}); 