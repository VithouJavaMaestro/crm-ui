import axios from "axios";

export const oauth2Token = async (code: string, registrationId: string, state: string): Promise<any> => {
    await axios.post("http://localhost:9000/token", null, {
        params: {
            registration_id: registrationId,
            code: code,
            state: state
        }
    });
}