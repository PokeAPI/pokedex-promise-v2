// app.js
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

/**
 * 1. Async/Await version
 */
async function fetchWithAsync() {
  try {
    const species = await P.getPokemonSpeciesByName('golduck');
    const frenchName = species.names.find(n => n.language.name === 'fr').name;
    console.log('Async/Await → French name of Golduck:', frenchName);
  } catch (err) {
    console.error('Error (Async/Await):', err);
  }
}

/**
 * 2. Promise version
 */
function fetchWithPromise() {
  P.getPokemonByName(['eevee', 'ditto'])
    .then(responses => {
      console.log('Promises → Eevee and Ditto:', responses.map(p => p.name).join(', '));
    })
    .catch(err => {
      console.error('Error (Promises):', err);
    });
}

/**
 * 3. Callback version
 */
function fetchWithCallback() {
  P.getPokemonByName(34, (response, error) => {
    if (!error) {
      console.log('Callback → Pokémon #34:', response.name);
    } else {
      console.error('Error (Callback):', error);
    }
  });
}

// Run them in sequence
fetchWithAsync();
fetchWithPromise();
fetchWithCallback();
