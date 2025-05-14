type TokenMessage =
    | { type: 'set', value: string }
    | { type: 'get' }
    | { type: 'clear' };

let token: string | null = null;


self.onmessage = (e: MessageEvent<TokenMessage>) => {
    const msg = e.data;
    if (msg.type == "set") {
        token = msg.value;
    }
    if (msg.type == "get") {
        self.postMessage(token);
    } else if (msg.type == "clear") {
        token = null;
    }
}

