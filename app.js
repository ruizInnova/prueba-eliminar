//Requireds
const fs = require('fs'); //File System (grava un archivo) *nativo



let base = 28902439082438645045;
let data = '';

for (let i = 1; i <= 10; i++) {
    console.log(`${base} * ${i} = ${base *i}`);
    data += `${base} * ${i} = ${base *i}\n`;
}

//Escribir un archivo
fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log('El archivo a sido creado!');
});