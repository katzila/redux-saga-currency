import React, { useEffect } from 'react'
import { Row, Col, Typography, Select, Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { getRates } from '../app/reducers/currenciesRates';
import { getCurrenciesList } from '../app/reducers/currenciesList';
import { logoutUser, setUserCurrency } from '../app/reducers/currentUser';


const { Title } = Typography;
const { Option } = Select;

const User = () => {
    const dispatchRates = useDispatch();
    const dispatchList = useDispatch();
    const dispatchCurrentUser = useDispatch();
    const navigate = useNavigate();

    const handleRates = (fromCurrency, toCurrencies) => {
        dispatchRates(getRates(fromCurrency, toCurrencies))
    }

    const handleCurrenciesList = () => {
        dispatchList(getCurrenciesList())
    }

    useEffect(handleCurrenciesList, [dispatchList])

    const currencies = useSelector((state) => state?.currenciesListReducer?.currencies);
    const currentUser = useSelector((state) => state?.currentUserReducer?.username)
    const baseCurrency = useSelector((state) => state?.currentUserReducer?.baseCurrency)

    const handleSelectCurrency = (value) => {
        dispatchCurrentUser(setUserCurrency(value));
        const filteredCurrencies = Object.keys(currencies).filter((key) => (
            key !== value && key !== 'VEF'  //нерабочая валюта
        ))
        handleRates(value, filteredCurrencies);
    }

    const handleClickLogout = () => {
        dispatchCurrentUser(logoutUser());
        navigate('/');
    }

    if (!currencies) return (<div>Loading</div>)

    return (
        <Row justify='center'>
            <Col xs={24} sm={16} md={14} lg={12} xl={10} xxl={8}>
                <Row gutter={[16, 12]} >
                    <Col xs={24}>
                        <Title level={1}>Hello {currentUser}!</Title>
                    </Col>
                    <Col lg={9} xs={24} className='flex-col'>
                        <Title level={3}>Base currency</Title>
                    </Col>
                    <Col lg={15} xs={24} className='flex-col'>
                        <Select
                            showSearch
                            className='select-currencies'
                            placeholder='Select a Currency'
                            onChange={(value) => handleSelectCurrency(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            defaultValue={baseCurrency || []}
                        >
                            {Object.keys(currencies)?.filter((key) => key !== 'VEF')?.map((key, index) => <Option key={index} value={key}>{`${currencies[key]}(${key})`}</Option>)}
                        </Select>
                    </Col>
                    <Col span={24} className='flex-col'>
                        <Button type='primary' size='large' onClick={handleClickLogout}>Logout</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default User