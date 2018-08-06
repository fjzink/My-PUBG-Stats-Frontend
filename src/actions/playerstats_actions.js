export const ADD_STATS = 'add_stats';

export function addStats(stats) {
    return {
        type: ADD_STATS,
        payload: stats,
    };
}
