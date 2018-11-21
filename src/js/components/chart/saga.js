
import { delay } from 'redux-saga'
import { put, takeEvery, all ,call} from 'redux-saga/effects'


import {createFetchBarDataAction, BarActions} from './bar/actions'
import {createFetchPieDataAction, PieActions} from './pie/actions'


/**
 * Demonstration of an asynch call using a saga. The data is just a simple
 * JSON file on the server, some time is added, to simulate lag. ABout as simple
 * as a saga can get
 *
 */

const fetcherBar = () => {
  return fetch(`data/bar_dummy_data.json`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error;
    })
};

const fetcherPie = () => {
  return fetch(`data/pie_dummy_data.json`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      throw error;
    })
};

export function* loadBarChart() {
  yield takeEvery(BarActions.FETCH_BAR_DATA, createFetchBarDataAction)

  yield delay(3000)

  const payload = yield call(fetcherBar, "");

  yield put({ type: BarActions.BAR_DATA_FETCHED, payload })
}


export function* loadPieChart() {
  yield takeEvery(PieActions.FETCH_PIE_DATA, createFetchPieDataAction)

  yield delay(2000)

  const payload = yield call(fetcherPie, "");

  yield put({ type: PieActions.PIE_DATA_FETCHED, payload })
}


// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    loadBarChart(),
    loadPieChart()
  ])
}
