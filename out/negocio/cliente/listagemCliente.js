"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const listagem_1 = __importDefault(require("../listagem"));
const clientesQueMaisConsumiramProdutosQuant_1 = __importDefault(require("../produto/clientesQueMaisConsumiramProdutosQuant"));
const clientesQueMaisConsumiramProdutosValor_1 = __importDefault(require("../produto/clientesQueMaisConsumiramProdutosValor"));
const clientesQueMaisConsumiramServicosQuant_1 = __importDefault(require("../servico/clientesQueMaisConsumiramServicosQuant"));
const clientesQueMaisConsumiramServicosValor_1 = __importDefault(require("../servico/clientesQueMaisConsumiramServicosValor"));
class ListagemCliente extends listagem_1.default {
    constructor(clientes) {
        super();
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    listar() {
        let listando = true;
        while (listando) {
            console.log(` --- Opções disponíveis: --- `);
            console.log(`1 - Listar todos os clientes `);
            console.log(`2 - Listar consumo de um cliente `);
            console.log(`3 - Top 10 cliente que mais consumiram produtos (Quantidade) `);
            console.log(`4 - Top 5 clientes que mais consumiram produtos (Valor) `);
            console.log(`3 - Top 10 cliente que mais consumiram serviços (Quantidade) `);
            console.log(`4 - Top 5 clientes que mais consumiram serviços (Valor) `);
            console.log(`0 - Voltar`);
            let entrada = new entrada_1.default();
            let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
            if (opcao == 1) {
                console.log(`\nLista de todos os clientes:`);
                this.clientes.forEach(cliente => {
                    console.log(`ID: ` + cliente.id + ` - Nome: ` + cliente.nome + ` - Nome social: ` + cliente.nomeSocial);
                    console.log(`CPF: ` + cliente.getCpf.getValor + ` - Data de Emissão: ` + cliente.getCpf.getDataEmissao);
                    cliente.getTelefones();
                    cliente.getRgs();
                    cliente.getPets();
                    console.log(`--------------------------------------`);
                });
                listando = false;
            }
            else if (opcao == 2) {
                let cpf = this.entrada.receberTexto("Insira o CPF do cliente:");
                console.log(`\n`);
                let clienteEscolhido = this.clientes.find(cliente => cliente.getCpf.getValor == cpf);
                if (clienteEscolhido) {
                    console.log(`ID: ` + clienteEscolhido.id + ` - Nome: ` + clienteEscolhido.nome + ` - Nome social: ` + clienteEscolhido.nomeSocial);
                    clienteEscolhido.getProdutosConsumidos();
                    clienteEscolhido.getServicosConsumidos();
                    console.log(`--------------------------------------`);
                    listando = false;
                }
                else {
                    console.log(`CPF não encontrado!`);
                }
            }
            else if (opcao == 3) {
                let top10 = new clientesQueMaisConsumiramProdutosQuant_1.default(this.clientes);
                top10.listar();
                listando = false;
            }
            else if (opcao == 4) {
                let top5 = new clientesQueMaisConsumiramProdutosValor_1.default(this.clientes);
                top5.listar();
                listando = false;
            }
            else if (opcao == 5) {
                let top10 = new clientesQueMaisConsumiramServicosQuant_1.default(this.clientes);
                top10.listar();
                listando = false;
            }
            else if (opcao == 6) {
                let top5 = new clientesQueMaisConsumiramServicosValor_1.default(this.clientes);
                top5.listar();
                listando = false;
            }
            else {
                console.log(`Operação não entendida :(`);
            }
        }
    }
}
exports.default = ListagemCliente;
