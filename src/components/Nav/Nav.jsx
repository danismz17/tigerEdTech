import React from 'react'
import './Nav.css'
import AyudaDropdownmenu from './AyudaDropdownmenu'
import CursosDropdownmenu from './CursosDropdownmenu'
import AccesibilidadDropdownmenu from './AccesibilidadDropdownmenu'
import IdiomaDropdownmenu from './IdiomaDropdownmenu'



const Nav = () => {
    return (
        <>
            <div className="nav-container">
                <div className="nav-logo-container">
                    <span>
                        <img src="\tigeredtechlogo.svg" alt="" />
                    </span>
                </div>
                <div className="nav-items-container">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><CursosDropdownmenu /></li>
                        <li><a href="#">Planes y Membresias</a></li>
                        <li><a href="#">Review y Opiniones</a></li>
                        <li><AyudaDropdownmenu /></li>
                    </ul>
                </div>
                <div className="nav-accesibility-container">
                    <ul>
                        <li><AccesibilidadDropdownmenu/></li>
                        <li><IdiomaDropdownmenu/></li>
                        <li>Iniciar Sesion</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav