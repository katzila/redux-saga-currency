import { takeLatest, put, call } from '@redux-saga/core/effects'

import { getCurrencyRates } from '../../services/currencyApi';
import { setRates } from '../actions/ratesActions';
import { GET_RATES } from '../constants';

export function* workerRates(action) {
    const response = yield call(() => getCurrencyRates({ fromCurrency: action.fromCurrency, toCurrencies: action.toCurrencies.join('%2C') }));
    const { result } = response;
    yield put(setRates(result, action.fromCurrency))
}

export function* watcherRates() {
    yield takeLatest(GET_RATES, workerRates);
}