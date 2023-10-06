import Cookies from "js-cookie";

export function Checktoken() {
    if (sessionStorage.getItem('token') == null && Cookies.get('token') !== undefined) {
        sessionStorage.setItem('token', Cookies.get('token') as string);
    }
}