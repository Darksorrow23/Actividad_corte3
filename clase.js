class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null;
  }

  agregar(dato) {
    const nuevoNodo = new Nodo(dato);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
    } else {
      let actual = this.cabeza;
      while (actual.siguiente) {
        actual = actual.siguiente;
      }
      actual.siguiente = nuevoNodo;
    }
  }
  mostrar() {
    let actual = this.cabeza;
    while (actual) {
      console.log(actual.dato);
      actual = actual.siguiente;
    }
  }

  modificar(viejo, nuevo) {
    let actual = this.cabeza;
    while (actual) {
      if (actual.dato === viejo) {
        actual.dato = nuevo;
        return;
      }
      actual = actual.siguiente;
    }
  }
  eliminar(dato) {
    if (!this.cabeza) return;
    if (this.cabeza.dato === dato) {
      this.cabeza = this.cabeza.siguiente;
      return;
    }
    let actual = this.cabeza;
    while (actual.siguiente && actual.siguiente.dato !== dato) {
      actual = actual.siguiente;
    }
    if (actual.siguiente) {
      actual.siguiente = actual.siguiente.siguiente;
    }
  }
}

const Animales_Acuaticos = new ListaEnlazada();
console.log("-----Agregados-----");
Animales_Acuaticos.agregar("Medusa");
Animales_Acuaticos.agregar("Ballena");
Animales_Acuaticos.agregar("Tiburon");
Animales_Acuaticos.agregar("Estrella de mar");
Animales_Acuaticos.agregar("Pulpo");
Animales_Acuaticos.agregar("Caballo de Mar");
Animales_Acuaticos.agregar("Langosta");
Animales_Acuaticos.agregar("Calamar");
Animales_Acuaticos.mostrar();
console.log("-----Modificados-----");
Animales_Acuaticos.modificar("Medusa", "Salmon");
Animales_Acuaticos.modificar("Tiburon", "Orca");
Animales_Acuaticos.modificar("Pulpo", "Manati");
Animales_Acuaticos.mostrar();
console.log("-----Eliminados--------");
Animales_Acuaticos.eliminar("Ballena");
Animales_Acuaticos.mostrar();
console.log("----------");
Animales_Acuaticos.agregar("Delfin");
Animales_Acuaticos.modificar("Delfin", "Tortuga");
Animales_Acuaticos.mostrar();
console.log("----------");

Animales_Acuaticos.eliminar("Tortuga");
Animales_Acuaticos.mostrar();

