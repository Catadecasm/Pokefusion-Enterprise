import React, { useState, useEffect } from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import axios from "axios";

export default function SpecificPokemon({ pokemonId, onClose }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState(null); 

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        setPokemonData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener los detalles del Pokémon:", error);
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      if (pokemonData && pokemonData.species) {
        try {
          const speciesId = pokemonData.species.url.split("/").slice(-2, -1)[0];
          const response = await axios.get(
            `https://pokeapi.co/api/v2/evolution-chain/${speciesId}/`
          );
          setEvolutionChain(response.data);
        } catch (error) {
          console.error("Error al obtener la cadena de evolución del Pokémon:", error);
        }
      }
    };

    fetchEvolutionChain();
  }, [pokemonData]);

  const handleClose = () => {
    onClose();
  };

  if (isLoading) {
    return <div className="text-gray-600">Loading Pokémon Data.....</div>;
  }

  if (!pokemonData) {
    return <div className="text-red-600">We could not load Pokémon Data :c </div>;
  }
  const { name, sprites, types, weight, height, abilities, moves, stats } = pokemonData;

  const hpValue = stats.find((stat) => stat.stat.name === "hp").base_stat;
  const atkValue = stats.find((stat) => stat.stat.name === "attack").base_stat;
  const defValue = stats.find((stat) => stat.stat.name === "defense").base_stat;
  const spdValue = stats.find((stat) => stat.stat.name === "special-defense").base_stat;

  return (
    <div className="w-[690px] h-[452px] relative bg-blue-400 rounded-lg">
      <div className="w-[308px] h-[412px] p-5 left-[360px] top-[20px] absolute bg-white rounded-lg shadow-inner flex-col justify-start items-start gap-4 inline-flex">
        <button onClick={handleClose} className="absolute top-2 right-2 text-stone-500 hover:text-red-500">
        <AiFillCloseCircle/>
        </button>
        <div className="self-stretch justify-center items-start gap-4 inline-flex">
          {types.map((typeData, index) => (
            <div
              key={index}
              className="px-2 py-0.5 bg-lime-500 rounded-[10px] flex-col justify-start items-start inline-flex"
            >
              <div className="text-white text-[10px] font-bold font-Poppins leading-none">
                {typeData.type.name}
              </div>
            </div>
          ))}
        </div>

        <div className="self-stretch text-center text-zinc-400 text-sm font-bold font-Poppins leading-none">About</div>

        <div className="self-stretch bg-white justify-start items-start inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch py-2 justify-center items-center gap-0 inline-flex">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.28333 13H13.05L12 5.66663H5.33333L4.28333 13ZM8.66667 4.66663C8.95556 4.66663 9.19444 4.5694 9.38333 4.37496C9.57222 4.18051 9.66667 3.9444 9.66667 3.66663C9.66667 3.37774 9.57222 3.13885 9.38333 2.94996C9.19444 2.76107 8.95556 2.66663 8.66667 2.66663C8.38889 2.66663 8.15278 2.76107 7.95833 2.94996C7.76389 3.13885 7.66667 3.37774 7.66667 3.66663C7.66667 3.9444 7.76389 4.18051 7.95833 4.37496C8.15278 4.5694 8.38889 4.66663 8.66667 4.66663ZM10.4 4.66663H12C12.2556 4.66663 12.4778 4.74718 12.6667 4.90829C12.8556 5.0694 12.9667 5.27774 13 5.53329L14.0333 12.8666C14.0778 13.1666 14.0028 13.4305 13.8083 13.6583C13.6139 13.8861 13.3611 14 13.05 14H4.28333C3.97222 14 3.71945 13.8861 3.525 13.6583C3.33056 13.4305 3.25556 13.1666 3.3 12.8666L4.33333 5.53329C4.36667 5.27774 4.47778 5.0694 4.66667 4.90829C4.85556 4.74718 5.07778 4.66663 5.33333 4.66663H6.93333C6.84444 4.51107 6.77778 4.35274 6.73333 4.19163C6.68889 4.03051 6.66667 3.85551 6.66667 3.66663C6.66667 3.11107 6.86111 2.63885 7.25 2.24996C7.63889 1.86107 8.11111 1.66663 8.66667 1.66663C9.22222 1.66663 9.69444 1.86107 10.0833 2.24996C10.4722 2.63885 10.6667 3.11107 10.6667 3.66663C10.6667 3.85551 10.6444 4.03051 10.6 4.19163C10.5556 4.35274 10.4889 4.51107 10.4 4.66663ZM4.28333 13H13.05H4.28333Z" fill="#1D1D1D"/>
</svg>

              <div className="w-4 h-4 relative" />
              
              <div className="gap-0 text-justify text-stone-900 text-[10px] font-normal font-Poppins leading-none">{weight / 10} kg</div>
            </div>
            
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-Poppins leading-3">Weight</div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex gap-0 ">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2.33337C4 2.06671 4.1 1.83337 4.3 1.63337C4.5 1.43337 4.73333 1.33337 5 1.33337L11 1.33337C11.2556 1.33337 11.4861 1.43337 11.6917 1.63337C11.8972 1.83337 12 2.06671 12 2.33337V13.6667C12 13.9334 11.8972 14.1667 11.6917 14.3667C11.4861 14.5667 11.2556 14.6667 11 14.6667H5C4.73333 14.6667 4.5 14.5667 4.3 14.3667C4.1 14.1667 4 13.9334 4 13.6667L4 2.33337ZM5 2.33337L5 13.6667H11V11.5H8V10.5H11V8.50004H8V7.50004H11V5.50004H8V4.50004H11V2.33337L5 2.33337ZM8 4.50004V5.50004V4.50004ZM8 7.50004V8.50004V7.50004ZM8 10.5V11.5V10.5Z" fill="#1D1D1D"/>
</svg>

              <div className="w-4 h-4 relative origin-top-left rotate-90" />
              <div className="text-justify text-stone-900 text-[10px] font-normal font-Poppins leading-none">{height / 10} m</div>
            </div>
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-Poppins leading-3">Height</div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="h-8 justify-start items-center gap-2 inline-flex">
              <div className="text-stone-900 text-[10px] font-normal font-Poppins leading-none">
                {abilities.map((ability, index) => (
                  <div key={index}>{ability.ability.name}</div>
                ))}
              </div>
            </div>
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-Poppins leading-3">Abilities</div>
          </div>
        </div>

        <div className="self-stretch grow shrink basis-0 text-justify text-stone-900 text-[10px] font-normal font-Poppins leading-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis eros vitae tellus condimentum maximus sit amet in eros.</div>
        
        <div className="w-72 text-center text-zinc-400 text-sm font-bold font-Poppins leading-none">Base Stats</div>

        <div className="self-stretch bg-white justify-start items-start gap-2 inline-flex">
          <div className="pr-1 flex-col justify-start items-start inline-flex">
            <div className="w-[27px] text-right text-zinc-400 text-[10px] font-bold font-Poppins leading-none">HP</div>

            <div className="w-[27px] text-right text-zinc-400 text-[10px] font-bold font-Poppins leading-none">ATK</div>
            <div className="w-[27px] text-right text-zinc-400 text-[10px] font-bold font-Poppins leading-none">DEF</div>
            <div className="w-[27px] text-right text-zinc-400 text-[10px] font-bold font-Poppins leading-none">SPD</div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="pl-1 flex-col justify-start items-start inline-flex">
            <div className="w-[19px] text-stone-900 text-[10px] font-normal font-Poppins leading-none">{hpValue}</div>
            
            <div className="w-[19px] text-stone-900 text-[10px] font-normal font-Poppins leading-none">{atkValue}</div>
            <div className="w-[19px] text-stone-900 text-[10px] font-normal font-Poppins leading-none">{defValue}</div>
            <div className="w-[19px] text-stone-900 text-[10px] font-normal font-Poppins leading-none">{spdValue}</div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <div className="self-stretch h-3 flex-col justify-center items-start flex">
              <div className="self-stretch pr-20 rounded justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-zinc-400"/>
              </div>
              <div className="self-stretch h-1 opacity-20 bg-pink-500 rounded" />
            </div>
            <div className="self-stretch h-3 flex-col justify-center items-start flex">
              <div className="self-stretch pr-20 rounded justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-zinc-400" />
              </div>
              <div className="self-stretch h-1 opacity-20 bg-green-500 rounded" />
            </div>
            <div className="self-stretch h-3 flex-col justify-center items-start flex">
              <div className="self-stretch pr-20 rounded justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-zinc-400" />
              </div>
              <div className="self-stretch h-1 opacity-20 bg-orange-400 rounded" />
            </div>
            <div className="self-stretch h-3 flex-col justify-center items-start flex">
              <div className="self-stretch pr-20 rounded justify-start items-start inline-flex">
                <div className="grow shrink basis-0 self-stretch bg-zinc-400" />
              </div>
              <div className="self-stretch h-1 opacity-20 bg-blue-500 rounded" />
            </div>
          </div>
        </div>

        <div className="w-72 text-center text-zinc-400 text-sm font-bold font-Poppins leading-none">Evolution Chain</div>
  


        <div className="self-stretch bg-white justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-12 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">Evolution 1</div>
            <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
            {evolutionChain && evolutionChain.chain && evolutionChain.chain.evolves_to.map((evolution, index) => (
    <div key={index} className="grow shrink basis-0 h-12 flex-col justify-start items-center gap-1 inline-flex">
      <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">
        {evolution.species.name}
      </div>
      <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
        <img
          className="w-[38px] h-[39px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.species.url.split("/").slice(-2, -1)[0]}.png`}
          alt={`Evolution of ${evolution.species.name}`}
        />
      </div>
      {index < evolutionChain.chain.evolves_to.length - 1 && (
        <div className="w-px self-stretch bg-neutral-200" />
      )}
    </div>
  ))}
</div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">Evolution 2</div>
            <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
            {evolutionChain && evolutionChain.chain && evolutionChain.chain.evolves_to.map((evolution, index) => (
    <div key={index} className="grow shrink basis-0 h-12 flex-col justify-start items-center gap-1 inline-flex">
      <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">
        {evolution.species.name}
      </div>
      <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
        <img
          className="w-[38px] h-[39px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.species.url.split("/").slice(-2, -1)[0]}.png`}
          alt={`Evolution of ${evolution.species.name}`}
        />
      </div>
      {index < evolutionChain.chain.evolves_to.length - 1 && (
        <div className="w-px self-stretch bg-neutral-200" />
      )}
    </div>
  ))}
</div>
          </div>
          <div className="w-px self-stretch bg-neutral-200" />
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1 inline-flex">
            <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">Evolution 3</div>
            <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
            {evolutionChain && evolutionChain.chain && evolutionChain.chain.evolves_to.map((evolution, index) => (
    <div key={index} className="grow shrink basis-0 h-12 flex-col justify-start items-center gap-1 inline-flex">
      <div className="self-stretch text-center text-stone-500 text-[8px] font-normal font-['Poppins'] leading-3">
        {evolution.species.name}
      </div>
      <div className="w-[38px] h-[39px] flex-col justify-center items-center flex">
        <img
          className="w-[38px] h-[39px]"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolution.species.url.split("/").slice(-2, -1)[0]}.png`}
          alt={`Evolution of ${evolution.species.name}`}
        />
      </div>
      {index < evolutionChain.chain.evolves_to.length - 1 && (
        <div className="w-px self-stretch bg-neutral-200" />
      )}
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
      <div className="w-52 h-52 left-[137px] top-[68px] relative opacity-10" />

      <svg width="208" height="208" viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.1">
          <path d="M128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z"  fill="white"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M104 208C156.393 208 199.738 169.257 206.947 118.857H146.035C139.917 136.169 123.407 148.571 104 148.571C84.5933 148.571 68.0835 136.169 61.9648 118.857H1.05322C8.26235 169.257 51.6067 208 104 208ZM61.9648 89.1429H1.05322C8.26235 38.7431 51.6067 0 104 0C156.393 0 199.738 38.7431 206.947 89.1429H146.035C139.917 71.8314 123.407 59.4286 104 59.4286C84.5933 59.4286 68.0835 71.8314 61.9648 89.1429ZM128.762 104C128.762 117.676 117.676 128.762 104 128.762C90.3244 128.762 79.2381 117.676 79.2381 104C79.2381 90.3244 90.3244 79.2381 104 79.2381C117.676 79.2381 128.762 90.3244 128.762 104Z" fill="white"/>
        </g>
      </svg>
  
      <div className="w-[352px] h-[50px] px-5 pt-5 pb-[5px] left-[-8px] top-0 absolute justify-start items-center gap-2 inline-flex">
        <div className="w-8 h-8 relative" />
        <div className="grow shrink basis-0 text-white text-2xl font-bold font-Poppins leading-loose">{name}</div>
        <div className="text-white text-xs font-bold font-Poppins leading-none">#{pokemonId}</div>
      </div>
      <div className="w-[184px] left-[-8px] top-[54px] absolute text-center text-white text-xs font-bold font-Poppins leading-none">Nickname</div>
      <div className="w-[352px] h-[120px] pl-5 py-4 left-0 top-[156px] absolute justify-between items-end inline-flex">
        <div className="w-6 h-6 relative" />
        <div className="w-[200px] h-[200px]  justify-center items-center flex">
        <img className="w-[200px] h-[200px] mt-20" src={sprites.front_default} alt={`Pokemon ${name}`} />
          
        </div>
        <div className="w-6 h-6 relative" />
      </div>
    </div>
  
  );
}
