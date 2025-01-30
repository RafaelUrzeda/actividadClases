import { Pokemon } from "./clasePokemon.js";

export class PokemonFuego extends Pokemon {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        super(nombre, "Fuego", vida, ataque, defensa, velocidad);
    }

    specialAtack(oponente) {
        super.atack(oponente);
        if (oponente.tipo === "Planta") {
            let dañoExtra = Math.max(5, this.ataque - oponente.defensa);
            oponente.vida -= dañoExtra;
            console.log(`${this.nombre} inflige ${dañoExtra} de daño extra a ${oponente.nombre} por ser de tipo Planta.`);
        }
    }
}

// Clase Pokémon de Planta
export class PokemonPlanta extends Pokemon {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        super(nombre, "Planta", vida, ataque, defensa, velocidad);
    }

    specialAtack(oponente) {
        super.atack(oponente);
        if (oponente.tipo === "Agua") {
            let dañoExtra = Math.max(5, this.ataque - oponente.defensa);
            oponente.vida -= dañoExtra;
            console.log(`${this.nombre} inflige ${dañoExtra} de daño extra a ${oponente.nombre} por ser de tipo Agua.`);
        }
    }
}

// Clase Pokémon de Agua
export class PokemonAgua extends Pokemon {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        super(nombre, "Agua", vida, ataque, defensa, velocidad);
    }

    specialAtack(oponente) {
        super.atack(oponente);
        if (oponente.tipo === "Fuego") {
            let dañoExtra = Math.max(5, this.ataque - oponente.defensa);
            oponente.vida -= dañoExtra;
            console.log(`${this.nombre} inflige ${dañoExtra} de daño extra a ${oponente.nombre} por ser de tipo Fuego.`);
        }
    }
}