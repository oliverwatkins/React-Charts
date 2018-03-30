import React from 'react';
import renderer from 'react-test-renderer';
import BarChartDataTable from "../BarChartDataTable";

import {initialState} from "../duck";


describe('Test basic rendering',()=> {
  xit('BarChartDataTable renders', () => {
    const component = renderer.create(
      <BarChartDataTable
        changeCell={()=>1}
        barData={initialState}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

