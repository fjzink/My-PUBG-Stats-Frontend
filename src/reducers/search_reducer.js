import {
    SET_PLATFORM,
    SET_REGION,
    SET_GAMERTAG,
    LOADER_STATE,
    SHOW_ERROR,
    HIDE_ERROR,
    SHOW_FORM_ERROR,
    HIDE_FORM_ERROR,
} from '../actions/search_actions';

const defaultState = {
    platform: '',
    region: '',
    gamertag: '',
    loaderActive: false,
    displayError: true,
    displayFormError: false,
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
        case SHOW_FORM_ERROR:
            return { ...state, displayFormError: true };
        case HIDE_FORM_ERROR:
            return { ...state, displayFormError: false };
        default:
            return state;
    }
}
