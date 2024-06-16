"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(nome, valor) {
        Produto.ultimoId++;
        this.id = Produto.ultimoId;
        this.nome = nome;
        this.valor = valor;
        this.vendas = 0;
    }
    addVenda() {
        this.vendas++;
    }
    removerVenda() {
        this.vendas--;
    }
}
Produto.ultimoId = 0;
exports.default = Produto;
