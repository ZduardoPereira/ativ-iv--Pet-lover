"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nome, nomeSocial, cpf) {
        Cliente.ultimoId++;
        this.id = Cliente.ultimoId;
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
        this.pets = [];
    }
    get getCpf() {
        return this.cpf;
    }
    setCpf(novoCpf) {
        this.cpf = novoCpf;
    }
    getRgs() {
        if (this.rgs.length > 0) {
            this.rgs.forEach(rg => {
                console.log(`RGs cadastrados:`);
                console.log(`ID: ${rg.id} - RG: ${rg.getValor} - Data de Emissão: ${rg.getDataEmissao}`);
            });
        }
        else {
            console.log("Este cliente não possui RGs cadastrados");
        }
    }
    addRgs(Rg) {
        this.rgs.push(Rg);
    }
    removeRgs(id) {
        this.rgs = this.rgs.filter(rg => rg.id !== id);
    }
    get getDataCadastro() {
        return this.dataCadastro.toDateString();
    }
    getTelefones() {
        if (this.telefones.length > 0) {
            console.log(`Telefones:`);
            this.telefones.forEach(tel => {
                console.log(`ID${tel.id} - Número: ${tel.getDdd} ${tel.getNumero}`);
            });
        }
        else {
            console.log("Este cliente não possui telefones cadastrados");
        }
    }
    addTelefone(telefone) {
        this.telefones.push(telefone);
    }
    removeTelefone(id) {
        this.telefones = this.telefones.filter(telefone => telefone.id !== id);
    }
    getArrayProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    getProdutosConsumidos() {
        if (this.produtosConsumidos.length > 0) {
            let valorTotal = 0;
            console.log("Produtos consumidos:");
            this.produtosConsumidos.forEach(produto => {
                console.log(`ID: ${produto.id} - Nome:${produto.nome} - Valor ${produto.valor}`);
                valorTotal += produto.valor;
            });
            console.log(`Valor total: R$ ${valorTotal}`);
        }
        else {
            console.log("Este cliente não possui produtos consumidos");
        }
    }
    addProdutosConsumidos(produto) {
        this.produtosConsumidos.push(produto);
    }
    removeProdutosConsumidos(id) {
        this.produtosConsumidos = this.produtosConsumidos.filter(produtos => produtos.id !== id);
    }
    getArrayServicosConsumidos() {
        return this.produtosConsumidos;
    }
    getServicosConsumidos() {
        if (this.servicosConsumidos.length > 0) {
            let valorTotal = 0;
            this.servicosConsumidos.forEach(servico => {
                console.log(`ID: ${servico.id} - Nome:${servico.nome} - Valor ${servico.valor}`);
                valorTotal += servico.valor;
            });
            console.log(`Valor total: R$ ${valorTotal}`);
        }
        else {
            console.log("Este cliente não possui serviços consumidos");
        }
    }
    addServicosConsumidos(servico) {
        this.servicosConsumidos.push(servico);
    }
    removeServicosConsumidos(id) {
        this.servicosConsumidos = this.servicosConsumidos.filter(servicos => servicos.id !== id);
    }
    getValorProdutosConsumidos() {
        let valor = 0;
        this.produtosConsumidos.forEach(produto => {
            valor += produto.valor;
        });
        return valor;
    }
    getValorServicosConsumidos() {
        let valor = 0;
        this.servicosConsumidos.forEach(servico => {
            valor += servico.valor;
        });
        return valor;
    }
    getPets() {
        if (this.pets.length > 0) {
            console.log("Pets vinculados:");
            this.pets.forEach(pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Tipo: ${pet.getTipo} - Raça: ${pet.getRaca} - Gênero: ${pet.getGenero}`);
            });
        }
        else {
            console.log("Este cliente não possui pets vinculados");
        }
    }
    addPet(pet) {
        this.pets.push(pet);
        pet.setDono(this);
    }
    removePet(pet) {
        this.pets.splice(this.pets.indexOf(pet), 1);
        pet.setDono(null);
    }
}
Cliente.ultimoId = 0;
exports.default = Cliente;
