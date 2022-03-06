import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import { ratesReducer } from './reducers/currenciesRates'
import { currenciesListReducer } from "./reducers/currenciesList";
import { convertReducer } from "./reducers/currencyConvert";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;

const reducer = combineReducers({
    ratesReducer,
    currenciesListReducer,
    convertReducer
})

const store = createStore(
    reducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;