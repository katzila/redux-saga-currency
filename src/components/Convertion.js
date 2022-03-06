import React, { useEffect, useState } from 'react'
import { Typography, Row, Col, Space, Select, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrenciesList } from '../app/reducers/currenciesList';
import { getConvert } from '../app/reducers/currencyConvert';

const { Title, Text } = Typography;
const { Option } = Select;

const Convertion = () => {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();

    const dispatchList = useDispatch();
    const dispatchConvert = useDispatch();

    const handleCurrenciesList = () => {
        dispatchList(getCurrenciesList())
    }

    useEffect(handleCurrenciesList, [dispatchList])

    const currencies = useSelector((state) => state?.currenciesListReducer?.currencies);
    const convert = useSelector((state) => state?.convertReducer?.convert);

    const handleClickConvert = () => {
        dispatchConvert(getConvert({ amount, fromCurrency, toCurrency }))
    }

    const handleChangeAmount = (e) => {
        setAmount(+e.target.value);
    }

    return (
        <Row justify='center'>
            <Col>
                <Row style={{ marginBottom: 8 }}>
                    <Space size='large'>
                        <Col>
                            <Title level={5}>Amount</Title>
                            <Input placeholder='number' onChange={handleChangeAmount}></Input>
                        </Col>
                        <Col>
                            <Title level={5}>From</Title>
                            <Select
                                showSearch
                                className='select-currencies'
                                placeholder='Select a Currency'
                                onChange={(currency) => setFromCurrency(currency)}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {Object.keys(currencies)?.map((key, index) => <Option key={index} value={key}>{`${currencies[key]}(${key})`}</Option>)}
                            </Select>
                        </Col>
                        <Col>
                            <Title level={5}>To</Title>
                            <Select
                                showSearch
                                className='select-currencies'
                                placeholder='Select a Currency'
                                onChange={(currency) => setToCurrency(currency)}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                                {Object.keys(currencies)?.map((key, index) => <Option key={index} value={key}>{`${currencies[key]}(${key})`}</Option>)}
                            </Select>
                        </Col>
                    </Space>
                </Row>
                <Row justify='end'>
                    <Button type='primary' onClick={handleClickConvert}>Convert</Button>
                </Row>
                <Text>{`${convert?.amount || ''} ${convert?.fromCurrency || ''} = ${convert?.result || ''} ${convert?.toCurrency || ''}`}</Text>
            </Col>
        </Row>
    )
}

export default Convertion