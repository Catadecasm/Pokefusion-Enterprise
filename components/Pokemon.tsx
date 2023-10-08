"use client";
import { paginatedSearch } from '@/services/PaginatedSearch';
import React, { useEffect, useState } from 'react';


export default function Pokemon() {
    const [pokemonList, setPokemonList] = useState([]); // Estado para almacenar la lista de Pokémon
  const [currentPage, setCurrentPage] = useState(0); // Estado para el número de página actual

  useEffect(() => {
    // Llamada inicial para cargar la primera página de resultados
    paginatedSearch(currentPage, 10) // Cambia 10 al número deseado de resultados por página
      .then((response) => {
        setPokemonList(response);
      });
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
    return(
     
        <><div className="flex flex-col justify-start items-center">
            <div className="w-[986px] h-[68px] px-8 pt-8 pb-6 justify-start items-start gap-12 inline-flex">
                <div className="h-8 justify-start items-center gap-4 flex">
                    <div className="w-6 h-6 relative" />
                    <div className="text-white text-2xl font-bold font-['Poppins'] leading-loose">PokéWorld</div>
                </div>
                <div className="w-[594px] h-8 pl-3 pr-4 py-2 bg-white rounded-2xl shadow-inner justify-start items-center gap-2 inline-flex">
                    <div className="w-4 h-4 relative" />
                    <div className="grow shrink basis-0 text-stone-500 text-[10px] font-normal font-['Poppins'] leading-none">Search</div>
                </div>
                <div className="w-8 h-8 p-2 bg-white rounded-2xl shadow-inner justify-start items-start gap-2 inline-flex">
                    <div className="w-4 h-4 relative" />
                </div>
            </div>
            <div className="w-[907px] h-[22px] justify-center items-center gap-4 inline-flex">
                <div className="w-6 h-6 relative" />
                <div className="text-white text-2xl  pt-8 font-bold font-['Poppins'] leading-loose">Pokédex</div>
            </div>
        </div>
        <div className="flex items-center justify-center pt-6">
        <div className="flex flex-nowrap w-[690px] h-[562px] px-3 pt-6 bg-white rounded-lg shadow-inner flex-col justify-start items-start gap-2 inline-flex">
          {pokemonList.map((pokemon) => (
            <div key={pokemon.id} className="self-stretch justify-start items-start gap-2 inline-flex">
              <div className="w-[104px] h-[108px] bg-white rounded-lg shadow flex-col justify-between items-center inline-flex">
                <div className="self-stretch px-2 pt-1 justify-end items-start gap-2 inline-flex">
                  <div className="text-right text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">#{pokemon.id}</div>
                </div>
                <div className="w-[72px] h-[72px] justify-center items-center inline-flex">
                  <img className="w-[72px] h-[72px]" src={pokemon.img_path} alt={`Pokemon #${pokemon.id}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones para cargar páginas */}
      <div className="flex justify-center mt-4">
        <button onClick={loadPreviousPage} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Anterior</button>
        <button onClick={loadNextPage} className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-2">Siguiente</button>
      </div>
    </>
                        
    );
  };
     
