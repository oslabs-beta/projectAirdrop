import { STORE_DEMOGRAPHIC_DATA, HANDLE_CHANGE } from "../constants/actionTypes";

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
    default:
      return state;
  }
};

export default userDataReducer;
