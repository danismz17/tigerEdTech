'use client';
import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu } from 'antd';
import './Nav.css';

const items = [
  {
    key: '1',
    label: 'Administracion',
    children: [
      {
        key: '1-1',
        label: 'Administración de Empresas',
      },
      {
        key: '1-2',
        label: 'Analista en Relaciones Laborales',
      },
      {
        key: '1-3',
        label: 'Analista en RRHH',
      },
      {
        key: '1-4',
        label: 'Relaciones Internacionales',
      },
      {
        key: '1-5',
        label: 'Secretario Ejecutivo',
      },
      {
        key: '1-6',
        label: 'Administración Inmobiliaria',
      },
      {
        key: '1-7',
        label: 'Analista de datos Power BI',
      },
      {
        key: '1-8',
        label: 'Analista en Logística',
      },
      {
        key: '1-9',
        label: 'Gestión de Personas',
      },
      {
        key: '1-10',
        label: 'Gestión de Servicios de Salud',
      },
    ],
  },
  {
    key: '2',
    label: 'Economia',
    children: [
      {
        key: '2-1',
        label: '3rd menu item',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: 'Ciencias',
    children: [
      {
        key: '3-1',
        label: '3rd menu item',
      },
      {
        key: '3-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '4',
    label: 'Informatica',
    children: [
      {
        key: '4-1',
        label: '3rd menu item',
      },
      {
        key: '4-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '5',
    label: 'Arte y Diseño',
    children: [
      {
        key: '5-1',
        label: '3rd menu item',
      },
      {
        key: '5-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '6',
    label: 'Comunicacion',
    children: [
      {
        key: '6-1',
        label: '3rd menu item',
      },
      {
        key: '6-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '7',
    label: 'Idiomas',
    children: [
      {
        key: '7-1',
        label: '3rd menu item',
      },
      {
        key: '7-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '8',
    label: 'Marketing',
    children: [
      {
        key: '8-1',
        label: '3rd menu item',
      },
      {
        key: '8-2',
        label: '4th menu item',
      },
    ],
  },
];

const CursosDropdownmenu = () => (
  <Dropdown
    overlayClassName="custom-dropdown"
    dropdownRender={(menu) => (
      <div className="custom-dropdown-container">
        {menu}
      </div>
    )}
    menu={{
      items: items.map((item) => ({
        ...item,
        children: item.children?.map((child) => ({
          ...child,
          className: 'custom-submenu-item',
        })),
      })),
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
    <Space style={{ cursor: 'pointer' }}>
        Cursos
        {/* <DownOutlined /> */}
      </Space>
    </a>
  </Dropdown>
);

export default CursosDropdownmenu;
