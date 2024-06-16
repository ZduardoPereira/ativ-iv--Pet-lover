import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    textoApp: string
};

class Barra extends Component<props> {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="orange darken-2"> 
                    <div className="nav-wrapper">
                        <a href="/"  style={{ marginLeft: '20px', fontSize: '2rem', fontWeight: 'bold' }}> 
                            {this.props.textoApp}
                        </a>
                        <ul id="nav-mobile" className="right">
                            <li>
                                <a href='/'> Listagem Clientes </a>
                            </li>
                            <li>
                                <a href='/cliente/cadastrar'> Cadastrar Cliente </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Barra;
