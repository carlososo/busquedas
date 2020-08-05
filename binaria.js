function busquedaBinaria(arreglo, busqueda) {

    var min = 0;
    var max = arreglo.length;

    while (min <= max) {
        var mid = Math.floor((min + max) / 2);
        var propuesta = arreglo[mid];
        if (propuesta == busqueda) {
            return mid;
        }
        if (propuesta > busqueda) {
            max = mid - 1;
        } else {
            min = mid + 1
        }

    }
    return -1
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

console.log(busquedaBinaria(myArray, 12));