import React from "react";

import {Component} from 'react';
import {Container} from 'flux/utils';
import AppStore from './../AppStore.js';

import dispatcher from "../AppDispatcher.js";

class PieChartPage extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState(prevState) {
    return AppStore.getState();
  }

  handleChartNameChange(event) {
    var changeName = function(newName) {
      dispatcher.dispatch({
        type: "CHANGE_NAME",
        newName,
      });
    }
    changeName(event.currentTarget.value);
  }

  render() {
    return (
      <div>
        <div>{this.state.app.pie.name}</div>
        <input type="text" className="form-control" onChange={this.handleChartNameChange}/>
      </div>
    );
  }
}

export default Container.create(PieChartPage);