import { combineReducers } from 'redux';
import testReducer from './testReducer';
import adminReducer from './adminReducer';

import userDataReducer from './userDataReducer';


const reducers = combineReducers({
    test: testReducer,
    // longTermVerbalRecall: longTermVerbalRecallReducer,
    // imageRecognition: imageRecognitionReducer,
    // questionnaires: questionnairesReducer,
    userData: userDataReducer,
    // visualProcessingSpeed: visualProcessingSpeedReducer,
    // workingMemory: workingMemoryReducer,
});

export default reducers;
