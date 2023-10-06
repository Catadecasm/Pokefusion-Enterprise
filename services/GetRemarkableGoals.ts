import { API_URL } from '@/app/Utils/Constants';
import axios from 'axios';

export async function getInfofights() {
  try {
    // Obtén el token de sesión de sessionStorage
    const token = sessionStorage.getItem('token');

    // Configura los encabezados de la solicitud con el token
    const headers = {

      Authorization: `Bearer ${token}`
    }; 

    const response = await axios.get(API_URL+'/api/fights/getAmountFights', { headers });
    console.log('Respuesta de la API:', response);

    // Supongamos que la respuesta es solo el número
    return response.data; // El número directamente, si la respuesta es solo el número
  } catch (error) {
    console.error('Error al obtener el recuento de Pokémon capturados:', error);
    return 0; // Valor predeterminado si hay un error
  }

}
export async function getCapturedPokemonCount() {
  try {
    // Obtén el token de sesión de sessionStorage
    let token = sessionStorage.getItem('token');

    // Configura los encabezados de la solicitud con el token
    const headers = {

      Authorization: `Bearer ${token}`
    }; 

    const response = await axios.get(API_URL+'/api/pokemons/getAmountPokemons', { headers });
    console.log('Respuesta de la API:', response);

    // Supongamos que la respuesta es solo el número
    return response.data; // El número directamente, si la respuesta es solo el número
  } catch (error) {
    console.error('Error al obtener el recuento de Pokémon capturados:', error);
    return 0; // Valor predeterminado si hay un error
  }
}
