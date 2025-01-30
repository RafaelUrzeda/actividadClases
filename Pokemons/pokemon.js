export class Pokemon {
    constructor(name, type, hp, attack, defense, speed) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }

    attack(pokemon) {
        let damage = this.attack - pokemon.defense;
        if (damage < 0) {
            damage = 0;
        }
        pokemon.hp -= damage;
        console.log(`${this.name} ataca a ${pokemon.name} y le hace ${damage} de daño`);
    }
}