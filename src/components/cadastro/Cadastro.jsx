import React,{ Component } from "react";
import axios from 'axios'
import Main from "../template/Main";


const headerProps = {
    icon: 'plane',
    title: 'Viagens',
    subtitle: 'Cadastro de viagens'
}

const baseUrl= 'http://localhost:3001/viagens'
const initiaState={
    viagens: {id: '',cp:'',origem:'',destino:'',passageiros:''},
    list: []
}

export default class passagens extends Component{

    state = {...initiaState}

    componentWillMount(){
        axios(baseUrl).then(resp=>{
            this.setState({list : resp.data})
        })
    }

    clear(){
        this.setState({viagens: initiaState.viagens})
    }
    // Incluir-Post(Usuario sem id) Alterar-Put(Id setado)
    save(){
        const viagens = this.state.viagens
        const method= viagens.id ? 'put' : 'post'
        const url = viagens.id ? `${baseUrl}/${viagens.id}` : baseUrl
        axios[method](url,viagens)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({viagens:initiaState.viagens,list})
                // Reseta todos os campos para o initial state após um save correto
            })
    }

    getUpdatedList(viagens,add=true){
        const list = this.state.list.filter(u=> u.id !== viagens.id) 
        // filtrando a lista 
        if(add) list.unshift(viagens)
        // adciona o usuario na primeira posição
        return list
    }

    updateField(event){
        // Modificar o campo ao ocorrer um evento 'e'
        const viagens = { ...this.state.viagens }
        // Começa inserindo um estado inicial vazio indicado pelo inititalState
        viagens[event.target.name] = event.target.value
        // Pega o evento do campo pelo name e insere o valor neste campo
        this.setState({viagens})
    }

    renderForm(){
        return(
            <div className="form">
                <div className="row">
                <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>CP</label>
                            <input type="text" className="form-control" 
                             name="cp"
                             value={this.state.viagens.cp}
                             onChange={e => this.updateField(e)}
                             placeholder="Código do Passageiro..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Origem</label>
                            <input type="text" className="form-control" 
                             name="origem"
                             value={this.state.viagens.origem}
                             onChange={e => this.updateField(e)}
                             placeholder="Informe sua Origem..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Destino</label>
                            <input type="text" className="form-control" 
                             name="destino"
                             value={this.state.viagens.destino}
                             onChange={e => this.updateField(e)}
                             placeholder="Para onde vai viajar?..."/>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Passageiros</label>
                            <input type="text" className="form-control" 
                             name="passageiros"
                             value={this.state.viagens.passageiros}
                             onChange={e => this.updateField(e)}
                             placeholder="Quantos irão viajar?..."/>
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

    load(viagens){
        this.setState({viagens})

    }

    remove(viagens) {
        axios.delete(`${baseUrl}/${viagens.id}`).then(resp => {
            const list = this.getUpdatedList(viagens, false)
            this.setState({ list })
        })
    }

    

    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>CP</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Passageiros</th>
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
        return this.state.list.map(viagens =>{
            return(
                <tr key={viagens.id}>
                    <td>{viagens.cp}</td>
                    <td>{viagens.origem}</td>
                    <td>{viagens.destino}</td>
                    <td>{viagens.passageiros}</td>        
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => this.load(viagens)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            onClick={() => this.remove(viagens)}>
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