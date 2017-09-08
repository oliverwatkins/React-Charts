"use strict";

import {ReduceStore} from "flux/utils";

import Immutable from "immutable";

import AppState from "./AppState";
import ActionTypes from "./ActionTypes";
import AppDispatcher from "./AppDispatcher";

import PieChart from "./entity/PieChart";
import BarChartEntity from "./entity/BarChartEntity";




import Server from './Server'


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
      case ActionTypes.DELETE_CATEGORY:
        imState = BarChartEntity.deleteCategory(imState, action)
        break;
      case ActionTypes.DELETE_SERIES:
        imState = BarChartEntity.deleteSeries(imState, action)
        break;

      case ActionTypes.FETCH_BAR_DATA:
        Server.doGetRequest('/bardata');
        break;

      case ActionTypes.SERVER_RESPONSE: {
        imState = BarChartEntity.fetchFinished(imState, action)
        break;
      }
    }
    return imState.toJS();
  }
}


export default new AppStore();
