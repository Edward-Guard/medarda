import './Nav.css'
import React from 'react'

export default props =>
<aside className="menu-area">
    <nav className='menu'>
        <a href="/">
            <i className='fa fa-home'></i>Inicio
        </a>
        <a href="fa fa-users">
            <i className='fa fa-users'></i>Promoções
        </a>
        <a href="fa fa-users">
            <i className='fa fa-sign-in'></i>Login
            {/* fa fa-sign-out log-out */}
        </a>
        <a href="fa fa-users">
            <i className='fa fa-info-circle'></i>Ajuda
        </a>
        <a href="fa fa-users">
            <i className='fa fa-phone'></i>Contato
        </a>
    </nav>
</aside>