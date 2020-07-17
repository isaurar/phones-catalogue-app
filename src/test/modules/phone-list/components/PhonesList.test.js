import React from 'react';
import TestRenderer from 'react-test-renderer';
import PhonesList from '../../../../modules/phones-list/components/PhonesList.js';
import PhonesAPI from '../../../testData/testDataPhonesAPI.js';

const testData = PhonesAPI.getPhonesAndMetadataFiltered(1, 5).phones;

describe('phone list component', () => {
  test('should render the phones list correctly', () => {
    const rendered = TestRenderer.create(<PhonesList data={testData} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
}); 