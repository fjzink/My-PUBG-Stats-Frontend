import { combineReducers } from 'redux';
import searchReducer from './search_reducer';
import seasonsReducer from './seasons_reducer';

const rootReducer = combineReducers({
  searchOptions: searchReducer,
  seasons: seasonsReducer,
});

export default rootReducer;
