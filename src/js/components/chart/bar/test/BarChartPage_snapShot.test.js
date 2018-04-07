import React from 'react';
import renderer from 'react-test-renderer';
import BarChartPage from "../ui/BarChartContainer";

describe('Test basic rendering',()=> {
  xit('BarSeriesList renders', () => {
    const component = renderer.create(
      <BarChartPage/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

