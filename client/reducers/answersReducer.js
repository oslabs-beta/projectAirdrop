import { RECEIVE_AID, CALL_API, SEND_API, SEND_API_FAILURE } from '../constants/actionTypes';

const initialState = {
  apiStatus: '',
  apiError: '',
  aid: ''
};

const answersReducer = ( state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_AID:
      return {
        ...state,
        aid: action.payload
      };
    case CALL_API:
      return {
        ...state,
        apiStatus: 'pending',
      };
    case SEND_API:
      return {
        ...state,
        apiStatus: 'success',
      };
    case SEND_API_FAILURE:
    return {
      ...state,
      apiStatus: 'failure',
      apiError: action.payload,
    };
    default:
      return state;
  }
};

export default answersReducer;
