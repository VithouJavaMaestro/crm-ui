import {OAuth2AccessToken} from "../model/token.ts";

export const tokenWorker: Worker = new Worker(new URL('./worker.ts', import.meta.url), {
    type: 'module'
})

export function setToken(token: OAuth2AccessToken) {
    tokenWorker.postMessage({action: 'setToken', payload: token});
}

export function getToken(): Promise<OAuth2AccessToken> {
    return new Promise((resolve) => {
        tokenWorker.onmessage = function (event) {
            if (event.data.action === 'token') {
                resolve(event.data.token);
            }
        };
        tokenWorker.postMessage({action: 'getToken'});
    });
}