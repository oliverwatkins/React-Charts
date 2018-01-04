import Immutable from "immutable";

import XYChartEntity from './XYChartEntity'

export function reducer(state = initialState, action) {

  let imState = Immutable.fromJS(state);

  if (!action)
    return imState.toJS();

  switch (action.type) {

    //bar
    case LineActions.CHANGE_NAME_XY:
      imState = XYChartEntity.changeName(imState, action.newName);
      break;
    // case BarActions.CELL_CHANGED:
    //   imState = BarChartEntity.cellChanged(imState, action)
    //   break;
    case LineActions.CREATE_SERIES_XY:
      // imState = XYChartEntity.createSeries(imState, action)
      break;
    // case BarActions.CREATE_CATEGORY:
    //   imState = BarChartEntity.createCategory(imState, action)
    //   break;
    // case BarActions.DELETE_CATEGORY:
    //   imState = BarChartEntity.deleteCategory(imState, action)
    //   break;
    // case BarActions.DELETE_SERIES:
    //   imState = BarChartEntity.deleteSeries(imState, action)
    //   break;
    // case BarActions.UPDATE_COLOR:
    //   imState = BarChartEntity.updateColor(imState, action)
    //   break;


    default : {
      // throw 'action not found ' + action.type
    }
  }
  return imState.toJS();
}


//bar
export const LineActions = {
  CHANGE_NAME_XY: 'CHANGE_NAME_XY',
  CREATE_SERIES_XY: 'CREATE_SERIES_XY',
}




const initialState =
  {
    name: "XY Chart",
    isFetching: true,
    categories: [
      "Apple",
      "Orange",
      "Banana",
      "Peach"
    ],
    series: [
      {
        name: "Mexico",
        color: "red",
        data: [
          {y: 0},
          {y: 0},
          {y: 0},
          {y: 0}
        ]
      },
      {
        name: "Germany",
        color: "orange",
        data: [
          {y: 0},
          {y: 0},
          {y: 0},
          {y: 0}
        ]
      },
      {
        name: "Holland",
        color: "blue",
        data: [
          {x: 1, y: 0},
          {x: 2, y: 0},
          {x: 3, y: 0},
          {x: 4, y: 0}
        ]
      }
    ]
  }
