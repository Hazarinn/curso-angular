import {ConcessionariaDao} from './ConcessionariaDao'
import  Concessionaria  from './Concessionaria'
import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa'
import Carro from './Carro'
import {CarroDao} from './CarroDao'

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', [])

dao.atualizar(concessionaria)

let dao2: PessoaDao = new PessoaDao()
let pessoa: Pessoa = new Pessoa('', '');

dao2.atualizar(pessoa)

let dao3: CarroDao = new CarroDao()
let carro: Carro  = new Carro('', 0)