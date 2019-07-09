import { STORE_DEMOGRAPHIC_DATA, HANDLE_CHANGE, HANDLE_CHANGE_DATES, SET_DATE, HANDLE_CHANGE_TWO } from "../constants/actionTypes";
import { bindActionCreators } from "../../../../../../Library/Caches/typescript/3.5/node_modules/redux";

const initialState = {
  userData: {
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
        }
      };
    default:
      return state;
  }
};

export default userDataReducer;
