"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cpf_1 = __importDefault(require("../../modelo/cpf"));
const edicao_1 = __importDefault(require("../edicao"));
class EdicaoCliente extends edicao_1.default {
    constructor(clientes) {
        super();
        this.entrada = new entrada_1.default();
        this.clientes = clientes;
    }
    editar() {
        let editando = true;
        while (editando) {
            let cpfBusca = this.entrada.receberTexto("Insira o CPF do cliente:");
            const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == cpfBusca);
            if (clienteAlterado) {
                let nome = this.entrada.receberTexto(`Por favor insira o nome do cliente: `);
                clienteAlterado.nome = nome;
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
                clienteAlterado.nomeSocial = nomeSocial;
                let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
                let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
                let partesData = data.split('/');
                let ano = new Number(partesData[2].valueOf()).valueOf();
                let mes = new Number(partesData[1].valueOf()).valueOf();
                let dia = new Number(partesData[0].valueOf()).valueOf();
                let dataEmissao = new Date(ano, mes, dia);
                let cpf = new cpf_1.default(valor, dataEmissao);
                clienteAlterado.setCpf(cpf);
                console.log(`\n Edição concluída :) \n`);
                editando = false;
            }
        }
    }
}
exports.default = EdicaoCliente;
