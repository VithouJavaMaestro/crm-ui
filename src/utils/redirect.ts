import {config} from "../env.ts";

export const sendRedirect = () => {
    console.log("Start send redirect");
    window.location.href = `${config.VITE_GATEWAY_URI}/oauth2/authorization/crm`;
}