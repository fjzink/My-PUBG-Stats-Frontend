import { combineReducers } from 'redux';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  searchOptions: searchReducer,
});

export default rootReducer;
