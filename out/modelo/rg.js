"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RG {
    constructor(valor, dataEmissao) {
        RG.ultimoId++;
        this.id = RG.ultimoId;
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }
    get getValor() {
        return this.valor;
    }
    get getDataEmissao() {
        return this.dataEmissao.toDateString();
    }
}
RG.ultimoId = 0;
exports.default = RG;
