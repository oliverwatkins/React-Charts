//
// import { delay } from 'redux-saga'
// import { put, takeEvery, all ,call} from 'redux-saga/effects'
//
// import {fetchPieData} from './duck'
//
// /**
//  * Demonstration of an asynch call using a saga. The data is just a simple
//  * JSON file on the server, some time is added, to simulate lag. ABout as simple
//  * as a saga can get
//  */
// const fetcher = () => {
//   return fetch(`pie_dummy_data.json`)
//     .then(response => {
//       return response.json()
//     })
//     .catch(error => {
//       throw error;
//     })
// };
//
// export function* loadChart() {
//   yield takeEvery('FETCH_PIE_DATA', fetchPieData)
//
//   yield delay(6000)
//
//   const payload = yield call(fetcher, "");
//
//   yield put({ type: 'SERVER_RESPONSE', payload })
// }
//
// // single entry point to start all Sagas at once
// export default function* rootSaga() {
//   yield all([
//     loadChart()
//   ])
// }
