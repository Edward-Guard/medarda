import React,{ Component } from "react";
import axios from 'axios'
import Main from "../template/Main";
import './CadastroViagens.css'

const headerProps = {
    icon: 'plane',
    title: 'Viagens',
    subtitle: 'Cadastro de viagens'
}

const baseUrl= 'http://localhost:3001/users'
const initiaState={
    user: {name: '',email:'',cp:'',cpf:''},
    list: []
}

export default class CadastroViagens extends Component{

    state = {...initiaState}

    componentWillMount(){
        axios(baseUrl).then(resp=>{
            this.setState({list : resp.data})
        })
    }

    clear(){
        this.setState({user: initiaState.user})
    }
    // Incluir-Post(Usuario sem id) Alterar-Put(Id setado)
    save(){
        const user = this.state.user
        const method= user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({user:initiaState.user,list})
            })
    }

    getUpdatedList(user,add=true){
        const list = this.state.list.filter(u=> u.id !== user.id) 
        // filtrando a lista 
        if(add) list.unshift(user)
        // adciona o usuario na primeira posição
        return list
    }

    updateField(event){
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" 
                             name="name"
                             value={this.state.user.name}
                             onChange={e => this.updateField(e)}
                             placeholder="Digite um nome..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control" 
                             name="email"
                             value={this.state.user.email}
                             onChange={e => this.updateField(e)}
                             placeholder="Digite um E-mail..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CP</label>
                            <input type="text" className="form-control" 
                             name="cp"
                             value={this.state.user.cp}
                             onChange={e => this.updateField(e)}
                             placeholder="Digite um CP..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control" 
                             name="cpf"
                             value={this.state.user.cpf}
                             onChange={e => this.updateField(e)}
                             placeholder="Digite um CPF..."/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                <div className="col-12 d-flex justify-content-end">
                        <button className=" btn btn-primary ml-2"
                        onClick={e=> this.save(e)}>
                            Salvar
                        </button>
                    
                        <button className="btn btn-secondary ml-2"
                        onClick={e=> this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user){
        this.setState({user})

    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>CP</th>
                        <th>CPF</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map(user =>{
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.cp}</td>
                    <td>{user.cpf}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render(){
        return(
            
                <Main {...headerProps}>
            <div className="conteudo">   
                {this.renderForm()}
                {this.renderTable()}
            </div>
                </Main>
            
            
        )
    }   
}