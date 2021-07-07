import  Carro  from './Carro'
import  Pessoa  from './Pessoa'
import Concessionaria  from './Concessionaria'

/* --- CRIAR CARROS ---*/

let carroA = new Carro('dodge journey', 4)
let carroB = new Carro('veloster', 3)
let carroC = new Carro('ceratto', 4)

/* -- MONTAR A LISTA DE CARROS DA CONCESSIONARIA  --*/

let listaDeCarros:Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/*--- EXIBIR LISTA DE CARROS --*/

console.log(concessionaria.mostrarListaDeCarros())


/* -- COMPRAR CARRO--*/

let cliente = new Pessoa('João', 'veloster')

concessionaria.mostrarListaDeCarros().map((carro: Carro) =>{

    if(carro['modelo'] == cliente.dizerCarroPreferido())


    // COMPRAR CARRO CASO SEJA VERDADEIRO
    cliente.comprarCarro(carro)
})

console.log(cliente.dizerCarroQueTem())








