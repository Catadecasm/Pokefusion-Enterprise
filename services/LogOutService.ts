import { API_URL } from "@/app/Utils/Constants";
import axios from "axios";


export async function logOut() {
    try{
        const token = sessionStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        const response = await axios.get(API_URL+'/api/users/logout', { headers });
        console.log('Respuesta de la API:', response);
    }catch(error){
        console.error('Error al cerrar sesión:', error);
    }
}