"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- CRIAR CARROS ---*/
var carroA = new Carro_1.default('dodge journey', 4);
var carroB = new Carro_1.default('veloster', 3);
var carroC = new Carro_1.default('ceratto', 4);
/* -- MONTAR A LISTA DE CARROS DA CONCESSIONARIA  --*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/*--- EXIBIR LISTA DE CARROS --*/
console.log(concessionaria.mostrarListaDeCarros());
/* -- COMPRAR CARRO--*/
var cliente = new Pessoa_1.default('João', 'veloster');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido())
        // COMPRAR CARRO CASO SEJA VERDADEIRO
        cliente.comprarCarro(carro);
});
console.log(cliente.dizerCarroQueTem());
