"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const rg_1 = __importDefault(require("../../modelo/rg"));
const telefone_1 = __importDefault(require("../../modelo/telefone"));
const adicao_1 = __importDefault(require("../adicao"));
class AdicaoCliente extends adicao_1.default {
    constructor(clientes, produtos, servicos, pets) {
        super();
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.pets = pets;
        this.entrada = new entrada_1.default();
    }
    adicionar() {
        console.log(`\n Adicionando dados ao cliente \n`);
        let adicionando = true;
        while (adicionando) {
            let cpfBusca = this.entrada.receberTexto("Insira o CPF do cliente:");
            const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == cpfBusca);
            if (clienteAlterado) {
                console.log(` --- Opções disponíveis: --- `);
                console.log(`1 - RG `);
                console.log(`2 - Telefone `);
                console.log(`3 - Produto consumido `);
                console.log(`4 - Serviço consumido `);
                console.log(`5 - Pet já cadastrado`);
                console.log(`0 - Voltar`);
                let entrada = new entrada_1.default();
                let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
                if (opcao == 1) {
                    const rgValor = this.entrada.receberTexto(`Por favor, informe o número do RG: `);
                    const rgData = this.entrada.receberTexto(`Por favor, informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                    const rg = new rg_1.default(rgValor, this.parseData(rgData));
                    clienteAlterado.addRgs(rg);
                    console.log(`\n RG adicionado com sucesso \n`);
                    adicionando = false;
                }
                else if (opcao == 2) {
                    const telefoneDDD = this.entrada.receberTexto(`Por favor, informe o ddd do telefone: `);
                    const telefoneValor = this.entrada.receberTexto(`Por favor, informe o numero do telefone: `);
                    const telefone = new telefone_1.default(telefoneDDD, telefoneValor);
                    clienteAlterado.addTelefone(telefone);
                    console.log(`\n Telefone adicionado com sucesso \n`);
                    adicionando = false;
                }
                else if (opcao == 3) {
                    this.produtos.forEach(produto => {
                        console.log(`ID: ${produto.id} - Nome: ${produto.nome} - Valor: ${produto.valor}`);
                    });
                    let IdProduto = this.entrada.receberNumero("Insira o ID do produto consumido");
                    let produtoConsumido = this.produtos.find(produtos => produtos.id == IdProduto);
                    if (produtoConsumido) {
                        produtoConsumido.addVenda();
                        clienteAlterado.addProdutosConsumidos(produtoConsumido);
                        console.log(`\n Produto adicionado com sucesso \n`);
                        adicionando = false;
                    }
                }
                else if (opcao == 4) {
                    this.servicos.forEach(servico => {
                        console.log(`ID: ${servico.id} - Nome: ${servico.nome} - Valor: ${servico.valor}`);
                    });
                    let IdServico = this.entrada.receberNumero("Insira o ID do serviço consumido");
                    let servicoConsumido = this.servicos.find(servicos => servicos.id == IdServico);
                    if (servicoConsumido) {
                        servicoConsumido.addVenda();
                        clienteAlterado.addServicosConsumidos(servicoConsumido);
                        console.log(`\n Serviço adicionado com sucesso \n`);
                        adicionando = false;
                    }
                }
                else if (opcao == 5) {
                    this.pets.forEach(pet => {
                        console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Tipo: ${pet.getTipo}`);
                    });
                    let IdPet = this.entrada.receberNumero("Insira o ID do pet que deseja vincular:");
                    let petAdicionado = this.pets.find(pets => pets.id == IdPet);
                    if (petAdicionado) {
                        clienteAlterado.addPet(petAdicionado);
                        console.log(`\n Pet adicionado com sucesso \n`);
                        adicionando = false;
                    }
                }
                else if (opcao == 0) {
                    adicionando = false;
                }
                else {
                    console.log(`Operação não entendida :(`);
                }
            }
        }
    }
    parseData(dataString) {
        const partesData = dataString.split('/');
        const ano = parseInt(partesData[2], 10);
        const mes = parseInt(partesData[1], 10);
        const dia = parseInt(partesData[0], 10);
        return new Date(ano, mes, dia);
    }
}
exports.default = AdicaoCliente;
