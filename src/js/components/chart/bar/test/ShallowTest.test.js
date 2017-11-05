
import React from 'react';
import {CategoryDataList} from './../CategoryDataList'; //dumb
import renderer from 'react-test-renderer';

import * as actions from '../../../../ActionsRedux'


describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<CategoryDataList barData={{categories: ['Apple', 'Orange', 'tomato']}}/>)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('+++ contains output', () => {
    expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
  });

});