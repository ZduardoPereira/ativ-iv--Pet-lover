import { Component } from "react";
import Barra from "./barraNavegacao";
import Clientes from "./clientes";
import Footer from "./footer";

type props = {
    textoApp: string
}

export default class Painel extends Component<props> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div>
                    <Barra textoApp={this.props.textoApp} />
                    <Clientes />
                    <Footer />
                </div>
            )
        }
}
