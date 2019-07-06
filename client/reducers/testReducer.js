import { TEST_TEST } from './../constants/actionTypes';

const initialState = {
  clicks: 0,
}

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case TEST_TEST:
      let newClicks = state.clicks + 1;
      // return {...state, clicks: state.clicks + 1 };
      return {...state, clicks: newClicks };

    default:
      return state;
  }
};

export default testReducer;