import { SET_PLATFORM, SET_REGION, SET_GAMERTAG } from '../actions/search_actions';

export default function (state = { platform: '', region: '', gamertag: '' }, action) {
    switch (action.type) {
        case SET_PLATFORM:
            return { ...state, platform: action.payload };
        case SET_REGION:
            return { ...state, region: action.payload };
        case SET_GAMERTAG:
            return { ...state, gamertag: action.payload };
        default:
            return state;
    }
}
