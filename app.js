//const fs = require ('express'); No es una libreria de node es un paquete que se instala

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}



//let base = 8;
//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//console.log(argv.base);
//console.log(argv2);

//et parametro = argv[2];
//let base = parametro.split('=')[1]