import { ADD_STATS } from '../actions/playerstats_actions';

export default function (state = {}, action) {
    switch (action.type) {
        case ADD_STATS:
            return { ...state, currentPlayerStats: action.payload };
        default:
            return state;
    }
}
