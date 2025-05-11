export const generateCodeVerifier = (len = 96): string => {
    return generateRandomString(len, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
}

export const generatePkceChallenge = async (pkceMethod: string, codeVerifier: string) => {
    if (pkceMethod !== "S256") {
        throw new TypeError(`Invalid value for 'pkceMethod', expected 'S256' but got '${pkceMethod}'.`);
    }

    // hash codeVerifier, then encode as url-safe base64 without padding
    const hashBytes = new Uint8Array(await sha256Digest(codeVerifier));
    return bytesToBase64(hashBytes)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/\=/g, '');
}

const sha256Digest = async (text: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    if (typeof crypto === "undefined" || typeof crypto.subtle === "undefined") {
        throw new Error("Web Crypto API is not available.");
    }

    return await crypto.subtle.digest("SHA-256", data);
}

const bytesToBase64 = (bytes: Uint8Array) => {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}


const generateRandomString = (len: number, alphabet: String) => {
    const randomData = generateRandomData(len);
    const chars = new Array(len);
    for (let i = 0; i < len; i++) {
        chars[i] = alphabet.charCodeAt(randomData[i] % alphabet.length);
    }
    return String.fromCharCode.apply(null, chars);
}

const generateRandomData = (len: number) => {
    if (typeof crypto === "undefined" || typeof crypto.getRandomValues === "undefined") {
        throw new Error("Web Crypto API is not available.");
    }

    return crypto.getRandomValues(new Uint8Array(len));
}
