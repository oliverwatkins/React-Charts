"use strict";

export const MiscActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  SERVER_RESPONSE : 'SERVER_RESPONSE',
}

//pie
export const PieActions = {
  ENTER_PIE_CHART_NAME: 'ENTER_PIE_CHART_NAME',
  ADD_PIE_SLICE: 'ADD_PIE_SLICE',
  CHANGE_NAME_PIE: 'CHANGE_NAME_PIE',
  CREATE_SLICE: 'CREATE_SLICE',
  DELETE_SLICE: 'DELETE_SLICE',
  UPDATE_COLOR: 'UPDATE_COLOR'
}

//bar
export const BarActions = {
  CHANGE_NAME_BAR: 'CHANGE_NAME_BAR',
  CREATE_SERIES: 'CREATE_SERIES',
  CELL_CHANGED: 'CELL_CHANGED',
  CREATE_CATEGORY: 'CREATE_CATEGORY',
  DELETE_SERIES: 'DELETE_SERIES',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  UPDATE_COLOR: 'UPDATE_COLOR'
}


//pie
export function enterPieChartName() {
  return {type: PieActions.ENTER_PIE_CHART_NAME}
}

export function addSlice(id) {
  return {
    type: PieActions.ADD_PIE_SLICE,
    id
  }
}
export function createSlice(slice) {
  return {
    type: PieActions.CREATE_SLICE,
    slice
  }
}
export function deleteSlice(id) {
  return {
    type: PieActions.CREATE_SLICE,
    id
  }
}
export function changeNamePie(newName) {
  return {
    type: PieActions.CHANGE_NAME_PIE,
    newName
  }
}


//bar
export function createSeries(series) {
  return {
    type: BarActions.CREATE_SERIES,
    series
  }
}

export function deleteSeries(seriesName) {
  return {
    type: BarActions.DELETE_SERIES,
    seriesName
  }
}

export function updateColorBar(color, seriesName) {
  return {
    type: BarActions.UPDATE_COLOR,
    seriesName,
    color
  }
}

export function updateColorPie(color, seriesName) {
  return {
    type: PieActions.UPDATE_COLOR,
    seriesName,
    color
  }
}

export function changeLineChartName(newName) {
  return {
    type: BarActions.CHANGE_NAME_BAR,
    newName
  }
}

export function createCategory(value) {
  return {
    type: BarActions.CREATE_CATEGORY,
    value
  }
}

export function deleteCategory(categoryName, index) {
  return {
    type: BarActions.DELETE_CATEGORY,
    categoryName,
    index
  }
}


export function changeCell(value) {
  return {
    type: BarActions.CELL_CHANGED,
    value
  }
}
export function fetchBarData(value) {
  return {
    type: MiscActions.FETCH_BAR_DATA,
    value
  }
}

