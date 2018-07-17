export const SET_SEASONS = 'set_seasons';

export function setSeasons(seasons) {
    return {
        type: SET_SEASONS,
        payload: seasons,
    };
}
