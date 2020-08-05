/* 4.- Crear una función que busque el numero más pequeño en el arreglo
	Ej. [1,4,5,-1,-7,2,3,9]
    Salida -->  -7 */

function smallSearch(array) {

    array.sort(function(a, b) {
        return b - a;
    })
    return array[array.length - 1];
}

const array = [1, 4, 5, -1, -7, 2, 3, 9];

console.log(smallSearch(array));