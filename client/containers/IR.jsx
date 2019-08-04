import React, { Component } from 'react';
import ImageRecognitionCMPT from '../components/ImageRecognitionCMPT.jsx'
import './../styles.css'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import SectionHeader from "../components/SectionHeader";
import WorkingMemoryCMPT from "../components/WorkingMemoryCMPT";

const mapStateToProps = store => ({
  apiStatus: store.answers.apiStatus,
  apiError: store.answers.apiError,
  aid: store.answers.aid,
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
  postResponses: data => dispatch(actions.irResponses(data)),
});


class IR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
      timeToNext: 2000,
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
    for (let i = 0; i < this.props.IR.images.length; i += 1) {
      this.state.choiceArray.push(this.props.IR.images[i].questions[0].choices[0].id)
    }
  }

  componentWillUnmount() {
    let subtractTime = this.state.timeToNext;
    let answerTimeArrayCopy = [...this.state.answerTimeArray];
    for (let i = 0; i < this.state.answerTimeArray.length; i += 1) {
      answerTimeArrayCopy[i] -= subtractTime;
      subtractTime += (this.state.timeToNext * 3)
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
    console.log('ir assessment', assessment);

    this.props.postAnswers(this.state.sectionId, assessment);

    const irResponses = Object.keys(this.state.sectionData).reduce((a,b,c,d) => {
      a.push(this.state.sectionData[b]);
      return a;
    }, []);
    this.props.postResponses(irResponses);
  }

  updateChoice(e, cid) {
    this.setState({
      currentChoice: e.target.value,
      sectionData: {
        ...this.state.sectionData,
        [cid]: e.target.value
      },
      isChecked: true
    })
  }

  onPracticeHandler(e) {
    this.setState({
      currentChoice: e.target.value
    })
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.setState({
        timeElapsed: this.state.timeElapsed + 100
      })
    }, 100);
  }

  onSubmit() {
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

  optionReset () {
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
          [this.props.IR.images[this.state.currentIndex].questions[0].id]: null
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
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
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
            this.stateReset();
            resolve()
          }, this.state.timeToNext * 2)
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
            this.autoSubmit();
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
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
          }, this.state.timeToNext * 2)
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
          }, this.state.timeToNext * 2)
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
          }, this.state.timeToNext * 2)
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
          }, this.state.timeToNext * 2)
        })
      })
  }

  render() {
    console.log('IR TIME ARRAY', this.state.answerTimeArray);
    console.log('IR SECTION DATA', this.state.sectionData);
    return (
      <div>
        <SectionHeader sectionName={this.props.IR.section_display_name}/>
        <ImageRecognitionCMPT
          IR={this.props.IR}
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

export default connect(mapStateToProps, mapDispatchToProps)(IR)
