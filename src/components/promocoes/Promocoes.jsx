import React from "react";
import Card from "../template/card";
import Main from "../template/Main";
import Demacia from '../../assets/images/Demacia.jpg'
import './Promocoes.css'


export default props =>
    <Main icon="plane" title="Promoções"
        subtitle="A mais rápida de Runeterra">
        <div className="">
        <div className='row justify-content-center'>
            
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            
        </div>
        <div className='row justify-content-center'>
            
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            <Card img={Demacia} titulo={'Demacia'} texto={'Lar dos bravos e destemidos'}/>
            
        </div>
        </div>
        
    </Main>