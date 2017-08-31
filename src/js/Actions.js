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
  },

  createSeries(series) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_SERIES,
      series,
    });

  },

  createSlice(slice) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_SLICE,
      slice,
    });
  }, deleteSlice(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_SLICE,
      id,
    });
  }, changeName(newName) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_NAME_PIE,
      newName,
    });
  },
  changeLineChartName(newName) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_NAME_BAR,
      newName,
    });
  }, changeSliceName(newName) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_SLICE_NAME,
      newName,
    });
  }, changeCell(value) {
    AppDispatcher.dispatch({
      type: ActionTypes.CELL_CHANGED,
      value
    });
  },
  createCategory(value) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_CATEGORY,
      value
    });
  }
}

export default Actions;
