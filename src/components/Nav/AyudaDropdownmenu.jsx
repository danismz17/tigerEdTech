'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import './Nav.css'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: 'Preguntas Frecuentes',
    key: '1',
  },
  {
    label: 'Contacto',
    key: '2',
  },
];

const AyudaDropdownmenu = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    overlayClassName="custom-dropdown" // Añade una clase personalizada
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space style={{ cursor: 'pointer' }}>
        Ayuda
        {/* <DownOutlined size={5}/> */}
      </Space>
    </a>
  </Dropdown>
);

export default AyudaDropdownmenu;
