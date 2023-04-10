import { Button } from 'antd';
import React, { useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/icon.png';
import './MenuTop.scss';

export const MenuTop = ( props ) => {

  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className='menu-top'>
      <div className='menu-top__left'>
        <Button 
          type='link'
          onClick={() => setMenuCollapsed(!menuCollapsed)}
          aria-label={menuCollapsed ? 'Abrir menu' : 'Cerrar menu'}
        >
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={Logo} className='menu-top__left__logo'></img>
      </div>

    </div>
    
    
  )
}
