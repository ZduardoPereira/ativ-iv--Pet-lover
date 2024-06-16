"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProdutosMaisVendidos {
    constructor(produtos) {
        this.produtos = produtos;
    }
    listar() {
        this.produtos.sort((a, b) => {
            const consumoA = a.vendas;
            const consumoB = b.vendas;
            return consumoB - consumoA;
        });
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.nome} | Vendas: ${produto.vendas}`);
            console.log(`--------------------------------------`);
        });
    }
}
exports.default = ProdutosMaisVendidos;
