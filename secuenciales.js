'use strict'

function busquedaSecuencial(array, busqueda) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == busqueda) {
            return i
        }
    }
    return -1
}

const miarreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];

console.log(busquedaSecuencial(miarreglo, 8));