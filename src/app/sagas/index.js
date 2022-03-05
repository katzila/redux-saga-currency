import { takeLatest, put, call, all, fork } from '@redux-saga/core/effects'

import { getLatestCurrency, getCurrenciesList } from '../../services/currencyApi';
import { setCurrenciesList } from '../reducers/currenciesList';
import { setCurrency } from '../reducers/currency';

export function* workerCurrency() {
    const response = yield call(() => getLatestCurrency({ fromCurrency: 'USD', toCurrency: 'RUB' }));
    const { result } = response;
    yield put(setCurrency(result))
}

export function* watcherCurrency() {
    yield takeLatest('GET_CURRENCY', workerCurrency);
}

export function* workerCurrenciesList() {
    const response = yield call(getCurrenciesList);
    const { result } = response;
    yield put(setCurrenciesList(result))
}

export function* watcherCurrenciesList() {
    yield takeLatest('GET_CURRENCIES_LIST', workerCurrenciesList);
}

export default function* rootSaga() {
    yield all([
        fork(watcherCurrency),
        fork(watcherCurrenciesList)
    ])

}