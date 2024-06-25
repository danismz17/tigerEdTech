'use client'
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';
import { IoLanguageSharp } from "react-icons/io5";
import './Nav.css'

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    label: 'Español',
    key: '1',
  },
  {
    label: 'Inglés',
    key: '2',
  },
  {
    label: 'Portugues',
    key: '3',
  },
  {
    label: 'Frances',
    key: '4',
  },
  {
    label: 'Aleman',
    key: '5',
  },
];

const IdiomaDropdownmenu = () => (
  <Dropdown
    menu={{
      items,
      onClick,
    }}
    overlayClassName="custom-dropdown" // Añade una clase personalizada
  >
    <a onClick={(e) => e.preventDefault()}>
    <Space style={{ cursor: 'pointer' }}>
        <IoLanguageSharp size={25}/>
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);

export default IdiomaDropdownmenu;
