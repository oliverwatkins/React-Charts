

import { delay } from 'redux-saga'
import { put, takeEvery, all ,call} from 'redux-saga/effects'


// GitHub API
const fetcher = () => {
  return fetch(`test.json`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error;
    })
};

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000)
  alert("here!!!")
  yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNCH', incrementAsync)
}

/**
 *
 */
export function* loadChart() {
  yield takeEvery('FETCH_BAR_DATA', fetchBarData)

  yield delay(3000)


  const payload = yield call(fetcher, "");

  console.log('user',payload)




  // const data = yield call(fetch, "test.json2")




  yield put({ type: 'SERVER_RESPONSE', payload })

}



export function* fetchBarData() {

}



export function* helloSaga() {
  console.log('Hello Sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    loadChart()
  ])
}
//
//
//
// doGetRequest(endpoint, params = {}) {
//
//   //fake some server lag.
//
//   setTimeout(
//     () => {
//       request.get("test.json")
//         .set('Accept', 'application/json')
//         .timeout(1111)
//         .query(params)
//         .end(handleResponse(endpoint));
//     }, 3000
//   )
// }
// }
//
// function handleResponse(endpoint) {
//   return function (err, res) {
//     if (err && err.timeout === "TIMEOUT") {
//       alert('timeout!!!')
//     } else if (res && res.ok) {
//       receiveData(endpoint, res);
//     } else {
//       dispatch(endpoint, "FAIL");
//     }
//   };
// }
//
// function receiveData(endpoint, responseData) {
//   console.log('ServerActionCreator.receiveData', responseData.body);
//   dispatch(endpoint, "CommunicationState.RESPONSE_OK", responseData.body);
// }
//
//
// function dispatch(endpoint, state, responseData = {}) {
//
//   throw "this will not work because we have no reference to the store." +
//   " the connection to the store needs to be somehow fixed, this can be" +
//   "done i think with thunks or sagas, but Server.js cannot import client.js or" +
//   "tests will break"
//   let store = getStore();
//
//   store.dispatch(
//     {
//       type: ActionTypes.SERVER_RESPONSE,
//       endpoint: endpoint,
//       state: state,
//       payload: responseData
//     }
//   );
// }
//
//
//
//
