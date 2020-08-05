'use strict'

/* 1 .- Crear una función que encuentre el número más repetido en un array
	Ej. Input - [3,6,1,8,2,3,6,3,2,5,6]
    Salida -> 6 */
var arreglo = [3, 6, 1, 8, 2, 2, 6, 3, 2, 5, 6];

function encontrarNumero(arreglo) {
    var aux = 1;
    var contador = 0;
    var item;
    for (var i = 0; i < arreglo.length; i++) {
        for (var j = i; j < arreglo.length; j++) {
            if (arreglo[i] == arreglo[j]) {
                contador++;
            }
            if (aux < contador) {
                aux = contador;
                item = arreglo[i];
            }
        }
    }
    return item;
}
console.log(encontrarNumero(arreglo));