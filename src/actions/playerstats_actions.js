export const ADD_STATS = 'add_stats';
export const SET_MODE = 'set_mode';

export function addStats(stats) {
    return {
        type: ADD_STATS,
        payload: stats,
    };
}

export function setGameMode(mode) {
    return {
        type: SET_MODE,
        payload: mode,
    };
}
