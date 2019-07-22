import {
  RECEIVE_AID,
  CALL_API,
  SEND_API,
  SEND_API_FAILURE,
  RECEIVE_API,
} from "../constants/actionTypes";

const initialState = {
  apiStatus: "",
  apiError: "",
  aid: 10,
  ltvr: {
    words: [],
    responses: [],
    mean: null,
  },
  vps: {
    answers: [],
    mean: null,
  },
  wm: {
    correct: [],
    responses: [],
    mean: null,
  },
  ir: {
    correct: [],
    responses: [],
    mean: null,
  },
  cmsq: {
    responses: [],
  },
  cnaaq: {
    responses: [],
  },
};

const answersReducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case RECEIVE_AID:
      return ({
        ...state,
        aid: action.payload
      });
    case CALL_API:
      return {
        ...state,
        apiStatus: "pending"
      };
    case SEND_API:
      return {
        ...state,
        apiStatus: "success"
      };
    case SEND_API_FAILURE:
      return {
        ...state,
        apiStatus: "failure",
        apiError: action.payload
      };
    case RECEIVE_API:
      return {
      ...state,
      results: action.payload.results,
    //   ltvr: {
    //     // array of objects --> words
    //     words: action.payload[0].words,
      // },
    };
    default:
      return state;
  }
};

export default answersReducer;
