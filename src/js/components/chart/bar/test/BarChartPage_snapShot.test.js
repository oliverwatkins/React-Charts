import React from 'react';
import renderer from 'react-test-renderer';
import BarChartPage from "../BarChartPage";

describe('Test basic rendering',()=> {
  xit('BarSeriesList renders', () => {
    const component = renderer.create(
      <BarChartPage/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})

