import { takeLatest, put, call } from '@redux-saga/core/effects'

import { getConvertion } from '../../services/currencyApi';
import { setConvert } from '../reducers/currencyConvert';

export function* workerConvert(action) {
    const response = yield call(() => getConvertion(action.convert));
    console.log(response)
    const { result } = response;
    yield put(setConvert({ ...action.convert, result }))
}

export function* watcherConvert() {
    yield takeLatest('GET_CONVERT', workerConvert);
}
