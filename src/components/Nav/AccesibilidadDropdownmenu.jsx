'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { PiWheelchair } from "react-icons/pi";
import './Nav.css'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: 'Asistencia Daltonismo',
    key: '1',
  },
  {
    label: 'Texto a Voz',
    key: '2',
  },
  {
    label: 'Habilitar Lenguaje de Señas',
    key: '3',
  },
];

const AccesibilidadDropdownmenu = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    overlayClassName="custom-dropdown" // Añade una clase personalizada
  >
    <a onClick={(e) => e.preventDefault()}>
    <Space style={{ cursor: 'pointer' }}>
      <PiWheelchair size={25}/>
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);

export default AccesibilidadDropdownmenu;
