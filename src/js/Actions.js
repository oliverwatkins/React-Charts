"use strict";

import AppDispatcher from "../../../../main/AppDispatcher.js";
import ActionTypes from "./ActionTypes.js";

// ENTER_PIE_CHART_NAME: 'ENTER_PIE_CHART_NAME',
//   ADD_PIE_SLICE: 'ADD_PIE_SLICE',


import AppDispatcher from "../../../../main/AppDispatcher.js";


const Actions = {
  enterPieChartName() {
    AppDispatcher.dispatch({
      type: ActionTypes.ENTER_PIE_CHART_NAME,
    });
  },
  addSlice(event, id) {
    AppDispatcher.dispatch({
      type: ActionTypes.ADD_PIE_SLICE,
      value: id
    });
  }
};

export default Actions;
