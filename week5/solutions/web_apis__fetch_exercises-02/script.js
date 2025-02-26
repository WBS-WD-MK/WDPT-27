// You can work here or download the template
const pokemonContainer = document.getElementById('pokemon-container');

// Function to fetch data for a specific Pokémon by ID
async function fetchPokemon(id) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.error(`Error fetching Pokémon with ID ${id}:`, error);
  }
}

// Function to display Pokémon cards in the DOM
async function displayPokemons() {
  // Loop through the first 150 Pokémon IDs
  for (let i = 1; i <= 150; i++) {
    const pokemon = await fetchPokemon(i);
    if (pokemon) {
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add(
        'bg-white',
        'rounded-lg',
        'shadow-md',
        'p-4',
        'flex',
        'flex-col',
        'items-center',
        'text-center',
      );

      const pokemonImage = document.createElement('img');
      pokemonImage.src = pokemon.sprites.front_default;
      pokemonImage.alt = pokemon.name;
      pokemonImage.classList.add('mb-4');

      const pokemonName = document.createElement('h2');
      pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      pokemonName.classList.add('text-xl', 'font-bold', 'mb-2');

      const pokemonInfo = document.createElement('p');
      pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
        .map((typeInfo) => typeInfo.type.name)
        .join(', ')}`;
      pokemonInfo.classList.add('text-gray-600');

      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonInfo);

      pokemonContainer.appendChild(pokemonCard);
    }
  }
}

// Fetch and display Pokémon on page load
displayPokemons();

// Same solution but using .then.catch

// const renderPokemons = () => {
//   for (let id = 1; id <= 150; id++) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//       .then((res) => res.json())
//       .then((pokemon) => {
//         const pokemonCard = document.createElement('div');
//         pokemonCard.classList.add(
//           'bg-gray-300',
//           'rounded-lg',
//           'p-4',
//           'flex',
//           'flex-col',
//           'items-center',
//           'text-center',
//         );
//         const image = document.createElement('img');
//         image.src = pokemon.sprites.front_default;
//         image.alt = pokemon.name;
//         const name = document.createElement('h2');
//         name.textContent = pokemon.name;
//         name.classList.add('font-bold', 'text-xl');
//         const type = document.createElement('p');
//         type.textContent = pokemon.types.map((t) => t.type.name).join(', ');
//         type.classList.add('text-gray-600');
//         pokemonCard.appendChild(image);
//         pokemonCard.appendChild(name);
//         pokemonCard.appendChild(type);
//         pokemonContainer.appendChild(pokemonCard);
//       })
//       .catch((e) => console.log(e));
//   }
// };
// renderPokemons();
