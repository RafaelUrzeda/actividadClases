export class Pokemon {
    constructor(nombre, tipo, vida, ataque, defensa, velocidad) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    attack(oponente) {
        let daño = Math.max(30, this.ataque - oponente.defensa); 
        oponente.vida -= daño;
        document.getElementById(oponente.nombre + "HB").innerHTML = oponente.vida;
        console.log(`${this.nombre} ataca a ${oponente.nombre} causando ${daño} de daño.`);
    }

    heal(efecto) {
        this.vida += efecto;
        document.getElementById(this.nombre + "HB").innerHTML = this.vida;
        console.log(`${this.nombre} se ha curado ${efecto} puntos de vida.`);
    }

    showHealth() {
        console.log(`${this.nombre} tiene ${this.vida} puntos de vida.`);
    }
}
