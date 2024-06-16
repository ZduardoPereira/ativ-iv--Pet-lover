"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServicosMaisVendidos {
    constructor(servicos) {
        this.servicos = servicos;
    }
    listar() {
        this.servicos.sort((a, b) => {
            const consumoA = a.vendas;
            const consumoB = b.vendas;
            return consumoB - consumoA;
        });
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.nome} | Vendas: ${servico.vendas}`);
            console.log(`--------------------------------------`);
        });
    }
}
exports.default = ServicosMaisVendidos;
