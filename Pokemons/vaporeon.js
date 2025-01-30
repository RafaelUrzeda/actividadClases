import{ Pokemon } from './pokemon.js';
class Vaporeon extends Pokemon {
    constructor() {
        super('Vaporeon', 'Agua', 100, 10, 5, 10);
    }

    spin(pokemon) {
        let damage = this.attack * 3 - pokemon.defense;
        if (damage < 0) {
            damage = 0;
        }
        pokemon.hp -= damage;
        console.log(`${this.name} ataca a ${pokemon.name} y le hace ${damage} de daño`);
    }
}