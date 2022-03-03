import { takeLatest, put, call } from '@redux-saga/core/effects'

import { getLatestCurrency } from '../../services/currencyApi';
import { setCurrency } from '../reducers/currency';

export function* workerSaga() {
    const response = yield call(() => getLatestCurrency({ fromCurrency: 'USD', toCurrency: 'RUB' }));
    const { result } = response;
    console.log(result)
    yield put(setCurrency(result))
}

export function* watcherSaga() {
    yield takeLatest('GET_CURRENCY', workerSaga);
}


export default function* rootSaga() {
    yield watcherSaga();
}