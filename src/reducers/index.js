import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import seasonsReducer from './seasons_reducer';
import playerStatsReducer from './playerstats_reducer';

const rootReducer = combineReducers({
  searchOptions: searchReducer,
  seasons: seasonsReducer,
  gameStats: playerStatsReducer,
});

export default rootReducer;
