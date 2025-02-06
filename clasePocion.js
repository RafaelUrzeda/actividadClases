export class Pocion {
  constructor(nombre, cantidad, efecto) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.efecto = efecto;
  }

  usar() {
    this.cantidad--;
    console.log(`${this.nombre} ha sido usado.`);
  }
}
