import { TEST_TEST, RECEIVE_API, CALL_API, API_FAILURE, CHANGE_SECTION, CHANGE_SLIDE, BUILD_VPS_ANSWERS } from './../constants/actionTypes';

const initialState = {
  clicks: 0,
  test: [],
  answers: [],
  // new answer array for each section
  vpsAnswers: [],
  answerKey: [],
  apiStatus: null,
  apiError: null,
  currentSection: 2,
  currentSlide: 0,
};

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
        // test: action.payload,
        test: action.payload.test,

      };

    case CALL_API:
      return {
        ...state,
        apiStatus: 'pending',
      };

    case API_FAILURE:
      return {
        ...state,
        apiStatus: 'failure',
        apiError: action.payload,
      };

    case CHANGE_SECTION:
      return {
        ...state,
        currentSection: state.currentSection + 1,
        currentSlide: 0
      };

    case CHANGE_SLIDE:
      return (console.log('change Slide'), {
        ...state,
        currentSlide: state.currentSlide + 1,
      });

    case BUILD_VPS_ANSWERS:
      return (console.log('building VPS'), {
        ...state,
        vpsAnswers: generateVPS(state.answerKey),
      });

    default:
      return state;
  }
};

function generateVPS(answerKey) {
  const randArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
  'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  let retArr = [];
  let rightAnswers = [];
  let doubledUp = false;
  let i = 3;
  while(i <= 6){
    let oneSet = [];
    for(let k = 0; k < 5; k++){
      let string = '';
      for(let j = 0; j < i; j++){
        if(j !== 0 && (j === i - 3)){
          string += '-';
        }
        if(i >= 4 && j < 2) string += randArr[Math.floor(Math.random()*10) + 26];
        else if (i >= 4 && j >= 2 && j < 4) string += randArr[Math.floor(Math.random()*26)];
        else string += randArr[Math.floor(Math.random()*36)];
      }
      oneSet.push(string);
    }
    rightAnswers.push(oneSet);
    if(!doubledUp && i > 4){
      doubledUp = true;
    } else {
      i++;
      doubledUp = false;
    }
  }
  let nearlyRight = makeNearlyRight(rightAnswers);
  let kindaRight = makeKindaRight(rightAnswers);
  let veryWrong = makeVeryWrong(rightAnswers);
  retArr.push(rightAnswers);
  retArr.push(nearlyRight);
  retArr.push(kindaRight);
  retArr.push(veryWrong);
  // console.log(rightAnswers, "right Answers");
  // for(let i = 0; i < retArr.length; i++){
  //   retArr[i].unshift(retArr[i][3]);
  //   retArr[i].splice(4, 1);
  // }
  let stupidTestMalarkey = JSON.parse(JSON.stringify(retArr));
  for(let i = 0; i < 6; i++){
    stupidTestMalarkey = JSON.parse(JSON.stringify(retArr));
    console.log('Check against margle farg in for', stupidTestMalarkey);
    let rightElement = 0;
    for(let j = 0; j < 1; j++) {
      let swapIndex1 = Math.floor(Math.random() * 4);
      let swapIndex2 = Math.floor(Math.random() * 4);
      // console.log(rightElement);
      console.log(swapIndex2, swapIndex1, "preswap");
      let temp;
      temp = retArr[swapIndex1][i];
      retArr[swapIndex1][i] = retArr[swapIndex2][i];
      retArr[swapIndex2][i] = temp;
      // console.log(retArr[swapIndex1][i], retArr[swapIndex2][i], "postswap");
      if (rightElement === swapIndex1) {
        rightElement = swapIndex2;
      } else if (rightElement === swapIndex2) {
        rightElement = swapIndex1;
      }
      // console.log(retArr[rightElement][i], "right element")
    }
    // console.log(retArr, "swap check1");
    answerKey.push(rightElement);
  }
  stupidTestMalarkey = JSON.parse(JSON.stringify(retArr));
  console.log(stupidTestMalarkey, "swap check2");
  return stupidTestMalarkey;
}

function makeNearlyRight(rightAnswers){
  let nearlyRight = [];
  for(let j = 0; j < 6; j++){
    let nrSet = [...rightAnswers[j]];
    let wordLocation = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
    let wordLocation2 = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
    while(wordLocation === wordLocation2 || wordLocation === 0 || wordLocation2 === 0){
      wordLocation = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
      wordLocation2 = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
    }
    [nrSet[wordLocation], nrSet[wordLocation2]] = [nrSet[wordLocation2], nrSet[wordLocation]];
    nearlyRight.push(nrSet);
  }
  return nearlyRight;
}

function makeKindaRight(rightAnswers){
  let kindaRight = [];
  for(let j = 0; j < 6; j++){
    let krSet = [...rightAnswers[j]];
    for(let i = 0; i < 2; i++){
      let wordLocation = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
      let wordLocation2 = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
      while(wordLocation === wordLocation2 || wordLocation === 0 || wordLocation2 === 0){
      wordLocation = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
      wordLocation2 = Math.abs(Math.ceil(Math.random()*rightAnswers[j].length-2));
      }
      [krSet[wordLocation], krSet[wordLocation2]] = [krSet[wordLocation2], krSet[wordLocation]];
    }
    kindaRight.push(krSet);
  }
  return kindaRight;
}

function makeVeryWrong(rightAnswers){
  let veryWrong = [];
  for(let j = 0; j < 6; j++){
      let vwSet = [...rightAnswers[j]];
      for(let i = 0; i < 3; i++){
        let wordLocation = Math.ceil(Math.random()*rightAnswers[j].length-1);
        let wordLocation2 = Math.ceil(Math.random()*rightAnswers[j].length-1);
        while(wordLocation === wordLocation2 || wordLocation === 0 || wordLocation2 === 0){
        wordLocation = Math.ceil(Math.random()*rightAnswers[j].length-1);
        wordLocation2 = Math.ceil(Math.random()*rightAnswers[j].length-1);
        }
        [vwSet[wordLocation], vwSet[wordLocation2]] = [vwSet[wordLocation2], vwSet[wordLocation]];
      }
      veryWrong.push(vwSet);
  }
  return veryWrong;
}

export default testReducer;
