import './Nav.css'
import React from 'react'
import Navegacao from '../template/Links'

export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            
            
            <Navegacao caminho='login' icone='sign-in' titulo='Login'/>
            <Navegacao caminho='promocoes' icone='plane' titulo='Promoções'/>
            
            <Navegacao caminho='cadastro' icone='info-circle' titulo='Ajuda'/>
            <Navegacao caminho='viagens' icone='phone' titulo='Contato'/>
            
        </nav>
    </aside>