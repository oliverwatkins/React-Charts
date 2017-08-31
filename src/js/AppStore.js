"use strict";

import {ReduceStore} from "flux/utils";

import Immutable from "immutable";

import AppState from "./AppState.js";
import ActionTypes from "./ActionTypes.js";
import AppDispatcher from "./AppDispatcher.js";

import PieChart from "./entity/PieChart";
import BarChartEntity from "./entity/BarChartEntity";

class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    var state = AppState;
    return state;
  }

  reduce(state, action) {

    let imState = Immutable.fromJS(state);

    switch (action.type) {

        //pie
      case ActionTypes.CREATE_SLICE:
        imState = PieChart.createSlice(imState, action.slice);
        break;
      case ActionTypes.CHANGE_NAME_PIE:
        imState = PieChart.changeName(imState, action.newName);
        break;

        //bar
      case ActionTypes.CHANGE_NAME_BAR:
        imState = BarChartEntity.changeName(imState, action.newName);
        break;
      case ActionTypes.CELL_CHANGED:
        imState = BarChartEntity.cellChanged(imState, action)
        break;
      case ActionTypes.CREATE_SERIES:
        imState = BarChartEntity.createSeries(imState, action)
        break;
      case ActionTypes.CREATE_CATEGORY:
        imState = BarChartEntity.createCategory(imState, action)
        break;




    }
    return imState.toJS();
  }
}
export default new AppStore();
