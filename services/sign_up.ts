import { API_URL } from "@/app/Utils/Constants";
import axios from "axios";
export async function signUpUser(
  email: String,
  password: string,
  username: string,
  role: string
) {
  try {
    const endpoint =
      API_URL+"/api/users/sign-up";

    const data = {
      email: email,
      username: username,
      password: password,
      role: role,
    };

    const response = await axios.post(endpoint, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
    throw error;
  }
}
