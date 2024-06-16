"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const pet_1 = __importDefault(require("../../modelo/pet"));
const cadastro_1 = __importDefault(require("../cadastro"));
class CadastroPet extends cadastro_1.default {
    constructor(pet, clientes) {
        super();
        this.pets = pet;
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    cadastrar() {
        console.log(`\nIníciando cadastro de pet`);
        let nome = this.entrada.receberTexto(`Por favor, insira o nome do pet: `);
        let tipo = this.entrada.receberTexto(`Por favor, insira o tipo do pet: `);
        let raca = this.entrada.receberTexto(`Por favor, insira a raça do pet: `);
        let genero = this.entrada.receberTexto(`Por favor, insira o genero do pet: `);
        let pet = new pet_1.default(nome, tipo, raca, genero);
        let vinculando = true;
        while (vinculando) {
            let donoCPF = this.entrada.receberTexto(`Por favor, insira o CPF do responsável pelo pet:`);
            const clienteAlterado = this.clientes.find(cliente => cliente.getCpf.getValor == donoCPF);
            if (clienteAlterado) {
                clienteAlterado.addPet(pet);
                pet.setDono(clienteAlterado);
                console.log(`Pet cadastrado com sucesso!`);
                vinculando = false;
            }
            else {
                console.log("CPF não encontrado, tente novamente");
            }
        }
        this.pets.push(pet);
    }
}
exports.default = CadastroPet;
