import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='nav-container'>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['/']}>
        <Menu.Item key='/'>
          <Link to='/'>
            Currencies
          </Link>
        </Menu.Item>
        <Menu.Item key='/convertion'>
          <Link to='/convertion'>
            Convertion
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar