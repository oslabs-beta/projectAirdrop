import { TEST_TEST, RECEIVE_API, CALL_API, API_FAILURE } from './../constants/actionTypes';

const initialState = {
  clicks: 0,
  test: [],
  apiStatus: null,
  apiError: null,
}

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_TEST:
      let newClicks = state.clicks + 1;
      // return {...state, clicks: state.clicks + 1 };
      return {...state, clicks: newClicks };
    case RECEIVE_API:
      return {
        ...state,
        apiStatus: 'success',
        test: action.payload,
      }
    case CALL_API:
      return {
        ...state,
        apiStatus: 'pending',
      }

    case API_FAILURE:
      return {
        ...state,
        apiStatus: 'failure',
        apiError: action.payload,
      }
    default:
      return state;
  }
};

export default testReducer;