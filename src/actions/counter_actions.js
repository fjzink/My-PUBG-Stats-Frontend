export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export function incrementCounter() {
    return { type: INCREMENT };
}

export function decrementCounter() {
    return { type: DECREMENT };
}
