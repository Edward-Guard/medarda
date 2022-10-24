import React from "react";
import Card from "../template/card";
import Main from "../template/Main";
import Demacia from '../../assets/images/Demacia.jpg'
import Areias from '../../assets/images/Areias.jpg'
import Fofuteia from '../../assets/images/fofuteia.webp'
import Hirana from '../../assets/images/Hirana.webp'
import Noxcraya from '../../assets/images/NoxkrayaArenared.png'
import Portos from '../../assets/images/PortosSafiraRed.png'
import Templo from '../../assets/images/TemploAurora.jpg'
import Universidade from '../../assets/images/Universidade-de-Piltover.png'

import './Promocoes.css'


export default props =>
    <Main icon="plane" title="Promoções"
        subtitle="A mais rápida de Runeterra">
        <div className="">
        <div className='row justify-content-center'>
            
            <Card img={Areias} titulo={'Surf nas areias'} texto={'Um esporte radical e instável das terras shurimanes'}/>
            <Card img={Fofuteia} titulo={'Montanha dos poros'} texto={'O ponto de reunião dos seres mais fofos de runeterra. Os poros'}/>
            <Card img={Hirana} titulo={'Monastério Hirana'} texto={'O Monastério Hirana, o melhor lugar para achar paz e a si mesmo.'}/>
            <Card img={Noxcraya} titulo={'Arena Noxcraya'} texto={'Lar dos bravos e destemidos'}/>
            
        </div>
        <div className='row justify-content-center'>
            
            <Card img={Portos} titulo={'Portos Safira'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Templo} titulo={'Templo da luz'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Universidade} titulo={'Univesidade de Piltover'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            
        </div>
        </div>
        
    </Main>