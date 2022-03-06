import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography } from 'antd';

import Navbar from './components/Navbar';
import { Currencies, Convertion } from './components';

import './App.css';

const { Title, Text } = Typography;

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <Layout className='main'>
        <div className='routes'>
          <Routes>
            <Route exact path='/' element={<Currencies />} />
            <Route exact path='/convertion' element={<Convertion />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
