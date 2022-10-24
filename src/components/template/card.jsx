import React from "react";

export default props =>

    <div className="card  col-sm-5 col-md-3 col-lg-2 "  >
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p className="card-text">{props.texto}</p>
            <a href="/viagens" class="btn btn-primary text-white white" tabindex="-1" role="button" aria-disabled="true">Viajar</a>
        </div>
    </div>

{/* <div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  
</div>
</div> */}

