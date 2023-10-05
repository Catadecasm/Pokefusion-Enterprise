import axios from "axios";
export async function signUpUser(
  email: String,
  password: string,
  username: string,
  role: string
) {
  try {
    const endpoint =
      "https://pure-sands-54885-c60c4fd3c1bb.herokuapp.com/api/users/sign-up";

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
