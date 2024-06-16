"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const edicao_1 = __importDefault(require("../edicao"));
class EdicaoServico extends edicao_1.default {
    constructor(servico) {
        super();
        this.servicos = servico;
        this.entrada = new entrada_1.default();
    }
    editar() {
        let editando = true;
        while (editando) {
            this.servicos.forEach(servico => {
                console.log(`ID: ${servico.id} - Nome: ${servico.nome} - Valor: ${servico.valor}`);
            });
            let servicoId = this.entrada.receberNumero("Insira o ID do servico que deseja excluir:");
            const servicoEditado = this.servicos.find(servico => servico.id == servicoId);
            if (servicoId) {
                let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `);
                servicoEditado.nome = nome;
                let valor = this.entrada.receberNumero(`Por favor informe o valor do serviços: `);
                servicoEditado.valor = valor;
                console.log(`Serviço alterado com sucesso!`);
                editando = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = EdicaoServico;
