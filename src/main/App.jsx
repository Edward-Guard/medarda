import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Footer from '../components/template/Footer'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'
import Logo from '../components/template/Logo'




export default props =>
    <div className='app'>
        <Logo/>
        <Nav/>
        <Main icon="home" title="Início"
            subtitle="A mais rápida de Runeterra"/>
    
        <Footer/>
    </div>