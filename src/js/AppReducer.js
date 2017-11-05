// import Immutable from "immutable";
// import Server from './Server';
// import Link from './../test/Link'
//
// import {PieActions, BarActions, MiscActions} from './ActionsRedux.js'
// import BarChartEntity from './entity/BarChartEntity'
// import PieChart from './entity/PieChart'
//
//
// export default function AppReducer(state = initialState, action) {
//
//   let imState = Immutable.fromJS(state);
//
//   // console.info('Link2 ' + Link2);
//
//   console.info('--> ' + PieActions);
//   console.info('--> ' + BarActions);
//   console.info('--> ' + MiscActions);
//
//   switch (action.type) {
//
//     //pie
//     case PieActions.CREATE_SLICE:
//       imState = PieChart.createSlice(imState, action.slice);
//       break;
//     case PieActions.CHANGE_NAME_PIE:
//       imState = PieChart.changeName(imState, action.newName);
//       break;
//     case PieActions.UPDATE_COLOR:
//       //TODO
//       // imState = PieChart.(imState, action.newName);
//       break;
//
//
//     //bar
//     case BarActions.CHANGE_NAME_BAR:
//       imState = BarChartEntity.changeName(imState, action.newName);
//       break;
//     case BarActions.CELL_CHANGED:
//       imState = BarChartEntity.cellChanged(imState, action)
//       break;
//     case BarActions.CREATE_SERIES:
//       imState = BarChartEntity.createSeries(imState, action)
//       break;
//     case BarActions.CREATE_CATEGORY:
//       imState = BarChartEntity.createCategory(imState, action)
//       break;
//     case BarActions.DELETE_CATEGORY:
//       imState = BarChartEntity.deleteCategory(imState, action)
//       break;
//     case BarActions.DELETE_SERIES:
//       imState = BarChartEntity.deleteSeries(imState, action)
//       break;
//     case BarActions.UPDATE_COLOR:
//       imState = BarChartEntity.updateColor(imState, action)
//       break;
//
//
//     case MiscActions.FETCH_BAR_DATA:
//       Server.doGetRequest('/bardata');
//       break;
//
//     case MiscActions.SERVER_RESPONSE: {
//       imState = BarChartEntity.fetchFinished(imState, action)
//       break;
//     }
//     default : {
//       console.info('action not found ' + action.type)
//     }
//   }
//   return imState.toJS();
// }
//
//
// const initialState =
//   {
//     app: {
//       pie: {
//         name: "Pie Chart",
//         data: [
//           {name: 'Group A', value: 12, color: '#123123'},
//           {name: 'Group B', value: 300, color: '#634334'},
//           {name: 'Group C', value: 300, color: '#92fa56'},
//           {name: 'Group D', value: 200, color: '#aa4234'},
//           {name: 'Group E', value: 278, color: '#ccccc5'},
//           {name: 'Group F', value: 289, color: '#b456bb'}
//         ]
//       },
//       xy: {
//         name: "XY Chart",
//         series: [
//           {
//             name: "Mexico",
//             color: "#82ca9d",
//             data: [
//               {x: 12, y: 0},
//               {x: 152, y: 0},
//               {x: 112, y: 0},
//               {x: 122, y: 0},
//             ]
//           },
//           {
//             name: "Germany",
//             color: "#2239ca",
//             data: [
//               {x: 122, y: 0},
//               {x: 33, y: 0},
//               {x: 44, y: 0},
//               {x: 122, y: 0},
//             ]
//           }
//         ]
//       },
//       bar: {
//         name: "Bar Chart",
//         isFetching: true,
//         categories: [
//           "Apple",
//           "Orange",
//           "Banana",
//           "Peach"
//         ],
//         series: [
//           {
//             name: "Mexico",
//             color: "red",
//             data: [
//               {y: 0},
//               {y: 0},
//               {y: 0},
//               {y: 0}
//             ]
//           },
//           {
//             name: "Germany",
//             color: "orange",
//             data: [
//               {y: 0},
//               {y: 0},
//               {y: 0},
//               {y: 0}
//             ]
//           },
//           {
//             name: "Holland",
//             color: "blue",
//             data: [
//               {x: 1, y: 0},
//               {x: 2, y: 0},
//               {x: 3, y: 0},
//               {x: 4, y: 0}
//             ]
//           }
//         ]
//       }
//     }
//   }
