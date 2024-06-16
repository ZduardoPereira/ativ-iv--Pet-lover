"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../../io/entrada"));
const exclusao_1 = __importDefault(require("../exclusao"));
class ExclusãoPet extends exclusao_1.default {
    constructor(pets) {
        super();
        this.pets = pets;
        this.entrada = new entrada_1.default();
    }
    excluir() {
        let excluindo = true;
        while (excluindo) {
            this.pets.forEach(pet => {
                console.log(`ID: ${pet.id} - Nome: ${pet.getNome} - Dono: ${pet.getDono.nome}`);
            });
            let petId = this.entrada.receberNumero("Insira o ID do pet que deseja excluir:");
            const petExcluido = this.pets.find(pet => pet.id == petId);
            if (petId) {
                this.pets.splice(this.pets.indexOf(petExcluido));
                petExcluido.getDono.removePet(petExcluido);
                excluindo = false;
            }
            else {
                console.log("Operação não entendida :(");
            }
        }
    }
}
exports.default = ExclusãoPet;
