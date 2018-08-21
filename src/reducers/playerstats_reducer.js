import { ADD_STATS, SET_MODE } from '../actions/playerstats_actions';

export default function (state = { gameMode: 'solo' }, action) {
    switch (action.type) {
        case ADD_STATS:
            return { ...state, currentPlayerStats: action.payload };
        case SET_MODE:
            return { ...state, gameMode: action.payload };
        default:
            return state;
    }
}
