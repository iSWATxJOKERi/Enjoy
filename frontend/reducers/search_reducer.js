import { combineReducers } from 'redux';
import userSearchReducer from './userSearchReducer';
import videoSearchReducer from './videoSearchReducer';

const searchReducer = combineReducers({
    userSearch: userSearchReducer,
    videoSearch: videoSearchReducer
})

export default searchReducer;