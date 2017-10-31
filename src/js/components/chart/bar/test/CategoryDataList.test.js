import React from 'react';
import {CategoryDataList} from './../CategoryDataList'; //is this dumb?
import renderer from 'react-test-renderer';


import * as actions from '../../../../ActionsRedux'




test('CategroyDataList renders', () => {
  const component = renderer.create(
    <CategoryDataList barData={{categories:[]}}>Facebook</CategoryDataList>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});