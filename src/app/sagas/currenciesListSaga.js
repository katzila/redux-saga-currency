import { takeLatest, put, call } from '@redux-saga/core/effects'

import { getCurrenciesList } from '../../services/currencyApi';
import { setCurrenciesList } from '../actions/currenciesListActions';
import { GET_CURRENCIES_LIST } from '../constants';


export function* workerCurrenciesList() {
    const response = yield call(getCurrenciesList);
    const { result } = response;
    yield put(setCurrenciesList(result))
}

export function* watcherCurrenciesList() {
    yield takeLatest(GET_CURRENCIES_LIST, workerCurrenciesList);
}