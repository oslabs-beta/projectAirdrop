import {
  CLEAR_API,
  SEND_API,
  SEND_API_FAILURE,
  STORE_DEMOGRAPHIC_DATA,
  HANDLE_CHANGE,
  HANDLE_CHANGE_DATES,
  SET_DATE,
  HANDLE_CHANGE_TWO,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  CREATE_USERNAME,
  CREATE_PASSWORD,
  CREATE_LOGIN,
  UPDATE_LOGIN,
  SIGN_UP,
  LOG_IN,
  IS_ADMIN,
  CREATING_ACCOUNT,
  LOGGING_IN,
  LOGGED_IN,
  LOGGED_OUT,
} from "../constants/actionTypes";

const initialState = {
  username: '',
  pw: '',
  newUsername: '',
  newPW: '',
  isAdmin: null,
  isLoggedIn: false,
  apiStatus: null,
  userStatus: 'Logging In',
  userData: {
    userID: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    rank: '',
    yearsInService: '',
    yearsInSpecialOps: '',
    ODANumber: '',
    MOS: '',
    dateOfLastDeployment: '',
    dateOfAssessment: '',
  },
  dates: {
    monthLD: '',
    yearLD: '',
  },
  dropDowns: {
    rank: ['SGT', 'SSG', 'SFC', 'MSG', '1SG', 'SGM', 'CPT', 'MAJ', 'LTCOL', 'COL'],
    mos: ['18A', '180A', '18B', '18C', '18D', '18E', '18F', '18Z'],
    years: ['<2', '3-6', '7-10', '11-15', '16-20', '20+'],
  },
  userDataErrors: {
    firstName: '   ',
    middleInitial: '   ',
    lastName: '   ',
    rank: '   ',
    yearsInService: '   ',
    yearsInSpecialOps: '   ',
    ODANumber: '   ',
    MOS: '   ',
    dateOfLastDeployment: '',
    monthLD: '   ',
    yearLD: '   ',
  },
};

const userDataReducer = (state = initialState, action) => {

  switch (action.type) {

    case CREATING_ACCOUNT:
      return {
        ...state,
        userStatus: 'Create Account',
        username: '',
        pw: '',
        apiStatus: null
      };

    case LOGGING_IN:
      return {
        ...state,
        userStatus: 'Logging In',
        username: '',
        pw: '',
        apiStatus: null
      };

    case LOGGED_IN:
      return {
        ...state,
        userStatus: 'Logged In'
      };

    case LOGGED_OUT:
      return {
        ...state,
        userStatus: 'Logging In'
      };

    case CLEAR_API:
      return {
        ...state,
        apiStatus: null
      };

    case SEND_API:
      return {
        ...state,
        apiStatus: action.payload
      };

    case SEND_API_FAILURE:
      return {
        ...state,
        apiStatus: action.payload
      };

    case STORE_DEMOGRAPHIC_DATA:
      return { ...state };

    case HANDLE_CHANGE:

      if (
        (action.payload.name !== 'middleInitial'
      && action.payload.name !== 'ODANumber')
      && action.payload.value.length < 1) {
        return {
          ...state,
          userData: {
            ...state.userData,
            [action.payload.name]: action.payload.value,
          },
          userDataErrors: {
            ...state.userDataErrors,
            [action.payload.name]: true,
          },
        };
      } else if (action.payload.name === 'middleInitial')
      {
        if (action.payload.value.length > 1) {
          return {
            ...state,
            userData: {
              ...state.userData,
              [action.payload.name]: action.payload.value,
            },
            userDataErrors: {
              ...state.userDataErrors,
              [action.payload.name]: true,
            },
          };
        } else {
          return {
            ...state,
            userData: {
              ...state.userData,
              [action.payload.name]: action.payload.value,
            },
            userDataErrors: {
              ...state.userDataErrors,
              [action.payload.name]: false,
            },
          };
        }
      }
      else if (action.payload.name === 'ODANumber')
      {
        if (action.payload.value.length > 4 || action.payload.value.length < 4) {
          return {
            ...state,
            userData: {
              ...state.userData,
              [action.payload.name]: action.payload.value,
            },
            userDataErrors: {
              ...state.userDataErrors,
              [action.payload.name]: true,
            },
          };
        } else {
          return {
            ...state,
            userData: {
              ...state.userData,
              [action.payload.name]: action.payload.value,
            },
            userDataErrors: {
              ...state.userDataErrors,
              [action.payload.name]: false,
            },
          };
        }
      }
      else {
                return {
          ...state,
          userData: {
            ...state.userData,
            [action.payload.name]: action.payload.value,
          },
                  userDataErrors: {
          ...state.userDataErrors,
          [action.payload.name]: false,
        },
        };
      }

    case HANDLE_CHANGE_TWO:
      const event2 = action.payload;
      const name2 = event2.target.name;
      const value2 = event2.target.value;

      if(value2.length < 1){
        return {
          ...state,
          dates: {
            ...state.dates,
            [name2]: value2,
          },
          userDataErrors: {
            ...state.userDataErrors,
            [name2]: true,
          },
        };
      } else {
        return {
          ...state,
          dates: {
            ...state.dates,
            [name2]: value2,
          },
          userDataErrors: {
            ...state.userDataErrors,
            [name2]: false,
          },
        };
      }


    case HANDLE_CHANGE_DATES:
      return {
        ...state,
        userData: {
          ...state.userData,
          dateOfLastDeployment: `${state.dates.monthLD}/${state.dates.yearLD}`,
        },
      };
    case SET_DATE:
      return {
        ...state,
        userData: {
          ...state.userData,
          dateOfAssessment: action.payload,
          dateOfLastDeployment: action.payload,
        },
      };
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        pw: action.payload
      };
    case CREATE_USERNAME:
      return {
        ...state,
        newUsername: action.payload
      };
    case CREATE_PASSWORD:
      return {
        ...state,
        newPW: action.payload
      };
    case UPDATE_LOGIN:
      return {
        ...state,
        pw: '',
        isAdmin: action.payload.isAdmin,
        userData: {
          ...state.userData,
          userID: action.payload.userID
        },
        isLoggedIn: true
      };
    case CREATE_LOGIN:
        return {
          ...state,
          // isLoggedIn: true,
        };
    case IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload,
      }
    default:
      return state;
  }
};

export default userDataReducer;
