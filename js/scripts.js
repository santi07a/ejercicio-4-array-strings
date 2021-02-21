let palabras = ['café', 'croissant', 'huevo', 'jugo', 'leche', 'avena'];
let palabrasParesModificadas = modificaPares(palabras, elemento => elemento.split("").join("-"));
console.log(palabrasParesModificadas);

function modificaPares(cosas, funcionAnonima) {
  let palabrasParesModificadas = [];
  for (const i in cosas) {
    if (i % 2 !== 0) {
      palabrasParesModificadas.push(funcionAnonima(cosas[i]));
    } else {
      palabrasParesModificadas.push(cosas[i]);
    };
  }
  return palabrasParesModificadas;
};
