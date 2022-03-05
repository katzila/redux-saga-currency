import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { Button, Layout, Typography, Row, Col, Space } from 'antd';

import { getCurrency } from './app/reducers/currency';
import { getCurrenciesList } from './app/reducers/currenciesList';
import Navbar from './components/Navbar';
import './App.css';

const { Title, Text } = Typography;

function App() {
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
    <div className="App">
      <Navbar />
      <Layout>
        <Title level={1}>{`USD to RUB : ${rate}`}</Title>
        <Title level={2}>{currencies?.keys()}</Title>
        <Button type='primary' onClick={handleCurrency}>Get new currency rate</Button>
      </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Currency converter <br />
          With useless footer
        </Typography.Title>
      </div>
    </div>
  );
}

export default App;
