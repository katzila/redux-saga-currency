import { all, fork } from '@redux-saga/core/effects'

import { watcherRates } from './ratesSaga';
import { watcherCurrenciesList } from './currenciesListSaga';
import { watcherConvert } from './convertSaga';


export default function* rootSaga() {
    yield all([
        fork(watcherRates),
        fork(watcherCurrenciesList),
        fork(watcherConvert)
    ])

}