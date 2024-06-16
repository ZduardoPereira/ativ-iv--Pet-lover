import React, { useEffect, useState } from "react";
import Barra from "./barraNavegacao";
import { Link } from "react-router-dom";
import './style.css';
import { Button } from 'react-materialize';
import Footer from "./footer";


const DetalhesCliente = () => {
  const [cliente, setCliente] = useState(null);
  const url = window.location.href.split("/");

  useEffect(() => {
    const buscarDetalhesCliente = async () => {
      try {
        const response = await fetch(`http://localhost:32831/cliente/${url[4]}`);
        const data = await response.json();
        setCliente(data);
        console.log("Data:", data);
      } catch (error) {
        console.error(error.message);
      }
    };

    buscarDetalhesCliente();
  }, [url[4]]);

  return (
    <div>
      {cliente && (
        <div>
          <Barra textoApp={`PetLovers`} />
          <section className="container">
            <ul className="collection">
              <li className="collection-item">
                <h4>Nome:</h4>
                <p>{cliente.nome}</p>
              </li>

              <li className="collection-item">
                <h4>Nome Social:</h4>
                <p>{cliente.nomeSocial}</p>
              </li>

              <li className="collection-item">
                <h4>Telefone:</h4>
                <p>{"(" + cliente.telefones[0].ddd + ")" + " " + cliente.telefones[0].numero}</p>
              </li>

              <li className="collection-item">
                <h4>Endereço:</h4>
                <p>{`${cliente.endereco.rua} n°${cliente.endereco.numero}, ${cliente.endereco.bairro}, ${cliente.endereco.cidade} - ${cliente.endereco.estado}, ${cliente.endereco.codigoPostal}`}</p>
              </li>

              <li className="collection-item">
                <h4>Informações Adicionais:</h4>
                <p>{cliente.endereco.informacoesAdicionais}</p>
              </li>
            </ul>
          </section>

          <div className="botao">
            <Link to={`/cliente/editar/${cliente["id"]}`}>
              <button className="btn waves-effect waves-light green accent-3">Editar</button>
            </Link>
          </div>
          <br></br>
          <br></br>
          <Footer />
         
        </div>
      )}
    </div>
    
  );
};

export default DetalhesCliente;
