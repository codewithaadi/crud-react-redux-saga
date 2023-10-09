import {combineReducers} from 'redux';
import usersReducer from './userReducers';

const rootReducer = combineReducers({
    data: usersReducer,
});

export default rootReducer;