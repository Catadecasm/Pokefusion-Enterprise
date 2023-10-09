import { API_URL } from '@/app/Utils/Constants';
import axios from 'axios';
export async function getUser() {
  try{
    const endpoint = API_URL+'/api/users/get-user';
    const token = sessionStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
  };
    const response = await axios.get(endpoint, {headers});
    return response.data;
  }catch(error){
    console.error('Error al realizar la solicitud GET:', error);
    return error;
  }
}
export async function loginUser(email: String, password: string) {
  try {
    const endpoint = API_URL+'/api/users/login'; 

    const data = {
      email: email,
      password: password
    };

    const response = await axios.post(endpoint, data, {
      headers: {
        'Content-Type': 'application/json', 
      },
    });
    return response;
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
    throw error;
  }
}
