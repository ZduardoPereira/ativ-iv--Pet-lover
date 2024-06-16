"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const listagem_1 = __importDefault(require("../listagem"));
class ListagemPet extends listagem_1.default {
    constructor(pet) {
        super();
        this.pets = pet;
    }
    listar() {
        console.log(`\nLista de todos os pets:`);
        this.pets.forEach(pet => {
            console.log(`ID: ` + pet.id + `| Nome: ` + pet.getNome);
            console.log(`Tipo: ` + pet.getTipo + `| Raça: ` + pet.getRaca);
            if (pet.getDono == null) {
                var dono = `Sem dono cadastrado`;
                console.log(`Gênero: ` + pet.getGenero + ` | Dono: ` + dono);
            }
            else {
                console.log(`Gênero: ` + pet.getGenero + ` | Dono: ` + pet.getDono.nome);
            }
            console.log(`--------------------------------------`);
        });
    }
}
exports.default = ListagemPet;
