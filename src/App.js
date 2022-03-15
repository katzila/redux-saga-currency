import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd';

import Navbar from './components/Navbar';
import { Currencies, Convertion, Login, User } from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <Layout className='main'>
        <div className='routes'>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/user' element={<User />} />
            <Route exact path='/currencies' element={<Currencies />} />
            <Route exact path='/convertion' element={<Convertion />} />
          </Routes>
        </div>
      </Layout>
    </div>
  );
}

export default App;
