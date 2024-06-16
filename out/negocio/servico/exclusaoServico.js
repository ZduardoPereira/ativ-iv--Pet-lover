"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const exclusao_1 = __importDefault(require("../exclusao"));
class ExclusãoServico extends exclusao_1.default {
    constructor(servico) {
        super();
        this.servicos = servico;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        let excluindo = true;
        while (excluindo) {
            this.servicos.forEach(servico => {
                console.log(`ID: ${servico.id} - Nome: ${servico.nome} - Valor: ${servico.valor}`);
            });
            let servicoId = this.entrada.receberNumero("Insira o ID do servico que deseja excluir:");
            const servicoExcluido = this.servicos.find(servico => servico.id == servicoId);
            if (servicoId) {
                this.servicos.splice(this.servicos.indexOf(servicoExcluido));
                excluindo = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = ExclusãoServico;
