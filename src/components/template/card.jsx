import React from "react";
import './Card.css'

export default props =>

            <div className="container  col-12 col-md-4">
                <div className={`cartao ${props.card} container  cont`}>
                    
                    <h1 className="title cont ">{props.titulo}</h1>
                    
                    <div className="botao ">
                        <h2>G${props.texto}</h2>
                        <div>Viagem ida e volta</div>
                    <a className="btn btn-light" href="/viagens" role="button">Aproveite <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>


    

{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
</div>
</div> */}

