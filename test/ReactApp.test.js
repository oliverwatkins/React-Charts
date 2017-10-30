import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { expect } from 'chai';

const util = require('util');

import { Provider } from 'react-redux'
import { createMockStore } from 'redux-test-utils';


import BarSeriesListTest from './BarSeriesListTest'
// import BarSeriesListTest from './List'

const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  return shallow(component, { context });
};

it('should render ', () => {
  const testState = {
    app: {
      bar:
        ['a' , 'b', 'c']
    }
  };
  const store = createMockStore(testState)

  const shallowComponent = shallowWithStore(<BarSeriesListTest items={[]} />, store);

  // JSON.stringify()

  // util.inspect(component)

  console.log(shallowComponent.debug());


  expect(shallowComponent.contains(<div className="unique" />)).to.equal(true);


  // let Foo = <li/>
  // // console.log('' + JSON.stringify(component))
  // expect(component.find(Foo)).to.have.length(3);
  //
  // expect(component).to.be.a('object');


  // const tree = toJson(shallow(<Provider><BarSeriesListTest items={[]}  /></Provider>));
});

