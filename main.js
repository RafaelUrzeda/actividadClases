import * as pokemons from "./pokemons.js";
import { Pocion } from "./clasePocion.js";

addEventListener("DOMContentLoaded", setEvents);

let Bulbasaur = new pokemons.Bulbasaur();
let Charmander = new pokemons.Charmander();
let Squirtle = new pokemons.Squirtle();
let Eevee = new pokemons.Eevee();
let PocionBulbasaur = new Pocion("Poción", 5, 20);
let PocionCharmander = new Pocion("Poción", 5, 20);
let PocionSquirtle = new Pocion("Poción", 5, 20);
let PocionEevee = new Pocion("Poción", 5, 20);

let SuperPocionBulbasaur = new Pocion("SuperPoción", 2, 40);
let SuperPocionCharmander = new Pocion("SuperPoción", 2, 40);
let SuperPocionSquirtle = new Pocion("SuperPoción", 2, 40);
let SuperPocionEevee = new Pocion("SuperPoción", 2, 40);

let specialHability = null;
let attackingPokemon = null;
let specialAttack = false;

function setEvents() {
  document.getElementById("bulbasaurAtack").addEventListener("click", () => {
    attackingPokemon = Bulbasaur;
    specialAttack = false;
    alert("Selecciona el Pokémon al que quieres atacar");
  });
  document
    .getElementById("bulbasaurAtackEspecial")
    .addEventListener("click", () => {
      attackingPokemon = Bulbasaur;
      specialAttack = true;
      alert("Selecciona el Pokémon al que quieres atacar");
    });
  document.getElementById("bulbasaurHeal").addEventListener("click", () => {
    let TipoPocion = document.getElementById("pocionBulbasaur").value;
    if (TipoPocion == "Pocion") {
      if (PocionBulbasaur.cantidad > 0) {
        PocionBulbasaur.usar();
        Bulbasaur.heal(PocionBulbasaur.efecto);
      } else {
        alert(`No tienes ${PocionBulbasaur.nombre}`);
      }
    } else if (TipoPocion == "SuperPocion") {
      if (SuperPocionBulbasaur.cantidad > 0) {
        SuperPocionBulbasaur.usar();
        Bulbasaur.heal(SuperPocionBulbasaur.efecto);
      } else {
        alert(`No tienes ${SuperPocionBulbasaur.nombre}`);
      }
    }
  });

  document.getElementById("charmanderAtack").addEventListener("click", () => {
    attackingPokemon = Charmander;
    specialAttack = false;
    alert("Selecciona el Pokémon al que quieres atacar");
  });
  document
    .getElementById("charmanderAtackEspecial")
    .addEventListener("click", () => {
      attackingPokemon = Charmander;
      specialAttack = true;
      alert("Selecciona el Pokémon al que quieres atacar");
    });
  document.getElementById("charmanderHeal").addEventListener("click", () => {
    let TipoPocion = document.getElementById("pocionCharmander").value;
    if (TipoPocion == "Pocion") {
      if (PocionCharmander.cantidad > 0) {
        PocionCharmander.usar();
        Charmander.heal(PocionCharmander.efecto);
      } else {
        alert(`No tienes ${PocionCharmander.nombre}`);
      }
    } else if (TipoPocion == "SuperPocion") {
      if (SuperPocionCharmander.cantidad > 0) {
        SuperPocionCharmander.usar();
        Charmander.heal(SuperPocionCharmander.efecto);
      } else {
        alert(`No tienes ${SuperPocionCharmander.nombre}`);
      }
    }
  });

  document.getElementById("squirtleAtack").addEventListener("click", () => {
    attackingPokemon = Squirtle;
    specialAttack = false;
    alert("Selecciona el Pokémon al que quieres atacar");
  });
  document
    .getElementById("squirtleAtackEspecial")
    .addEventListener("click", () => {
      attackingPokemon = Squirtle;
      specialAttack = true;
      alert("Selecciona el Pokémon al que quieres atacar");
    });
  document.getElementById("squirtleHeal").addEventListener("click", () => {
    let TipoPocion = document.getElementById("pocionSquirtle").value;
    if (TipoPocion == "Pocion") {
      if (PocionSquirtle.cantidad > 0) {
        PocionSquirtle.usar();
        Squirtle.heal(PocionSquirtle.efecto);
      } else {
        alert(`No tienes ${PocionSquirtle.nombre}`);
      }
    } else if (TipoPocion == "SuperPocion") {
      if (SuperPocionSquirtle.cantidad > 0) {
        SuperPocionSquirtle.usar();
        Squirtle.heal(SuperPocionSquirtle.efecto);
      } else {
        alert(`No tienes ${SuperPocionSquirtle.nombre}`);
      }
    }
  });

  document.getElementById("eeveeAtack").addEventListener("click", () => {
    attackingPokemon = Eevee;
    specialAttack = false;
    alert("Selecciona el Pokémon al que quieres atacar");
  });

  document.getElementById("eeveeHeal").addEventListener("click", () => {
    let TipoPocion = document.getElementById("pocionEevee").value;
    if (TipoPocion == "Pocion") {
      if (PocionEevee.cantidad > 0) {
        PocionEevee.usar();
        Eevee.heal(PocionEevee.efecto);
      } else {
        alert(`No tienes ${PocionEevee.nombre}`);
      }
    } else if (TipoPocion == "SuperPocion") {
      if (SuperPocionEevee.cantidad > 0) {
        SuperPocionEevee.usar();
        Eevee.heal(SuperPocionEevee.efecto);
      } else {
        alert(`No tienes ${SuperPocionEevee.nombre}`);
      }
    }
  });

  document.querySelectorAll(".pokemon").forEach((pokemonDiv) => {
    pokemonDiv.addEventListener("click", () => {
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
        }
      }
    });
  });
}

function getPokemonById(id) {
  switch (id) {
    case "bulbasaur":
      return Bulbasaur;
    case "charmander":
      return Charmander;
    case "squirtle":
      return Squirtle;
    case "eevee":
      return Eevee;
    default:
      return null;
  }
}
