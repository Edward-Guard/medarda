import React from "react";
import Main from "../template/Main";
import CarouselHome from "../template/homeCarousel";
import './Home.css'



export default props =>
    <Main icon="" title="Medarda"
        subtitle="Viaje por todo Runeterra">
        <div className="p-1 container-flex"> 
            <CarouselHome />
        </div>
           
    </Main>