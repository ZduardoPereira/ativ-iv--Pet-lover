"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const cliente_1 = __importDefault(require("../../modelo/cliente"));
const cpf_1 = __importDefault(require("../../modelo/cpf"));
const rg_1 = __importDefault(require("../../modelo/rg"));
const telefone_1 = __importDefault(require("../../modelo/telefone"));
const cadastro_1 = __importDefault(require("../cadastro"));
class CadastroCliente extends cadastro_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nInício do cadastro do cliente`);
        const nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `);
        const nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `);
        const cpfValor = this.entrada.receberTexto(`Por favor, informe o número do CPF: `);
        const cpfData = this.entrada.receberTexto(`Por favor, informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        const cpf = new cpf_1.default(cpfValor, this.parseData(cpfData));
        const rgValor = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
        const rgData = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        const rg = new rg_1.default(rgValor, this.parseData(rgData));
        const telefoneDDD = this.entrada.receberTexto(`Por favor, informe o ddd do telefone: `);
        const telefoneValor = this.entrada.receberTexto(`Por favor, informe o numero do telefone: `);
        const telefone = new telefone_1.default(telefoneDDD, telefoneValor);
        const cliente = new cliente_1.default(nome, nomeSocial, cpf);
        cliente.addRgs(rg);
        cliente.addTelefone(telefone);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }
    parseData(dataString) {
        const partesData = dataString.split('/');
        const ano = parseInt(partesData[2], 10);
        const mes = parseInt(partesData[1], 10);
        const dia = parseInt(partesData[0], 10);
        return new Date(ano, mes, dia);
    }
}
exports.default = CadastroCliente;
