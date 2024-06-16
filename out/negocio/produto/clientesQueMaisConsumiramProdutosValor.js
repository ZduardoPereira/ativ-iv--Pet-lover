"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientesQueMaisConsumiramProdutosValor {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listar() {
        this.clientes.sort((a, b) => {
            const consumoA = a.getValorProdutosConsumidos();
            const consumoB = b.getValorProdutosConsumidos();
            return consumoB - consumoA;
        });
        if (this.clientes.length > 5) {
            let topClientes = this.clientes.slice(0, 5);
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorProdutosConsumidos}`);
            });
        }
        else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Valor consumido: R$ ${cliente.getValorProdutosConsumidos}`);
            });
        }
    }
}
exports.default = ClientesQueMaisConsumiramProdutosValor;
