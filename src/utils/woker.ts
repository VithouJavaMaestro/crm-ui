export const worker = new Worker(new URL("./tokenWorker.ts", import.meta.url), {
    type: 'module'
});