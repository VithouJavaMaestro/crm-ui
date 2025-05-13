import {OAuth2Token} from "../api/authApi.ts";

export const tokenWorker: Worker = new Worker(new URL('./worker.ts', import.meta.url), {
    type: 'module'
})

export function setToken(token: OAuth2Token) {
    tokenWorker.postMessage({action: 'setToken', payload: token});
}

export function getToken() : Promise<OAuth2Token> {
    return new Promise((resolve) => {
        tokenWorker.onmessage = function (event) {
            if (event.data.action === 'token') {
                resolve(event.data.token);
            }
        };
        tokenWorker.postMessage({action: 'getToken'});
    });
}