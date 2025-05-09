import axios from "axios";
import {config} from "../env.ts";

export const oauth2Token = async (code: string, registrationId: string, state: string): Promise<any> => {
    return await axios.post("http://localhost:9000/token", null, {
        params: {
            registration_id: registrationId,
            code: code,
            state: state
        }
    });
}

export const axiosInstance = axios.create(({
    baseURL: config.VITE_API_BASE_URI
}))