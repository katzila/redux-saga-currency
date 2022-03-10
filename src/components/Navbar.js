import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { DollarOutlined, FundOutlined } from '@ant-design/icons/lib/icons';


const Navbar = () => {

  let location = useLocation()

  return (
    <div className='nav-container'>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} disabledOverflow='true'>
        <Menu.Item key='/' icon={<FundOutlined />}>
          <Link to='/'>
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