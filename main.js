import * as pokemons from './pokemons.js';

addEventListener('DOMContentLoaded', setEvents);

let Bulbasaur = new pokemons.Bulbasur();
let Charmander = new pokemons.Charmander();
let Squirtle = new pokemons.Squirtle();
let Eevee = new pokemons.Eevee();

let attackingPokemon = null;

function setEvents() {
    document.getElementById('bulbasaurAtack').addEventListener('click', () => {
        attackingPokemon = Bulbasaur;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('bulbasaurHeal').addEventListener('click', () => {
        Bulbasaur.heal();
    });
    document.getElementById('bulbasaurShowLife').addEventListener('click', () => {
        alert(`Vida de Bulbasaur: ${Bulbasaur.vida}`);
    });

    document.getElementById('charmanderAtack').addEventListener('click', () => {
        attackingPokemon = Charmander;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('charmanderHeal').addEventListener('click', () => {
        Charmander.heal();
    });
    document.getElementById('charmanderShowLife').addEventListener('click', () => {
        alert(`Vida de Charmander: ${Charmander.vida}`);
    });

    document.getElementById('squirtleAtack').addEventListener('click', () => {
        attackingPokemon = Squirtle;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('squirtleHeal').addEventListener('click', () => {
        Squirtle.heal();
    });
    document.getElementById('squirtleShowLife').addEventListener('click', () => {
        alert(`Vida de Squirtle: ${Squirtle.vida}`);
    });

    document.getElementById('eeveeAtack').addEventListener('click', () => {
        attackingPokemon = Eevee;
        alert('Selecciona el Pokémon al que quieres atacar');
    });
    document.getElementById('eeveeHeal').addEventListener('click', () => {
        Eevee.heal();
    });
    document.getElementById('eeveeShowLife').addEventListener('click', () => {
        alert(`Vida de Eevee: ${Eevee.vida}`);
    });

    document.querySelectorAll('.pokemon').forEach(pokemonDiv => {
        pokemonDiv.addEventListener('click', () => {
            if (attackingPokemon) {
                const targetId = pokemonDiv.id;
                const targetPokemon = getPokemonById(targetId);
                if (targetPokemon && targetPokemon !== attackingPokemon) {
                    attackingPokemon.attack(targetPokemon);
                    attackingPokemon = null;
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