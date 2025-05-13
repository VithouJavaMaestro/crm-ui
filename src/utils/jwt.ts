import {jwtDecode, JwtPayload} from "jwt-decode";

export const decode = (jwt: string): JwtPayload => {
    return jwtDecode(jwt);
}

export const isTokenExpired = (exp: number | undefined) => {
    if (!exp) {
        return true;
    } else {
        const currentTime = Math.floor(Date.now() / 1000);
        return exp < currentTime;
    }
}