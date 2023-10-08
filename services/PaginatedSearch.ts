import axios from "axios";

interface PokemonInfo {
  id: number;
  img_path: string;
}

export async function paginatedSearch(Page: number, Limit: number): Promise<PokemonInfo[]> {
  console.log("PaginatedSearch");
  try {
    const token = sessionStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const API_URL = 'https://pokemonmyapi-ab05e7daf155.herokuapp.com/'; //Borrar esta línea una vez en desarrollo
    const { data } = await axios.get(API_URL + `api/pokedex/pokemon?quantity=${Limit}&offset=${Page}`, { headers });
    
    const pokemonList: PokemonInfo[] = [];

    data.result.forEach((element: any) => {
      pokemonList.push({
        id: element.id,
        img_path: element.img_path
      });
    });
    console.log(pokemonList);
    return pokemonList;
  } catch (error) {
    console.log(error);
    throw error; // Puedes manejar el error de una manera más adecuada según tus necesidades
  }
}
