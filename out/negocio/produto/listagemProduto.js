"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
const produtosMaisVendidos_1 = __importDefault(require("./produtosMaisVendidos"));
class ListagemProduto extends listagem_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default;
    }
    listar() {
        let listando = true;
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os produtos `);
            console.log(`2 - Listar os produtos mais vendidos `);
            console.log(`0 - Voltar`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            if (opcao == 1) {
                console.log(`\nLista de todos os produtos:`);
                this.produtos.forEach(produto => {
                    console.log(`ID: ${produto.id} | Nome:  ${produto.nome}`);
                    console.log(`Valor: R$ ${produto.valor} | Vendas: ${produto.vendas}`);
                    console.log(`--------------------------------------`);
                });
                console.log(`\n`);
            }
            else if (opcao == 2) {
                let listandoTodos = new produtosMaisVendidos_1.default(this.produtos);
                listandoTodos.listar();
            }
            else if (opcao == 0) {
                listando = false;
            }
            else {
                console.log(`Operação não entendida :(`);
            }
        }
    }
}
exports.default = ListagemProduto;
