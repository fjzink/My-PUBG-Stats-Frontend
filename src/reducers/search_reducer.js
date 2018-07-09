import { SET_PLATFORM, SET_REGION } from '../actions/search_actions';

export default function (state = { platform: '', region: '' }, action) {
    switch (action.type) {
        case SET_PLATFORM:
            return { ...state, platform: action.payload };
        case SET_REGION:
            return { ...state, region: action.payload };
        default:
            return state;
    }
}
