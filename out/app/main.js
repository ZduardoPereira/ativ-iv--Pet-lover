"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../io/entrada"));
const empresa_1 = __importDefault(require("../modelo/empresa"));
const cadastroCliente_1 = __importDefault(require("../negocio/cliente/cadastroCliente"));
const cadastroPet_1 = __importDefault(require("../negocio/pet/cadastroPet"));
const cadastroProduto_1 = __importDefault(require("../negocio/produto/cadastroProduto"));
const cadastroServico_1 = __importDefault(require("../negocio/servico/cadastroServico"));
const listagemCliente_1 = __importDefault(require("../negocio/cliente/listagemCliente"));
const listagemPet_1 = __importDefault(require("../negocio/pet/listagemPet"));
const listagemProduto_1 = __importDefault(require("../negocio/produto/listagemProduto"));
const listagemServico_1 = __importDefault(require("../negocio/servico/listagemServico"));
const edicaoCliente_1 = __importDefault(require("../negocio/cliente/edicaoCliente"));
const cliente_1 = __importDefault(require("../modelo/cliente"));
const cpf_1 = __importDefault(require("../modelo/cpf"));
const telefone_1 = __importDefault(require("../modelo/telefone"));
const rg_1 = __importDefault(require("../modelo/rg"));
const adicaoCliente_1 = __importDefault(require("../negocio/cliente/adicaoCliente"));
const exclusaoCliente_1 = __importDefault(require("../negocio/cliente/exclusaoCliente"));
const edicaoPet_1 = __importDefault(require("../negocio/pet/edicaoPet"));
const exclusaoPet_1 = __importDefault(require("../negocio/pet/exclusaoPet"));
const edicaoProduto_1 = __importDefault(require("../negocio/produto/edicaoProduto"));
const exclusaoProduto_1 = __importDefault(require("../negocio/produto/exclusaoProduto"));
const edicaoServico_1 = __importDefault(require("../negocio/servico/edicaoServico"));
const exclusaoServico_1 = __importDefault(require("../negocio/servico/exclusaoServico"));
console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new empresa_1.default();
let execucao = true;
/*cliente teste */
let rgTeste = new rg_1.default('565142033', new Date());
let telefoneTeste = new telefone_1.default('12', '991059434');
let cpfTeste = new cpf_1.default('45642791818', new Date());
let clienteTeste = new cliente_1.default('Felipe', "Felipe", cpfTeste);
clienteTeste.addRgs(rgTeste);
clienteTeste.addTelefone(telefoneTeste);
empresa.getClientes.push(clienteTeste);
while (execucao) {
    console.log(`Opções disponíveis:`);
    console.log(`1 - Cliente `);
    console.log(`2 - Pet `);
    console.log(`3 - Produto `);
    console.log(`4 - Serviço `);
    console.log(`0 - Sair`);
    let entrada = new entrada_1.default();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);
    switch (opcao) {
        case 1: // Cliente
            console.log(`\n`);
            console.log(` --- Cliente --- `);
            console.log(`1 - Cadastro `);
            console.log(`2 - Listagem`);
            console.log(`3 - Editar dados`);
            console.log(`4 - Adicionar dados`);
            console.log(`5 - Excluir dados`);
            console.log(`0 - Voltar`);
            let topicoCliente = entrada.receberNumero(`Por favor, escolha uma opção: `);
            switch (topicoCliente) {
                case 1:
                    let cadastroCliente = new cadastroCliente_1.default(empresa.getClientes);
                    cadastroCliente.cadastrar();
                    break;
                case 2:
                    let listagemCliente = new listagemCliente_1.default(empresa.getClientes);
                    listagemCliente.listar();
                    break;
                case 3:
                    let editarCliente = new edicaoCliente_1.default(empresa.getClientes);
                    editarCliente.editar();
                    break;
                case 4:
                    let adicionarNoCliente = new adicaoCliente_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos, empresa.getPets);
                    adicionarNoCliente.adicionar();
                    break;
                case 5:
                    let excluirCliente = new exclusaoCliente_1.default(empresa.getClientes, empresa.getPets, empresa.getProdutos, empresa.getServicos);
                    excluirCliente.excluir();
                    break;
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;
        case 2: // Pet
            console.log(`\n`);
            console.log(` --- Pet --- `);
            console.log(`1 - Cadastro`);
            console.log(`2 - Edição`);
            console.log(`3 - Exclusão`);
            console.log(`4 - Listagem de todos os pets`);
            console.log(`0 -  Voltar`);
            let topicoPet = entrada.receberNumero(`Por favor, escolha uma opção: `);
            switch (topicoPet) {
                case 1:
                    let cadastrarPet = new cadastroPet_1.default(empresa.getPets, empresa.getClientes);
                    cadastrarPet.cadastrar();
                    break;
                case 2:
                    let editarPet = new edicaoPet_1.default(empresa.getPets);
                    editarPet.editar();
                    break;
                case 3:
                    let excluirPet = new exclusaoPet_1.default(empresa.getPets);
                    excluirPet.excluir();
                    break;
                case 4:
                    let listagemPet = new listagemPet_1.default(empresa.getPets);
                    listagemPet.listar();
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;
        case 3: // Produto
            console.log(`\n`);
            console.log(` --- Produto --- `);
            console.log(`1 - Cadastro`);
            console.log(`2 - Edição`);
            console.log(`3 - Listagem`);
            console.log(`4 - Exclusão`);
            console.log(`0 -  Voltar`);
            let topicoProduto = entrada.receberNumero(`Por favor, escolha uma opção: `);
            switch (topicoProduto) {
                case 1:
                    let cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
                    cadastroProduto.cadastrar();
                    break;
                case 2:
                    let edicaoProduto = new edicaoProduto_1.default(empresa.getProdutos);
                    edicaoProduto.editar();
                    break;
                case 3:
                    let listagemProduto = new listagemProduto_1.default(empresa.getProdutos);
                    listagemProduto.listar();
                    break;
                case 4:
                    let exclusaoProduto = new exclusaoProduto_1.default(empresa.getProdutos);
                    exclusaoProduto.excluir();
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;
        case 4: // Serviço
            console.log(`\n`);
            console.log(` --- Serviço --- `);
            console.log(`1 - Cadastro`);
            console.log(`2 - Edição`);
            console.log(`3 - Listagem`);
            console.log(`4 - Exclusão`);
            console.log(`0 -  Voltar`);
            let topicoServico = entrada.receberNumero(`Por favor, escolha uma opção: `);
            switch (topicoServico) {
                case 1:
                    let cadastroServico = new cadastroServico_1.default(empresa.getServicos);
                    cadastroServico.cadastrar();
                    break;
                case 2:
                    let edicaoServico = new edicaoServico_1.default(empresa.getServicos);
                    edicaoServico.editar();
                    break;
                case 3:
                    let listagemServico = new listagemServico_1.default(empresa.getServicos);
                    listagemServico.listar();
                    break;
                case 4:
                    let exclusaoServico = new exclusaoServico_1.default(empresa.getServicos);
                    exclusaoServico.excluir();
                case 0:
                    break;
                default:
                    console.log(`Operação não entendida :(`);
            }
            break;
        case 0: // Sair
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
