import React, { useEffect } from 'react'
import { Typography, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesList } from '../app/reducers/currenciesList';
import { getCurrency } from '../app/reducers/currency'

const { Title, Text } = Typography;

const Currencies = () => {
    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();

    const handleCurrency = () => {
        dispatch1(getCurrency())
    }

    const handleCurrenciesList = () => {
        dispatch2(getCurrenciesList())
    }

    useEffect(handleCurrency, [dispatch1])
    useEffect(handleCurrenciesList, [dispatch2])

    const rate = useSelector((state) => state?.currencyReducer?.currency)
    const currencies = useSelector((state) => state?.currenciesListReducer?.currencies)

    return (
        <>
            <Title level={1}>{`USD to RUB : ${rate}`}</Title>
            <Title level={2}>{`${currencies}`}</Title>
            <Button type='primary' onClick={handleCurrency}>Get new currency rate</Button>
        </>
    )
}

export default Currencies