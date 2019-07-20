import { combineReducers } from 'redux';
import testReducer from './testReducer';
import answersReducer from './answersReducer';
import userDataReducer from './userDataReducer';


const reducers = combineReducers({
    test: testReducer,
    answers: answersReducer,
    userData: userDataReducer,
});

export default reducers;
