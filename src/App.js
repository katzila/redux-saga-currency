import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography } from 'antd';

import Navbar from './components/Navbar';
import { Currencies, Convertion } from './components';

import './App.css';

const { Title, Text } = Typography;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <Routes>
          <Route exact path='/' element={<Currencies />} />
          <Route exact path='/convertion' element={<Convertion />} />
        </Routes>
      </Layout>
      <div className='footer'>
        <Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Currency converter <br />
          With useless footer
        </Title>
      </div>
    </div>
  );
}

export default App;
