import SearchBar from "./SearchBar";
import { BiArrowBack } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import React, { useEffect, useState, lazy, Suspense} from "react";
import axios from "axios";
import SpecificPokemon from "./SpecificPokemon";

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("");
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [selectedPokemonData, setSelectedPokemonData] = useState(null);
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [isSpecificPokemonOpen, setIsSpecificPokemonOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTotalPokemonCount = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setTotalPokemonCount(response.data.count);
      } catch (error) {
        console.error("Error al obtener la cantidad total de Pokémon:", error);
      }
    };

    fetchTotalPokemonCount();
  }, []);

  useEffect(() => {
    const fetchPokemonList = async () => {
      setIsLoading(true);

      try {
        const offset = currentPage * 24;
        const limit = Math.min(24, totalPokemonCount - offset);
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );

        setPokemonList(pokemonDetails);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener la lista de Pokémon:", error);
        setIsLoading(false);
      }
    };

    fetchPokemonList();
  }, [currentPage, totalPokemonCount]);

  const handlePokemonCardClick = async (id) => {
    setSelectedPokemonId(id);
    setIsSpecificPokemonOpen(true);

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      setSelectedPokemonData(response.data);
    } catch (error) {
      console.error("Error al obtener detalles adicionales del Pokémon:", error);
    }
  };

  const loadNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const loadPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (value) => {
    setFilter(value);
  };

  return (
    <>
    
    <SearchBar handleSearch={handleSearch} filter={filter} />
      {isSpecificPokemonOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <Suspense fallback={<div>Cargando...</div>}>
            <SpecificPokemon
              pokemonId={selectedPokemonId}
              pokemonData={selectedPokemonData}
              onClose={() => setIsSpecificPokemonOpen(false)}
            />
          </Suspense>
        </div>
      )}

      {isLoading ? (
        <div className="flex items-center justify-center font-normal font-Poppins pt-6">Loading...</div>
      ) : (
        <pokemonList
          pokemonList={pokemonList}
          filter={filter}
          handlePokemonCardClick={handlePokemonCardClick}
        />
      )}
  <div className="flex items-center justify-center pt-6">
    <div className="flex flex-wrap justify-center w-[690px] h-[562px] px-3 pt-6 bg-white rounded-lg shadow-inner justify-start items-start gap-2 inline-flex">
      {pokemonList
        .filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((pokemon) => (
          <div
            key={pokemon.id}
            className="w-[104px] h-[108px] bg-white rounded-lg shadow flex-col justify-between items-center inline-flex relative"
            onClick={() => handlePokemonCardClick(pokemon.id)}
          >
                <div className="self-stretch px-2 pt-1 justify-end items-start gap-2 inline-flex">
                  <div className="text-right text-stone-500 text-[8px] font-normal font-Poppins leading-3">
                    #{pokemon.id}
                  </div>
                </div>
                <div className="w-[72px] h-[72px] justify-center items-center inline-flex mb-5">
                  <img
                    className="w-[72px] h-[72px] z-10"
                    src={pokemon.sprites.front_default}
                    alt={`Pokemon #${pokemon.id}`}
                    style={{ imageRendering: "smooth" }}
                  />
                </div>
                <div className="w-full bg-zinc-100 absolute bottom-0 left-0">
                  <div className="w-22 h-11 px-2 pt-6 pb-1 rounded-md justify-start items-start">
                    <div className="grow shrink basis-0 text-center text-stone-900 text-xs font-normal font-Poppins leading-none">
                      {pokemon.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <nav>
        <ul className="flex justify-center">
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Previous"
              onClick={loadPreviousPage}
            >
              <span className="material-icons text-sm">
                <BiArrowBack />
              </span>
            </a>
          </li>

          <li>
            <a className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-500 bg-blue-500 p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300">
              {currentPage + 1}
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-white p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Next"
              onClick={loadNextPage}
            >
              <span className="material-icons text-sm">
                <GrLinkNext />
              </span>
            </a>
          </li>
        </ul>
      </nav>
      
    </>
  );
}
