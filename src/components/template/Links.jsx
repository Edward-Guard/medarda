import React from "react";
import { Link } from "react-router-dom";

export default props =>
<Link to={props.caminho}>
    <i className={`fa fa-${props.icone}`}></i>{props.titulo} 
</Link>

