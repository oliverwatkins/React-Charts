import React from 'react';
import {CategoryDataList} from './../CategoryDataList'; //is this dumb?
import renderer from 'react-test-renderer';


import * as actions from '../../../../ActionsRedux'




test('LinkXX changes the class when hovered', () => {
  const component = renderer.create(
    <CategoryDataList>Facebook</CategoryDataList>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});