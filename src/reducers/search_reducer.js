import {
    SET_PLATFORM,
    SET_REGION,
    SET_GAMERTAG,
    LOADER_STATE,
    SHOW_ERROR,
    HIDE_ERROR,
} from '../actions/search_actions';

const defaultState = {
    platform: '',
    region: '',
    gamertag: '',
    loaderActive: false,
    displayError: true,
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case SET_PLATFORM:
            return { ...state, platform: action.payload };
        case SET_REGION:
            return { ...state, region: action.payload };
        case SET_GAMERTAG:
            return { ...state, gamertag: action.payload };
        case LOADER_STATE:
            return { ...state, loaderActive: !state.loaderActive };
        case SHOW_ERROR:
            return { ...state, displayError: false };
        case HIDE_ERROR:
            return { ...state, displayError: true };
        default:
            return state;
    }
}
