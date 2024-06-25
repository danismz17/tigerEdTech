import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <div className="nav-container">
        <div className="nav-logo-container">
            <img src="\tigeredtechlogo.svg" alt="" />
        </div>
        <div className="nav-items-container">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Cursos</a></li>
                <li><a href="#">Planes y Membresias</a></li>
                <li><a href="#">Review y Opiniones</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className="nav-accesibility-container">
            <ul>
                <li><a href="#">A</a></li>
                <li><a href="#">A</a></li>
                <li><a href="#">Aaaa</a></li>
                <li><a href="#">A</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav