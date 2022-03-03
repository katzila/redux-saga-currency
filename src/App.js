import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { Button, Layout, Space } from 'antd';

import { getCurrency } from './app/reducers/currency';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const dispatch = useDispatch();


  const handleCurrency = () => {
    dispatch(getCurrency())
  }

  useEffect(handleCurrency, [dispatch])

  const rate = useSelector((state) => state?.currencyReducer?.currency)

  return (
    <div className="App">
      <Navbar />
      <Layout>
        <h1>{`USD to RUB : ${rate}`}</h1>
        <Button type='primary' onClick={handleCurrency}>Get new currency rate</Button>
      </Layout>
    </div>
  );
}

export default App;
