"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientesQueMaisConsumiramServicosQuant {
    constructor(clientes) {
        this.clientes = clientes;
    }
    listar() {
        this.clientes.sort((a, b) => {
            const consumoA = a.getArrayServicosConsumidos.length;
            const consumoB = b.getArrayServicosConsumidos.length;
            return consumoB - consumoA;
        });
        if (this.clientes.length > 10) {
            let topClientes = this.clientes.slice(0, 10);
            topClientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Quantidade: ${cliente.getArrayServicosConsumidos.length} Serviços consumidos`);
            });
        }
        else {
            this.clientes.forEach(cliente => {
                console.log(`Nome: ${cliente.nome} | Quantidade: ${cliente.getArrayServicosConsumidos.length} Serviços consumidos`);
            });
        }
    }
}
exports.default = ClientesQueMaisConsumiramServicosQuant;
