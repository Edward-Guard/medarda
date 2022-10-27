import React from "react";
import Card from "../template/Card";
import Main from "../template/Main";

import Fofuteia from '../../assets/images/fofuteia.webp'
import Hirana from '../../assets/images/Hirana.webp'

import Portos from '../../assets/images/PortosSafiraRed.png'
import Templo from '../../assets/images/TemploAurora.jpg'
import Universidade from '../../assets/images/Universidade-de-Piltover.png'

import './Promocoes.css'


export default props =>
    <Main icon="plane" title="Promoções"
        subtitle="A mais rápida de Runeterra">
        <div className="conteudo">
        <div className='row'>
            
            <Card card={'demacia'} titulo={'Demacia'} texto={'245'}/>
            <Card card={'noxcraya'} titulo={'Noxus'} texto={'198'}/>
            <Card card={'freljord'} titulo={'Freljord'} texto={'152'}/>
            <Card card={'shurima'} titulo={'Shurima'} texto={'175'}/>
            <Card card={'ionia'} titulo={'Ionia'} texto={'160'}/>
            <Card card={'piltover'} titulo={'Piltover'} texto={'272'}/>
            
            
        </div>
        </div>
        
    </Main>