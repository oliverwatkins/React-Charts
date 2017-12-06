
import { delay } from 'redux-saga'
import { put, takeEvery, all ,call} from 'redux-saga/effects'

import {fetchBarData} from './duck'

const fetcher = () => {
  return fetch(`test.json`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error;
    })
};

export function* loadChart() {
  yield takeEvery('FETCH_BAR_DATA', fetchBarData)

  yield delay(3000)

  const payload = yield call(fetcher, "");

  yield put({ type: 'SERVER_RESPONSE', payload })
}



// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    loadChart()
  ])
}
