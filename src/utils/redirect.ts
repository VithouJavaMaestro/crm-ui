import {config} from "../env.ts";

export const sendRedirect = () => {
    window.location.href = `${config.VITE_GATEWAY_URI}/oauth2/authorization/crm`;
}
export const sendLogout = () => {
    window.location.href = `${config.VITE_GATEWAY_URI}/logout`;
}