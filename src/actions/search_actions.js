export const SET_PLATFORM = 'set_platform';
export const SET_REGION = 'set_region';
export const SET_GAMERTAG = 'set_gamertag';
export const LOADER_STATE = 'loader_state';
export const SHOW_ERROR = 'show_error';
export const HIDE_ERROR = 'hide_error';

export function setPlatform(platform) {
    return {
        type: SET_PLATFORM,
        payload: platform,
    };
}

export function setRegion(region) {
    return {
        type: SET_REGION,
        payload: region,
    };
}

export function setGamertag(gamertag) {
    return {
        type: SET_GAMERTAG,
        payload: gamertag,
    };
}

export function flipLoaderState() {
    return { type: LOADER_STATE };
}

export function showError() {
    return { type: SHOW_ERROR };
}

export function hideError() {
    return { type: HIDE_ERROR };
}
