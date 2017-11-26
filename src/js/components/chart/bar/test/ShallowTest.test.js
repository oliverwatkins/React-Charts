import React from 'react';
import {CategoryDataList} from './../CategoryDataList'; //dumb version

import {shallow} from 'enzyme';


describe('Shallow Render REACT COMPONENTS',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<CategoryDataList categories={['Apple', 'Orange', 'tomato']}/>)
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1)
  });
});