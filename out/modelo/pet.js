"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(nome, tipo, raca, genero) {
        Pet.ultimoId++;
        this.id = Pet.ultimoId;
        this.nome = nome;
        this.tipo = tipo;
        this.raca = raca;
        this.genero = genero;
        this.dono = null;
    }
    get getNome() { return this.nome; }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    get getRaca() { return this.raca; }
    setRaca(novaRaca) {
        this.raca = novaRaca;
    }
    get getGenero() { return this.genero; }
    setGenero(novoGenero) {
        this.genero = novoGenero;
    }
    get getTipo() { return this.tipo; }
    setTipo(novoTipo) {
        this.tipo = novoTipo;
    }
    get getDono() { return this.dono; }
    setDono(novoDono) {
        this.dono = novoDono;
    }
}
Pet.ultimoId = 0;
exports.default = Pet;
