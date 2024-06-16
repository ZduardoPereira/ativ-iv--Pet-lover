"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const edicao_1 = __importDefault(require("../edicao"));
class EdicaoProduto extends edicao_1.default {
    constructor(produtos) {
        super();
        this.produtos = produtos;
        this.entrada = new entrada_1.default();
    }
    editar() {
        let editando = true;
        while (editando) {
            this.produtos.forEach(produto => {
                console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Valor: ${produto.valor}`);
            });
            let produtoId = this.entrada.receberNumero("Insira o ID do produto que deseja editar:");
            const produtoEditado = this.produtos.find(produto => produto.id == produtoId);
            if (produtoId) {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
                produtoEditado.nome = nome;
                let valor = this.entrada.receberNumero(`Por favor informe o valor do produto: `);
                produtoEditado.valor = valor;
                console.log(`Produto editado com sucesso!`);
                editando = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = EdicaoProduto;
