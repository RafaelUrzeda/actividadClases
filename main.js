import * as pokemons from './pokemons.js';

addEventListener('DOMContentLoaded', setEvents);

let Bulbasaur = new pokemons.Bulbasaur();
let Charmander = new pokemons.Charmander();
let Squirtle = new pokemons.Squirtle();
let Eevee = new pokemons.Eevee();

let specialHability = null;
let attackingPokemon = null;
let specialAttack = false;

function setEvents() {
    document.getElementById('bulbasaurAtack').addEventListener('click', () => {
        attackingPokemon = Bulbasaur;
        specialAttack = false;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('bulbasaurAtackEspecial').addEventListener('click', () => {
        attackingPokemon = Bulbasaur;
        specialAttack = true;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('bulbasaurHeal').addEventListener('click', () => {
        Bulbasaur.heal();
    });
    document.getElementById('bulbasaurShowLife').addEventListener('click', () => {
        Bulbasaur.showHealth();
    });

    document.getElementById('charmanderAtack').addEventListener('click', () => {
        attackingPokemon = Charmander;
        specialAttack = false;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('charmanderAtackEspecial').addEventListener('click', () => {
        attackingPokemon = Charmander;
        specialAttack = true;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('charmanderHeal').addEventListener('click', () => {
        Charmander.heal();
    });
    document.getElementById('charmanderShowLife').addEventListener('click', () => {
        Charmander.showHealth();
    });

    document.getElementById('squirtleAtack').addEventListener('click', () => {
        attackingPokemon = Squirtle;
        specialAttack = false;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('squirtleAtackEspecial').addEventListener('click', () => {
        attackingPokemon = Squirtle;
        specialAttack = true;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('squirtleHeal').addEventListener('click', () => {
        Squirtle.heal();
    });
    document.getElementById('squirtleShowLife').addEventListener('click', () => {
        Squirtle.showHealth();
    });

    document.getElementById('eeveeAtack').addEventListener('click', () => {
        attackingPokemon = Eevee;
        specialAttack = false;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('eeveeHeal').addEventListener('click', () => {
        Eevee.heal();
    });
    document.getElementById('eeveeShowLife').addEventListener('click', () => {
        Eevee.showHealth();
    });

    document.querySelectorAll('.pokemon').forEach(pokemonDiv => {
        pokemonDiv.addEventListener('click', () => {
            if (attackingPokemon) {
                const targetId = pokemonDiv.id;
                const targetPokemon = getPokemonById(targetId);
                if (targetPokemon && targetPokemon !== attackingPokemon) {
                    if (specialAttack) {
                        attackingPokemon.ataqueEspecial(targetPokemon);
                    } else {
                        attackingPokemon.attack(targetPokemon);
                    }
                    attackingPokemon = null;
                    specialAttack = false;
                    if (targetPokemon.vida <= 0) {
                        pokemonDiv.style.backgroundColor = 'gray';
                        pokemonDiv.querySelectorAll('button').forEach(button => button.disabled = true);
                        checkWinner();
                    }
                }
            }
        });
    });
}

function getPokemonById(id) {
    switch (id) {
        case 'bulbasaur':
            return Bulbasaur;
        case 'charmander':
            return Charmander;
        case 'squirtle':
            return Squirtle;
        case 'eevee':
            return Eevee;
        default:
            return null;
    }
}

function checkWinner() {
    const eevee =  document.getElementById('eevee');
    const Bulbasaur =  document.getElementById('bulbasaur');
    const squirtle = document.getElementById('squirtle');
    const charmander = document.getElementById('charmander');

    if (eevee.style.backgroundColor === 'gray' && Bulbasaur.style.backgroundColor === 'gray') {
        alert('Los ganadores son Squirtle y Charmander');
        location.reload();
    } else if (squirtle.style.backgroundColor === 'gray' && charmander.style.backgroundColor === 'gray') {
        alert('Los ganadores son Eevee y Bulbasaur');
        location.reload();
    }
}