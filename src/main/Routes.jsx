import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import Promocoes from "../components/promocoes/Promocoes";
import Cadastro from "../components/viagens/CadastroViagens";
import Login from "../components/login/Login";
import Passagens from "../components/cadastro/Cadastro";


export default props =>
<Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/viagens" element={<Passagens />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/promocoes" element={<Promocoes />}/>
    <Route path="/cadastro" element={<Cadastro />}/>
   
    <Route path="*" element={<Home />}/>
</Routes>