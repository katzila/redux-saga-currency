import React, { useEffect, useState } from 'react'
import { Typography, Row, Select, Space, Col, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesList } from '../app/reducers/currenciesList';
import { getRates } from '../app/reducers/currenciesRates'

const { Title } = Typography;
const { Option } = Select;

const Currencies = () => {
    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();

    const handleRates = (fromCurrency, toCurrencies) => {
        dispatch1(getRates(fromCurrency, toCurrencies))
    }

    const handleCurrenciesList = () => {
        dispatch2(getCurrenciesList())
    }

    useEffect(handleCurrenciesList, [dispatch2])

    const rates = useSelector((state) => state?.ratesReducer?.rates)
    const currencies = useSelector((state) => state?.currenciesListReducer?.currencies)

    // const [currenciesData, setCurrenciesData] = useState([]);

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
        // setCurrenciesData(
        //     filteredCurrencies.map((key, index) => (
        //         {
        //             key: index,
        //             currency: `${key}/${value}`,
        //             rate: rates[index]
        //         }
        //     ))
        // );
    }

    if (!currencies) return (<div>Loading</div>)


    return (
        <>
            <Row>
                <Col offset={7} span={10}>
                    <Space size='large'>
                        <Title level={3}>Base currency</Title>
                        <Select
                            showSearch
                            className='select-currencies'
                            placeholder='Select a Currency'
                            onChange={(value) => handleSelectCurrency(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            {Object.keys(currencies)?.map((key) => <Option value={key}>{`${currencies[key]}(${key})`}</Option>)}
                        </Select>
                    </Space>
                    {/* <Title level={1}>{`USD to RUB : ${rates[0]}`}</Title> */}
                    <Table columns={columns} dataSource={rates} />
                </Col>
            </Row>
        </>
    )
}

export default Currencies