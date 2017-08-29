"use strict";

import {ReduceStore} from "flux/utils";

import Immutable from "immutable";

import AppState from "./AppState.js";
import AppDispatcher from "./AppDispatcher.js";


import PieChart from "./entity/PieChart";
import LineChart from "./entity/LineChart";

class AppStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    var state = AppState;
    return state;
  }

  reduce(state, action) {

    var imState = Immutable.fromJS(state);

    switch (action.type) {

      case 'CREATE_SLICE':

        imState = PieChart.createSlice(imState, action.slice);

        break;

      case 'CHANGE_NAME':

        imState = PieChart.changeName(imState, action.newName);

        var newName = action.newName;

        imState = imState.setIn(['app', 'pie', 'name'], newName)

        break;

      case 'CELL_CHANGED':




        imState = LineChart.cellChanged(imState, action)


        // let row = action.value.fromRow;
        // let seriesName = Object.keys(action.value.updated)[0];
        // let cellValue = action.value.updated[seriesName]
        //
        // var list = imState.getIn(['app', 'line', 'series']);
        //
        // var index = list.findIndex(function (item) {
        //   return item.get("name") === seriesName;
        // })
        //
        // imState = imState.setIn(['app', 'line', 'series', index, 'data', row, 'y'], cellValue)
        break;



    }
    return imState.toJS();
  }
}
export default new AppStore();
