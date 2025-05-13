let token: null = null;

onmessage = function (event) {
    const {action, payload} = event.data;
    switch (action) {
        case 'setToken':
            token = payload;
            break;
        case 'getToken':
            postMessage({action: 'token', token});
            break;
        case 'clearToken':
            token = null;
            postMessage({action: 'tokenCleared'});
            break;
        default:
            console.error('Unknown action:', action);
    }
};
