"use strict";

import AppDispatcher from "./AppDispatcher.js";
import ActionTypes from "./ActionTypes.js";

const Actions = {

  //pie
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

  //bar
  createSeries(series) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_SERIES,
      series,
    });
  },
  deleteSeries(seriesName) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_SERIES,
      seriesName,
    });
  },
  updateColor(color, seriesName){



    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_COLOR,
      seriesName,
      color
    });
  },



  changeLineChartName(newName) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_NAME_BAR,
      newName,
    });
  },
  createCategory(value) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_CATEGORY,
      value
    });
  },
  deleteCategory(categoryName, index) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_CATEGORY,
      categoryName,
      index
    });
  },




  changeSliceName(newName) {
    AppDispatcher.dispatch({
      type: ActionTypes.CHANGE_SLICE_NAME,
      newName,
    });
  }, changeCell(value) {
    AppDispatcher.dispatch({
      type: ActionTypes.CELL_CHANGED,
      value
    });
  }

}




export default Actions;
