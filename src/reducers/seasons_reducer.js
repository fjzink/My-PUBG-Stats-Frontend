import { SET_SEASONS } from '../actions/seasons_actions';

export default function (state = { xboxSeasons: {}, pcSeasons: {} }, action) {
    switch (action.type) {
        case SET_SEASONS:
            return action.payload;
        default:
            return state;
    }
}
