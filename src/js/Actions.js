"use strict";

import AppDispatcher from "./AppDispatcher.js";
import ActionTypes from "./ActionTypes.js";

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
