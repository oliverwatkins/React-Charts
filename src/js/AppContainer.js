import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';
import AppStore from './AppStore.js';

import dispatcher from "./AppDispatcher.js";

class AppContainer extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  changeText(event) {
    var changeName = function(newName) {
      dispatcher.dispatch({
        type: "CHANGE_NAME",
        newName,
      });
    }
    changeName(event.currentTarget.value);
  }

  render() {


    var s = this.state;

    // var dates = DateRangeEntity.getData(this.props.query);
    // dates.push(emptyDate);

    return (
      <div>
        <div>{s.app.name}</div>
        <input type="text" className="form-control" onChange={this.changeText}/>
      </div>
    );
  }
}
export default Container.create(AppContainer);