import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { Button } from 'antd';

import { getCurrency } from './app/reducers/currency';

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
      <h1>{`USD to RUB : ${rate}`}</h1>
      <Button type='primary' onClick={handleCurrency}>Get new currency rate</Button>
    </div>
  );
}

export default App;
