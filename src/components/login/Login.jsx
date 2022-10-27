import React from "react";
import Navegacao from "../template/Links";
import Main from "../template/Main";
import './Login.css'

const headerProps = {
    icon: 'sign-in',
    title: 'Login',
    subtitle: ''
}

export default props =>
    <Main {...headerProps}>
        <div className="form tela container text-center">
            <div className="container">
                <div>
                <i class="fa fa-user-circle fa-5x"></i>
                    <h1>LOGIN</h1>
                </div>
                <div className="input-group mb-3 col"> 
                    <i className="fa fa-user input-group-text"></i> 
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3 col"> 
                    <i className="fa fa-lock input-group-text"></i> 
                    <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                </div>
                
                <div className="row gray">
                    <div className="gray col-6">
                        <Navegacao  caminho='/cadastro' titulo='Esqueceu a senha?'/>
                    </div>
                    <div className="gray col-6 ">
                        <Navegacao caminho='/cadastro' titulo='Criar uma conta'/>
                    </div>
                    
                </div>
                <a href="/viagens" class="btn btn-dark text-white white" tabindex="-1" role="button" aria-disabled="true">Login</a>
                
              
                
                
                
                

                
            </div> 
           
        </div>
           
    </Main>