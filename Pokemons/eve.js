import{ Pokemon } from './pokemon.js';
export class Eve extends Pokemon {
    constructor() {
        super('Eve', 'Fuego', 100, 10, 5, 10);
    }

    spin(pokemon) {
        let damage = this.attack * 2 - pokemon.defense;
        if (damage < 0) {
            damage = 0;
        }
        pokemon.hp -= damage;
        console.log(`${this.name} ataca a ${pokemon.name} y le hace ${damage} de daño`);
    }
}