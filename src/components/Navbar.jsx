import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { DollarOutlined, FundOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons/lib/icons';
import { useSelector } from 'react-redux';


const Navbar = () => {

  let location = useLocation();
  const currentUser = useSelector((state) => state?.currentUserReducer?.username);

  return (
    <div className='nav-container'>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} disabledOverflow>
        {(currentUser === '') && <Menu.Item key='/' icon={<LoginOutlined />}>
          <Link to='/'>
            Login
          </Link>
        </Menu.Item>}
        {!(currentUser === '') && <Menu.Item key='/user' icon={<UserOutlined />}>
          <Link to='/user'>
            User
          </Link>
        </Menu.Item>}
        <Menu.Item key='/currencies' icon={<FundOutlined />}>
          <Link to='/currencies'>
            Currencies
          </Link>
        </Menu.Item>
        <Menu.Item key='/convertion' icon={<DollarOutlined />}>
          <Link to='/convertion'>
            Convertion
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar