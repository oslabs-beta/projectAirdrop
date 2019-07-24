import { 
  RECEIVE_AID, 
  CALL_API, 
  SEND_API, 
  SEND_API_FAILURE, 
  RECEIVE_API,
  SEND_QUESTIONNAIRE_RESPONSES,
  SEND_VPS_RESPONSES,
  SEND_WM_RESPONSES,
  SEND_IR_RESPONSES,
  SEND_LTVR_RESPONSES,
} from '../constants/actionTypes';

const initialState = {
  apiStatus: '',
  apiError: '',
  aid: null,
  ltvr: {
    words: [],
    responses: [],
    mean: null
  },
  vps: {
    responses: [],
    mean: null
  },
  wm: {
    correct: [],
    responses: [],
    mean: null
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
        apiStatus: 'pending',
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
    // case RECEIVE_API:
    //   return {
    //   ...state,
    //   results: action.payload.results,
    // };
    case RECEIVE_API:
      return {
        ...state,
        ltvr: {
          ...state.ltvr,
          words: [...action.payload.results.words],
        },
        wm: {
          ...state.wm,
          correct: [...action.payload.results.wm.correct]
        },
        ir: {
          ...state.ir,
          correct: [...action.payload.results.ir.correct]
        }
      }
    case SEND_QUESTIONNAIRE_RESPONSES:
      return {
        ...state,
        cmsq: {
          ...state.cmsq,
          responses: action.payload.cmsqResponses
        },
        cnaaq: {
          ...state.cnaaq,
          responses: action.payload.cnaaqResponses
        }
      }
    case SEND_VPS_RESPONSES:
      return {
        ...state,
        vps: {
          ...state.vps,
          responses: action.payload
        }
      }
    case SEND_WM_RESPONSES:
      return {
        ...state,
        wm: {
          ...state.wm,
          responses: action.payload
        }
      }
    case SEND_IR_RESPONSES:
      return {
        ...state,
        ir: {
          ...state.ir,
          responses: action.payload,
        }
      }
    case SEND_LTVR_RESPONSES:
      return {
        ...state,
        ltvr:{
          ...state.ltvr,
          responses: action.payload
        }
      }
    default:
      return state;
  }
};

export default answersReducer;
