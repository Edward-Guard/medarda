import React from "react";
import Main from "../template/Main";
import './Login.css'



export default props =>
    <Main icon="sign-in" title="Login" subtitle="">
        <div className="form login container ">
            <div className="container  text-center">
                <div>
                <i class="fa fa-user-circle-o fa-5x"></i>
                    <h1>LOGIN</h1>
                </div>
                <div className="input-group mb-3 col"> 
                    <i className="fa fa-user input-group-text"></i> 
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3 col"> 
                    <i className="fa fa-lock input-group-text"></i> 
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button class="btn btn-primary" type="submit">Button</button>

                
            </div> 
           
        </div>
           
    </Main>