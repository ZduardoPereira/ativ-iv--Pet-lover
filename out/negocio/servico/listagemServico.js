"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
const servicosMaisVendidos_1 = __importDefault(require("./servicosMaisVendidos"));
class ListagemServico extends listagem_1.default {
    constructor(servicos) {
        super();
        this.servicos = servicos;
        this.entrada = new entrada_1.default;
    }
    listar() {
        let listando = true;
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os serviços `);
            console.log(`2 - Listar os serviços mais vendidos `);
            console.log(`0 - Voltar`);
            let opcao = this.entrada.receberNumero(`Por favor, escolha uma opção: `);
            if (opcao == 1) {
                console.log(`\nLista de todos os serviços:`);
                this.servicos.forEach(servico => {
                    console.log(`ID: ${servico.id} | Nome:  ${servico.nome}`);
                    console.log(`Valor: R$ ${servico.valor} | Vendas: ${servico.vendas}`);
                    console.log(`--------------------------------------`);
                });
                console.log(`\n`);
            }
            else if (opcao == 2) {
                let listandoTodos = new servicosMaisVendidos_1.default(this.servicos);
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
exports.default = ListagemServico;
