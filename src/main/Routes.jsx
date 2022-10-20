import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import Promocoes from "../components/promocoes/Promocoes";
import CadastroViagens from "../components/viagens/CadastroViagens";


export default props =>
<Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/viagens" element={<CadastroViagens />}/>
    <Route path="/promocoes" element={<Promocoes />}/>
    <Route path="*" element={<Home />}/>
</Routes>