import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom";
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscar/buscaClientes";
import RemovedorCliente from "../removedores/removedorCliente";

type state = {
    clientes: Object[]
}
 
export default class Clientes extends Component<{}, state> {
    constructor(props) {
        super(props)
        this.state = { clientes: [] }
        this.excluirLocal = this.excluirLocal.bind(this)
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes()
        const clientes = buscadorClientes.buscar();      
        clientes.then(clientes => {
            this.setState({ clientes })
        })
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente()
        removedor.remover({ id: idCliente })
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault()
        let removedorLocal = new RemovedorClienteLocal()
        let clientes = removedorLocal.remover(this.state.clientes, id)
        this.setState({
            clientes: clientes
        })
        this.excluirRemoto(id)
    }

    componentDidMount(){
        this.buscarClientes()        
    }

    render() {
        console.log(this.state);

        return (
            <div className="container center-align">
                <h4>Atualizando Cliente</h4>
                {this.state.clientes.map(cliente => (
                    <div className="card blue-grey darken-1" key={cliente['id']}>
                        <div className="card-content white-text">
                            <span className="card-title">{cliente['nome']}</span>
                            <p>{cliente['nomeSocial']}</p>
                        </div>
                        <div className="card-action">
                            <Link to={`/cliente/${cliente["id"]}`} className="waves-effect waves-light btn blue">Detalhes</Link>
                            <a href="#!" onClick={(e) => this.excluirLocal(cliente['id'], e)} className="waves-effect waves-light btn red">Excluir</a>
                        </div>
                        <div className="card-content white-text">
                            <h5>Endereço</h5>
                            <p><strong>Bairro:</strong> {cliente['endereco']['bairro']}</p>
                            <p><strong>Estado:</strong> {cliente['endereco']['estado']}</p>
                            <p><strong>Rua:</strong> {cliente['endereco']['rua']}</p>
                            <p><strong>Número:</strong> {cliente['endereco']['numero']}</p>
                            <p><strong>Complemento:</strong> {cliente['endereco']['informacoesAdicionais']}</p>
                        </div>
                        
                    </div>
                ))}
                {this.state.clientes.length === 0 && (
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <p>Nenhum cliente encontrado.</p>
                        </div>
                    </div>
                )}
                
            </div>
            
        );
    }
}
