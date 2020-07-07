//const fs = require ('./fs');son archivos que nosostros hicimos y estan en algun lado del proyectok
//requireds. . .  hay tres tipos

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================='.green);
    console.log(`tabla de ${ base } `.green);
    console.log('======================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)

    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            rejetct(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${ base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}