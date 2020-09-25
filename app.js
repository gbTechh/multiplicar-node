
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


console.log(argv);
let comand = argv._[0];

switch (comand) {
  case 'listar':
      listarTabla(argv.base,argv.limite);
    break;
  case 'crear':
      crearArchivo( argv.base,argv.limite )
          .then( archivo => console.log(`Archivo creado:`,colors.green( archivo )))
          .catch(err => console.log(err)); 
      console.log('Crear');
    break;
  default:
    console.log('Comando no reconocido');
    break;
}



// console.log('Limite' , argv.limite);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split("=")[1];
