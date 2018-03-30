import React from 'react';
import renderer from 'react-test-renderer';
import BarChartForm from "../BarChartForm";

describe('Test basic rendering',()=> {
  xit('BarChartForm renders', () => {
    const component = renderer.create(
      <BarChartForm createSeries={()=>1} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
