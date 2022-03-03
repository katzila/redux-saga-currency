import { useDispatch } from 'react-redux';
import { Button } from 'antd';

import { getLatestCurrency } from './app/actions/actionCreator';
import './App.css';

function App() {
  const dispatch = useDispatch();


  const handleCurrency = () => {
    dispatch(getLatestCurrency())
  }


  return (
    <div className="App">
      <h1>{`USD to RUB : `}</h1>
      <Button type='primary' onClick={handleCurrency}>Get currency</Button>
    </div>
  );
}

export default App;
