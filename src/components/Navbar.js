import React from 'react'
import { Menu } from 'antd'


const Navbar = () => {

  return (
    <div className='nav-container'>
      <Menu theme='dark' mode='horizontal'  defaultSelectedKeys={['/']}>
        <Menu.Item key='/'>
          Currencies
        </Menu.Item>
        <Menu.Item key='/conversion'>
          Conversion
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar