import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import RemovedorClienteLocal from "../removedores/removedorClienteLocal";
import BuscadorClientes from "../buscar/buscaClientes";
import RemovedorCliente from "../removedores/removedorCliente";
import Footer from "./footer";

type state = {
    clientes: Object[];
}
 
export default class Clientes extends Component<{}, state> {
    constructor(props) {
        super(props);
        this.state = { clientes: [] };
        this.excluirLocal = this.excluirLocal.bind(this);
    }

    public buscarClientes() {
        let buscadorClientes = new BuscadorClientes();
        const clientes = buscadorClientes.buscar();
        clientes.then(clientes => {
            this.setState({ clientes });
        });
    }

    public excluirRemoto(idCliente: string) {
        let removedor = new RemovedorCliente();
        removedor.remover({ id: idCliente });
    }

    public excluirLocal(id: string, e: any) {
        e.preventDefault();
        let removedorLocal = new RemovedorClienteLocal();
        let clientes = removedorLocal.remover(this.state.clientes, id);
        this.setState({
            clientes: clientes,
        });
        this.excluirRemoto(id);
    }

    componentDidMount() {
        this.buscarClientes();
    }

    render() {
        let quantidadeClientes = this.state.clientes.length;
        if (quantidadeClientes >= 0) {
            let lista = this.state.clientes.map((cliente, index) => (
                <li className="collection-item avatar" key={cliente['id']}>

                    <span className="title" style={{ fontSize: '2em', borderBottom: 'none'}}>{cliente['nome']}</span>
                    <p style={{ fontSize: '1.3em', fontWeight: 'bold', textDecoration: 'underline', marginBottom: '0.5%' }}>Conhecido(a) {cliente['nomeSocial']}</p>
                    <button className="waves-effect waves-light btn" onClick={() => window.location.href=`/cliente/${cliente["id"]}`}>
                        Detalhes
                    </button>
                    <button className="waves-effect waves-light btn red" onClick={(e) => this.excluirLocal(cliente['id'], e)} style={{ marginLeft: '10px' }}>
                        Excluir
                    </button>
                </li>
            ));
            return (
                <div>
                    <ul className="collection with-header">
                        <li className="collection-header"><h4>Listagem dos Clientes</h4></li>
                        {lista}
                    </ul>
                </div>
            );
        } else {            
            return (
                <footer>
                    <Footer />
                </footer>
                
            );
        }
    }
}
