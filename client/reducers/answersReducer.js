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
    responses: {},
    mean: null,
  },
  vps: {
    responses: [],
    mean: null,
  },
  wm: {
    correct: [],
    responses: [],
    // new
    userResponse: {
      correctResponses: [],
    },
    mean: null,
  },
  ir: {
    correct: [],
    responses: [],
    // new
    userResponse: {
      correctResponses: [],
    },
    mean: null,
  },
  cmsq: {
    // responses: [],
    // responses: ["6","4","5","6","4","3","5","6","4","3","4", "6", "4", "4", "5", "4", "3", "5", "6", "3"],
    responses: {},
  },
  cnaaq: {
    // responses: [],
    // responses: ["3","4","5","5","4","3","5","5","4","3","4","3"],
    responses: {},
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

      const totalRightWm = state.wm.correct.reduce((a,b,c)=>{
          if (b === action.payload[c]) {
            a.push(b)
          }
          return a; 
         },[])

         return {
          ...state,
          wm: {
            ...state.wm,
            responses: [...action.payload],
            userResponse: {
              correctResponses: totalRightWm,
              // correct,
              // responses,
              // mean,
            }
          }
        }
      // return {
      //   ...state,
      //   wm: {
      //     ...state.wm,
      //     responses: action.payload
      //   }
      // }

      // return {
      //   ...state,
      //   wm: {
      //     ...state.wm,
          
      //   }
      // }
    case SEND_IR_RESPONSES:
        // ir: {
        //   correct: [],
        //   responses: [],
        //   mean: null,

      const totalRightIr = state.ir.correct.reduce((a,b,c)=>{
       if (b === action.payload[c]) {
         a.push(b)
       }
       return a; 
      },[])
      return {
        ...state,
        ir: {
          ...state.ir,
          responses: [...action.payload],
          userResponse: {
            correctResponses: totalRightIr,
            // correct,
            // responses,
            // mean,
          }
        }
      }
      // return {
      //   ...state,
      //   ir: {
      //     ...state.ir,
      //     responses: action.payload,
      //   }
      // }
    case SEND_LTVR_RESPONSES:
      const key = Object.values(state.ltvr.words)
      .map(key => {
        return key = key.word.toLowerCase()});
      const sanitizedAnswers = action.payload.map(word => {
        word = word.toLowerCase().trim();
        return word;
      });
      const correctResponses = sanitizedAnswers.filter(a=> key.includes(a));
      const numberCorrect = correctResponses.length;
      return {
        ...state,
        ltvr:{
          ...state.ltvr,
          responses: {
            ...state.ltvr.responses,
            key,
            sanitizedAnswers,
            correctResponses,
            numberCorrect: numberCorrect || 0,
          // }
        }
      // }
      // return {
      //   ...state,
      }
    }
    default:
      return {
        ...state,
      }
  }
};

export default answersReducer;
