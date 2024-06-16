"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const exclusao_1 = __importDefault(require("../exclusao"));
class ExclusãoProduto extends exclusao_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        let excluindo = true;
        while (excluindo) {
            this.produtos.forEach(produto => {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Valor: ${produto.valor}`);
            });
            let produtoId = this.entrada.receberNumero("Insira o ID do produto que deseja excluir:");
            const produtoExcluido = this.produtos.find(produto => produto.id == produtoId);
            if (produtoId) {
                this.produtos.splice(this.produtos.indexOf(produtoExcluido));
                excluindo = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = ExclusãoProduto;
