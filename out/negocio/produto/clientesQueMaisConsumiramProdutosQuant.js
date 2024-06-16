"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientesQueMaisConsumiramProdutosQuant {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listar() {
        this.clientes.sort((a, b) => {
            const consumoA = a.getArrayProdutosConsumidos.length;
            const consumoB = b.getArrayProdutosConsumidos.length;
            return consumoB - consumoA;
        });
        if (this.clientes.length > 10) {
            let topClientes = this.clientes.slice(0, 10);
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Quantidade: ${cliente.getArrayProdutosConsumidos.length} Produtos consumidos`);
            });
        }
        else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Quantidade: ${cliente.getArrayProdutosConsumidos.length} Produtos consumidos`);
            });
        }
    }
}
exports.default = ClientesQueMaisConsumiramProdutosQuant;
