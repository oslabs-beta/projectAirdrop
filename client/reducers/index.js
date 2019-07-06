import { combineReducers } from 'redux';
import testReducer from './testReducer';
import imageRecognitionReducer from './imageRecognitionReducer';
import longTermVerbalRecallReducer from './longTermVerbalRecallReducer';
import questionnairesReducer from './questionnairesReducer';
import userDataReducer from './userDataReducer';
import visualProcessingSpeedReducer from './visualProcessingSpeedReducer';
import workingMemoryReducer from './workingMemoryReducer';

const reducers = combineReducers({
    test: testReducer,
    longTermVerbalRecall: longTermVerbalRecallReducer,
    imageRecognition: imageRecognitionReducer,
    questionnaires: questionnairesReducer,
    userData: userDataReducer,
    visualProcessingSpeed: visualProcessingSpeedReducer,
    workingMemory: workingMemoryReducer,
});

export default reducers;
