import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchBar({ handleSearch }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState(""); // Estado para el filtro de búsqueda
  const [searchResults, setSearchResults] = useState([]); // Estado para los resultados de búsqueda

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${currentPage * 24}&limit=24`
        );
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
      }
    };

    fetchPokemonList();
  }, [currentPage]);

  // Función para cargar la página siguiente
  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cargar la página anterior
  const loadPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para aplicar el filtro de búsqueda
  useEffect(() => {
    const filteredList = pokemonList.filter((pokemon) => {
      // Filtra por nombre, ID o tipo (puedes personalizar el criterio de filtro)
      return (
        pokemon.name.includes(filter) ||
        pokemon.id.toString().includes(filter) ||
        pokemon.types.some((type) => type.type.name.includes(filter))
      );
    });
    setSearchResults(filteredList);
  }, [filter, pokemonList]);

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="max-w-[986px] w-full px-8 pt-8 pb-6 justify-start items-start gap-12 inline-flex">
        <div className="h-8 justify-start items-center gap-4 flex">
          <div className="w-6 h-6 relative" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 24C18.0454 24 23.0467 19.5296 23.8785 13.7143H16.8503C16.1443 15.7118 14.2393 17.1429 12.0001 17.1429C9.76083 17.1429 7.85584 15.7118 7.14984 13.7143H0.121582C0.953404 19.5296 5.95468 24 12.0001 24ZM7.14984 10.2857H0.121582C0.953404 4.47035 5.95468 0 12.0001 0C18.0454 0 23.0467 4.47035 23.8785 10.2857H16.8503C16.1443 8.28824 14.2393 6.85714 12.0001 6.85714C9.76083 6.85714 7.85584 8.28824 7.14984 10.2857ZM14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z" fill="white"/>
                
          </svg>
          <div className="text-white text-2xl font-bold font-Poppins leading-loose">
            PokéWorld
          </div>
        </div>
        <div className="max-w-[594px] w-full h-8 px-2 py-2 bg-white rounded-2xl shadow-inner flex justify-start items-center gap-2 inline-flex">
          <div className="w-4 h-4 relative" />
          
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.9 13.6167L8.88333 9.6C8.55 9.88889 8.16111 10.1139 7.71667 10.275C7.27222 10.4361 6.8 10.5167 6.3 10.5167C5.1 10.5167 4.08333 10.1 3.25 9.26667C2.41667 8.43334 2 7.42778 2 6.25C2 5.07223 2.41667 4.06667 3.25 3.23334C4.08333 2.4 5.09444 1.98334 6.28333 1.98334C7.46111 1.98334 8.46389 2.4 9.29167 3.23334C10.1194 4.06667 10.5333 5.07223 10.5333 6.25C10.5333 6.72778 10.4556 7.18889 10.3 7.63334C10.1444 8.07778 9.91111 8.49445 9.6 8.88334L13.65 12.9C13.75 12.9889 13.8 13.1028 13.8 13.2417C13.8 13.3806 13.7444 13.5056 13.6333 13.6167C13.5333 13.7167 13.4111 13.7667 13.2667 13.7667C13.1222 13.7667 13 13.7167 12.9 13.6167ZM6.28333 9.51667C7.18333 9.51667 7.95 9.19723 8.58333 8.55834C9.21667 7.91945 9.53333 7.15 9.53333 6.25C9.53333 5.35 9.21667 4.58056 8.58333 3.94167C7.95 3.30278 7.18333 2.98334 6.28333 2.98334C5.37222 2.98334 4.59722 3.30278 3.95833 3.94167C3.31944 4.58056 3 5.35 3 6.25C3 7.15 3.31944 7.91945 3.95833 8.55834C4.59722 9.19723 5.37222 9.51667 6.28333 9.51667Z" fill="#DC0A2D"/>
          </svg>
          <input
          type="text"
          placeholder="Search by name, ID, or type"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            handleSearch(e.target.value); // Llama a handleSearch para actualizar el filtro en Pokemon
          }}
          className="w-full h-10 px-4 py-2 bg-transparent border-none focus:outline-none"
        />

          <div className="grow shrink basis-0 text-stone-500 text-[10px] font-normal font-Poppins leading-none">
            Search
            
          </div>
        </div>
        <div className="max-w-[30px] w-full h-8 p-2 bg-white rounded-2xl shadow-inner justify-start items-start gap-2 inline-flex relative">
          <div className="w-4 h-4 relative" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-10"
          >
            <path d="M5.5 12H2.5C2.35556 12 2.23611 11.9528 2.14167 11.8583C2.04722 11.7639 2 11.6444 2 11.5C2 11.3556 2.04722 11.2361 2.14167 11.1417C2.23611 11.0472 2.35556 11 2.5 11H5.5C5.64444 11 5.76389 11.0472 5.85833 11.1417C5.95278 11.2361 6 11.3556 6 11.5C6 11.6444 5.95278 11.7639 5.85833 11.8583C5.76389 11.9528 5.64444 12 5.5 12ZM13.5 5H2.5C2.35556 5 2.23611 4.95278 2.14167 4.85833C2.04722 4.76389 2 4.64444 2 4.5C2 4.35556 2.04722 4.23611 2.14167 4.14167C2.23611 4.04722 2.35556 4 2.5 4H13.5C13.6444 4 13.7639 4.04722 13.8583 4.14167C13.9528 4.23611 14 4.35556 14 4.5C14 4.64444 13.9528 4.76389 13.8583 4.85833C13.7639 4.95278 13.6444 5 13.5 5ZM9.5 8.5H2.5C2.35556 8.5 2.23611 8.45278 2.14167 8.35833C2.04722 8.26389 2 8.14444 2 8C2 7.85556 2.04722 7.73611 2.14167 7.64167C2.23611 7.54722 2.35556 7.5 2.5 7.5H9.5C9.64444 7.5 9.76389 7.54722 9.85833 7.64167C9.95278 7.73611 10 7.85556 10 8C10 8.14444 9.95278 8.26389 9.85833 8.35833C9.76389 8.45278 9.64444 8.5 9.5 8.5Z" fill="#DC0A2D"/>
          </svg>
        </div>
      </div>
      <div className="mt-4 max-w-[907px] w-full h-[22px] justify-center items-center gap-4 inline-flex">
        <div className="w-6 h-6 relative" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
           <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 24C18.0454 24 23.0467 19.5296 23.8785 13.7143H16.8503C16.1443 15.7118 14.2393 17.1429 12.0001 17.1429C9.76083 17.1429 7.85584 15.7118 7.14984 13.7143H0.121582C0.953404 19.5296 5.95468 24 12.0001 24ZM7.14984 10.2857H0.121582C0.953404 4.47035 5.95468 0 12.0001 0C18.0454 0 23.0467 4.47035 23.8785 10.2857H16.8503C16.1443 8.28824 14.2393 6.85714 12.0001 6.85714C9.76083 6.85714 7.85584 8.28824 7.14984 10.2857ZM14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z" fill="white"/>
        </svg>
        <div className="text-white text-2xl font-bold font-Poppins leading-loose">
          Pokédex
        </div>
      </div>
    </div>
  );
}
