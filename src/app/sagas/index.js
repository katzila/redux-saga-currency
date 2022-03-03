import { takeEvery, put } from '@redux-saga/core/effects'

import { GET_LATEST_CURRENCY } from '../constants';
import { getLatestCurrency } from '../../services/currencyApi';
import { setLatestCurrency } from '../actions/actionCreator';

export function* workerSaga() {
    const { result } = yield getLatestCurrency({ fromCurrency: 'USD', toCurrency: 'RUB' });
    yield put(setLatestCurrency(result));
}

export function* watchClickSaga() {
    yield takeEvery(GET_LATEST_CURRENCY, workerSaga);
}


export default function* rootSaga() {
    yield watchClickSaga();
}