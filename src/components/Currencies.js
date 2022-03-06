import React, { useEffect } from 'react'
import { Typography, Row, Select, Space, Col, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesList } from '../app/reducers/currenciesList';
import { getRates } from '../app/reducers/currenciesRates'

const { Title } = Typography;
const { Option } = Select;

const Currencies = () => {
    const dispatchRates = useDispatch();
    const dispatchList = useDispatch();

    const handleRates = (fromCurrency, toCurrencies) => {
        dispatchRates(getRates(fromCurrency, toCurrencies))
    }

    const handleCurrenciesList = () => {
        dispatchList(getCurrenciesList())
    }

    useEffect(handleCurrenciesList, [dispatchList])

    const rates = useSelector((state) => state?.ratesReducer?.rates)
    const currencies = useSelector((state) => state?.currenciesListReducer?.currencies)

    const columns = [
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency'
        },
        {
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate'
        }
    ]

    const handleSelectCurrency = (value) => {
        const filteredCurrencies = Object.keys(currencies).filter((key) => (
            key !== value && key !== 'VEF'  //нерабочая валюта
        ))
        handleRates(value, filteredCurrencies);
    }

    if (!currencies) return (<div>Loading</div>)


    return (
        <Row justify='center'>
            <Col>
                <Space size='large'>
                    <Title level={3}>Base currency</Title>
                    <Select
                        showSearch
                        className='select-currencies'
                        placeholder='Select a Currency'
                        onChange={(value) => handleSelectCurrency(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        {Object.keys(currencies)?.map((key, index) => <Option key={index} value={key}>{`${currencies[key]}(${key})`}</Option>)}
                    </Select>
                </Space>
                <Table columns={columns} dataSource={rates} />
            </Col>
        </Row>
    )
}

export default Currencies