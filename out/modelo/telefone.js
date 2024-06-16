"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Telefone {
    constructor(ddd, numero) {
        Telefone.ultimoId++;
        this.id = Telefone.ultimoId;
        this.ddd = ddd;
        this.numero = numero;
    }
    get getDdd() {
        return this.ddd;
    }
    get getNumero() {
        return this.numero;
    }
}
Telefone.ultimoId = 0;
exports.default = Telefone;
