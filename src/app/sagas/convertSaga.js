import { takeLatest, put, call } from '@redux-saga/core/effects'

import { getConvertion } from '../../services/currencyApi';
import { setConvert } from '../actions/convertActions';
import { GET_CONVERT } from '../constants';

export function* workerConvert({ convert }) {
    const response = yield call(() => getConvertion(convert));
    const { result } = response;
    yield put(setConvert({ ...convert, result }))
}

export function* watcherConvert() {
    yield takeLatest(GET_CONVERT, workerConvert);
}
