export const setCookie = (key: string, value: string, sameSite: "lax" | "strict" | "none" = "none", secure: boolean = true) => {
    document.cookie = key + '=' + value + '; samesite=' + sameSite + ";secure=" + secure;
}