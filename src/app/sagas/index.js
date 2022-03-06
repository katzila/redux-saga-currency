import { takeLatest, put, call, all, fork } from '@redux-saga/core/effects'

import { getCurrencyRates, getCurrenciesList, getConvertion } from '../../services/currencyApi';
import { setCurrenciesList } from '../reducers/currenciesList';
import { setRates } from '../reducers/currenciesRates';
import { setConvert } from '../reducers/currencyConvert';

export function* workerRates(action) {
    const response = yield call(() => getCurrencyRates({ fromCurrency: action.fromCurrency, toCurrencies: action.toCurrencies.join('%2C') }));
    console.log(response)
    const { result } = response;
    yield put(setRates(result, action.fromCurrency))
}

export function* watcherRates() {
    yield takeLatest('GET_RATES', workerRates);
}


export function* workerCurrenciesList() {
    const response = yield call(getCurrenciesList);
    const { result } = response;
    yield put(setCurrenciesList(result))
}

export function* watcherCurrenciesList() {
    yield takeLatest('GET_CURRENCIES_LIST', workerCurrenciesList);
}


export function* workerConvert(action) {
    const response = yield call(() => getConvertion(action.convert));
    console.log(response)
    const { result } = response;
    yield put(setConvert({ ...action.convert, result }))
}

export function* watcherConvert() {
    yield takeLatest('GET_CONVERT', workerConvert);
}


export default function* rootSaga() {
    yield all([
        fork(watcherRates),
        fork(watcherCurrenciesList),
        fork(watcherConvert)
    ])

}