import React from "react";
import Main from "../template/Main";
import CarouselHome from "../template/homeCarousel";
import './Home.css'



export default props =>
    <Main icon="home" title="Medarda"
        subtitle="A mais rápida de Runeterra">
        <div className="p-1 container-flex"> 
            <CarouselHome />
        </div>
           
    </Main>