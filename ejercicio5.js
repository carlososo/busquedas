/* 5.- Crear una clase llamada  Contacto con los siguientes datos
Nombre 
Apellidos
Telefono
    Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre */


class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }
}

class ListaContactos {
    constructor() {
        this.contactos = []
    }
    agregarContacto(contacto) {
        this.contactos.push(contacto);
    }
    buscarContactos(nombre) {
        for (let i = 0; i < this.contactos.length; i++) {
            console.log(this.contactos[i].nombre);
            if (this.contactos[i].nombre == nombre) {
                return this.contactos[i];
            }
        }
    }
}

var contacto1 = new Contacto('Carlos', 'Osorio', '5517983022');
var contacto2 = new Contacto('Felipe', 'Cervantes', '5517983022');
var contacto3 = new Contacto('Sandra', 'Lara', '5517983022');

// console.log(contacto1);
// console.log(contacto2);
listacontactos = new ListaContactos();

listacontactos.agregarContacto(contacto1);
listacontactos.agregarContacto(contacto2);
listacontactos.agregarContacto(contacto3);
console.log(listacontactos.buscarContactos("Felipe"));