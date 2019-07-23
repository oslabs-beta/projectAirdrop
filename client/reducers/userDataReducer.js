import { STORE_DEMOGRAPHIC_DATA, HANDLE_CHANGE, HANDLE_CHANGE_DATES, SET_DATE, HANDLE_CHANGE_TWO, UPDATE_USERNAME, UPDATE_PASSWORD, CREATE_USERNAME, CREATE_PASSWORD, CREATE_LOGIN, UPDATE_LOGIN, SIGN_UP, LOG_IN, IS_ADMIN} from "../constants/actionTypes";

const initialState = {
  username: '',
  pw: '',
  newUsername: '',
  newPW: '',
  isAdmin: null,
  isLoggedIn: false,
  userData: {
    userID: 5,
    firstName: '',
    middleInitial: '',
    lastName: '',
    rank: 'SGT',
    yearsInService: '<2',
    yearsInSpecialOps: '<2',
    ODANumber: 0,
    MOS: '18A',
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
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DEMOGRAPHIC_DATA:
      return { ...state };

    case HANDLE_CHANGE:
        const event = action.payload;
        const name = event.target.name;
        const value = event.target.value;
        return {
          ...state,
          userData: {
            ...state.userData,
            [name]: value,
          },
        };
        case HANDLE_CHANGE_TWO:
            const event2 = action.payload;
            const name2 = event2.target.name;
            const value2 = event2.target.value;
            return {
              ...state,
              dates: {
                ...state.dates,
                [name2]: value2,
              }
            };
    case HANDLE_CHANGE_DATES:
      return {
        ...state,
        userData: {
          ...state.userData,
          dateOfLastDeployment: `${state.dates.monthLD}/${state.dates.yearLD}`,
        }
      };
    case SET_DATE:
      return {
        ...state,
        userData: {
          ...state.userData,
          dateOfAssessment: action.payload,
          dateOfLastDeployment: action.payload,
        }
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
      console.log('is update login working omg')
      return { 
        ...state,
        pw: '',
        isAdmin: action.payload.isAdmin,
        isLoggedIn: true
      };
    case CREATE_LOGIN:
      console.log('is CREATELOGIN WORKING')
        return { 
          ...state,
          isLoggedIn: true
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
