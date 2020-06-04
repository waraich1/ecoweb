import { call, takeLatest, put, all } from 'redux-saga/effects';
import {
  ASYNC_DATA_REQUEST,
  dataSuccess,
  dataFailed,
  dataRequest
} from './action';
import axios from 'axios';

function* fetchData() {
  try {
    yield put(dataRequest());
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/comments'
    );
    yield put(dataSuccess(response.data));
  } catch (error) {
    yield put(dataFailed);
  }
}

export function* root() {
  yield all([takeLatest(ASYNC_DATA_REQUEST, fetchData)]);
}
