export class Pokemon {
    constructor(nombre, tipo, vida, ataque, defensa, velocidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    atacar(oponente) {
        let daño = Math.max(5, this.ataque - oponente.defensa); 
        oponente.vida -= daño;
        console.log(`${this.nombre} ataca a ${oponente.nombre} causando ${daño} de daño.`);
    }

    curar() {
        this.vida += 20;
        console.log(`${this.nombre} se ha curado 20 puntos de vida.`);
    }

    mostrarVida() {
        console.log(`${this.nombre} tiene ${this.vida} puntos de vida.`);
    }
}
