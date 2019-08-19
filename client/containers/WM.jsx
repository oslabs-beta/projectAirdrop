import React, { Component } from 'react';
import WorkingMemoryCMPT from '../components/WorkingMemoryCMPT.jsx'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SectionHeader from "../components/SectionHeader";
import VisualProcessingSpeedCMPT from "../components/VisualProcessingSpeedCMPT";

const mapStateToProps = store => ({
	aid: store.answers.aid,
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
  postResponses: data => dispatch(actions.wmResponses(data)),
});

class WM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
      timeToNext: 3000,
      currentChoice: '',
      sectionData: {},
      sectionId: 'img',
      answerTimeArray: [],
      choiceArray: [],
      submitted: false,
      isChecked: false,
      submitError: '',
      currentIndex: 0,
      disabled: false
    };
    this.startPractice = this.startPractice.bind(this);
    this.startTest = this.startTest.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
    this.onPracticeHandler = this.onPracticeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.optionReset = this.optionReset.bind(this);
    this.stateReset = this.stateReset.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < this.props.WM.images.length - 1; i += 1) {
      this.state.choiceArray.push(this.props.WM.images[i].questions[0].choices[0].id)
    }
  }

  componentWillUnmount() {
    let subtractTime = this.state.timeToNext * 2;
    let answerTimeArrayCopy = [...this.state.answerTimeArray];
    for (let i = 0; i < this.state.answerTimeArray.length; i += 1) {
      answerTimeArrayCopy[i] -= subtractTime;
      subtractTime += 8000
    }
    const assessment = this.state.choiceArray.reduce((a, b, i) => {
      const answer = {
        'aid': this.props.aid,
        'cid': b,
        'answer': this.state.sectionData[b],
        'timeTaken': answerTimeArrayCopy[i]
      };
      a.push(answer);
      return a
    }, []);
    console.log('WM assessment', assessment);

    this.props.postAnswers(this.state.sectionId, assessment)

    const wmResponses = this.state.choiceArray.reduce((a,b,c,d) => {
      a.push(this.state.sectionData[b]);
      return a;
    }, []);
    this.props.postResponses(wmResponses);
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: this.state.timeElapsed + 100
      })
    }, 100);
  }

  onSubmit() {
    console.log(this.state.isChecked, "Checked?")
    if (this.state.isChecked) {
      this.setState({
        answerTimeArray: [
          ...this.state.answerTimeArray,
          this.state.timeElapsed
        ],
        submitted: true,
        submitError: '',
        disabled: true
      })
    } else {
      this.setState({
        submitError: 'Please select an answer before submitting.'
      })
    }
  }

  updateChoice(e, cid) {
    this.setState({
      isChecked: true,
      currentChoice: e.target.value,
      sectionData: {
        ...this.state.sectionData,
        [cid]: e.target.value
      }
    })
  }

  onPracticeHandler(e) {
    this.setState({
      currentChoice: e.target.value
    })
  }

  optionReset () {
    console.log('option reset');
    this.setState({
      currentChoice: '',
      submitted: false,
      isChecked: false,
      submitError: '',
      currentIndex: this.state.currentIndex += 1,
      disabled: false
    })
  }

  autoSubmit() {
    if (this.state.isChecked && !this.state.submitted) {
      this.setState({
        answerTimeArray: [
          ...this.state.answerTimeArray,
          Math.floor(this.state.timeElapsed / 1000) * 1000
        ],
      })
    }
    if (!this.state.isChecked && !this.state.submitted) {
      this.setState({
        answerTimeArray: [
          ...this.state.answerTimeArray,
          Math.floor(this.state.timeElapsed / 1000) * 1000
        ],
        sectionData: {
          ...this.state.sectionData,
          [this.props.WM.images[this.state.currentIndex].questions[0].id]: null
        }
      })
    }
  }

  stateReset() {
    this.setState({
      answerTimeArray: [],
      sectionData: {},
      currentIndex: 0
    })
  }

  startPractice() {
    this.props.changeSlide();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.props.changeSlide();
          resolve()
        }, this.state.timeToNext)
      }
    )
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
            this.props.changeSlide();
            this.stateReset();
            resolve()
          }, 5000)
        })
      })
  }

  startTest() {
    this.startTimer();
    this.props.changeSlide();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.props.changeSlide();
          resolve()
        }, this.state.timeToNext)
      }
    )
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.autoSubmit();
            this.optionReset();
            clearInterval(this.interval);
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
  }

  render() {
    console.log('WM TIME ARRAY', this.state.answerTimeArray);
    console.log('WM SECTION DATA', this.state.sectionData);
    console.log('WM CHOICE ARRAY', this.state.choiceArray);
    return (
      <div>
        <SectionHeader sectionName={this.props.WM.section_display_name}/>
        <WorkingMemoryCMPT
          WM={this.props.WM}
          changeSlide={this.props.changeSlide}
          currentSlide={this.props.currentSlide}
          changeSection={this.props.changeSection}
          startPractice={this.startPractice}
          startTest={this.startTest}
          updateChoice={this.updateChoice}
          currentChoice={this.state.currentChoice}
          onSubmit={this.onSubmit}
          submitted={this.state.submitted}
          submitError={this.state.submitError}
          disabled={this.state.disabled}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WM)
