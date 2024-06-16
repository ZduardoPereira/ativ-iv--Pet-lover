"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const edicao_1 = __importDefault(require("../edicao"));
class EdicaoPet extends edicao_1.default {
    constructor(pets) {
        super();
        this.pets = pets;
        this.entrada = new entrada_1.default();
    }
    editar() {
        let editando = true;
        while (editando) {
            this.pets.forEach(pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Dono: ${pet.getDono.nome}`);
            });
            let petId = this.entrada.receberNumero("Insira o ID do pet que deseja alterar");
            const petAlterado = this.pets.find(pet => pet.id == petId);
            if (petId) {
                let nome = this.entrada.receberTexto(`Por favor, insira o nome do pet: `);
                petAlterado.setNome(nome);
                let tipo = this.entrada.receberTexto(`Por favor, insira o tipo do pet: `);
                petAlterado.setTipo(tipo);
                let raca = this.entrada.receberTexto(`Por favor, insira a raça do pet: `);
                petAlterado.setRaca(raca);
                let genero = this.entrada.receberTexto(`Por favor, insira o genero do pet: `);
                petAlterado.setGenero(genero);
                console.log(`\n Edição concluída com sucesso :) \n`);
                editando = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = EdicaoPet;
