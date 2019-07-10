import { TEST_TEST, RECEIVE_API, CALL_API, API_FAILURE, CHANGE_SECTION, CHANGE_SLIDE } from './../constants/actionTypes';

const initialState = {
  clicks: 0,
  test: [],
  answers: [],
  apiStatus: null,
  apiError: null,
  currentSection: 3,
  currentSlide: 0,
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

    case CHANGE_SECTION:
      return (console.log('test'), {
        ...state,
        currentSection: state.currentSection + 1,
      });

    case CHANGE_SLIDE:
      return (console.log('change Slide'), {
        ...state,
        currentSlide: state.currentSlide + 1,
      });

    default:
      return state;
  }
};

export default testReducer;
