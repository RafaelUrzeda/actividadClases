import { Pokemon } from "./clasePokemon.js";
import * as tipo from "./tiposPokemon.js";

export class Bulbasaur extends tipo.PokemonPlanta {
    constructor() {
        super('Bulbasaur', 100, 10, 5, 10);
    }
    ataqueEspecial(pokemon){
        console.log(`${this.nombre} ataca a ${pokemon.nombre} con latigo cepa`);
        super.specialAtack(pokemon);
    }
}

export class Charmander extends tipo.PokemonFuego {
    constructor() {
        super('Charmander', 100, 10, 5, 10);
    }
    ataqueEspecial(pokemon){
        console.log(`${this.nombre} ataca a ${pokemon.nombre} con lanzallamas`);
        super.specialAtack(pokemon);
    }
}

export class Squirtle extends tipo.PokemonAgua {
    constructor() {
        super('Squirtle', 100, 10, 5, 10);
    }
    ataqueEspecial(pokemon){
        console.log(`${this.nombre} ataca a ${pokemon.nombre} con pistola de agua`);
        super.specialAtack(pokemon);
    }
}

export class Eevee extends Pokemon {
    constructor() {
        super('Eevee', "Normal" , 100, 10, 5, 10);
    }
}