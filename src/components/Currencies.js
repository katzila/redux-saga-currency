import React, { useEffect, useState } from 'react'
import { Typography, Button, Row, Select, Space, Col, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesList } from '../app/reducers/currenciesList';
import { getCurrency } from '../app/reducers/currency'

const { Title, Text } = Typography;
const { Option } = Select;

const Currencies = () => {
    const [currency, setCurrency] = useState('RUB');
    const [currenciesData, setCurrenciesData] = useState([
        {
            key: '1',
            currency: `USD/${currency}`,
            rate: '1',
        },
        {
            key: '2',
            currency: `EUR/${currency}`,
            rate: '2',
        },
    ]);
    const dispatch1 = useDispatch();
    const dispatch2 = useDispatch();

    const handleCurrency = () => {
        dispatch1(getCurrency())
    }

    const handleCurrenciesList = () => {
        dispatch2(getCurrenciesList())
    }

    const handleSelectCurrency = (value) => {
        setCurrency(value);
        setCurrenciesData(
            
        );
    }

    useEffect(handleCurrency, [dispatch1])
    useEffect(handleCurrenciesList, [dispatch2])

    const rate = useSelector((state) => state?.currencyReducer?.currency)
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

    if (!currencies || !rate) return (<div>Loading</div>)

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
                            {Object.keys(currencies)?.map((key) => <Option value={currencies[key]}>{`${currencies[key]}(${key})`}</Option>)}
                        </Select>
                    </Space>
                    <Title level={1}>{`USD to RUB : ${rate}`}</Title>
                    <Title level={2}>{console.log(Object.keys(currencies))}</Title>

                    <Table columns={columns} dataSource={currenciesData} />
                    <Button type='primary' onClick={handleCurrency}>Get new currency rate</Button>
                </Col>
            </Row>
        </>
    )
}

export default Currencies