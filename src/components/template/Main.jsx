import React from 'react'
import './Main.css'
import Header from './Header'
import Teste from '../carouselHome'




export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className='content container-fluid'>
            <div className="p-3 mt-3">
            <Teste/>
            </div>
        </main>
    </React.Fragment>