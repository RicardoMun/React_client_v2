import { Button } from 'antd';
import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/icon.png';
import './MenuTop.scss';

export const MenuTop = ( props ) => {

  const { menuCollapsed, setMenuCollapsed } = props;
  
  const userLogout = () => console.log('Cerraste sesión');

  return (

    <div className='menu-top'>
      <div className='menu-top__left'>
        <img src={Logo} className='menu-top__left__logo'></img>
        <Button type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>

      
      <div className='menu-top__right'>
        <Button type='link' onClick={userLogout}>
          <UserOutlined/>
        </Button>
      </div>
    </div>
    
    
  )
}
