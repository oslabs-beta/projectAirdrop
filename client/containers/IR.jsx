import React, { Component } from 'react';
import ImageRecognitionCMPT from '../components/ImageRecognitionCMPT.jsx'
import './../styles.css'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

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
      timeToNext: 5000,
      currentChoice: '',
      sectionData: {},
      sectionId: 'IR',
      answerTimeArray: [],
    };
    this.startPractice = this.startPractice.bind(this);
    this.startTest = this.startTest.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPracticeHandler = this.onPracticeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.optionReset = this.optionReset.bind(this);
    this.stateReset = this.stateReset.bind(this);

  }

  componentWillUnmount() {
    let subtractTime = this.state.timeToNext;
    let answerTimeArrayCopy = [...this.state.answerTimeArray];
    for (let i = 0; i < this.state.answerTimeArray.length; i += 1) {
      answerTimeArrayCopy[i] -= subtractTime;
      subtractTime += (this.state.timeToNext * 3)
    }
    const assessment = Object.keys(this.state.sectionData).reduce((a, b, i) => {
      const answer = {
        'aid': this.props.aid,
        'qid': b,
        'answer': this.state.sectionData[b],
        'timeTaken': answerTimeArrayCopy[i]
      };
      a.push(answer);
      return a
    }, []);
    console.log('assessment', assessment);

    this.props.postAnswers(this.state.sectionId, assessment);

    const irResponses = Object.keys(this.state.sectionData).reduce((a,b,c,d) => {
      a.push(this.state.sectionData[b]);
      return a;
    }, []);
    this.props.postResponses(irResponses);
  }

  onChangeHandler(e, qid) {
    this.setState({
      currentChoice: e.target.value,
      sectionData: {
        ...this.state.sectionData,
        [qid]: e.target.value
      }
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
    this.setState({
      // currentChoice: '',
      answerTimeArray: [
        ...this.state.answerTimeArray,
        this.state.timeElapsed
      ]
    })
  }

  optionReset () {
    this.setState({
      currentChoice: '',
    })
  }

  stateReset() {
    this.setState({
      answerTimeArray: [],
    })
  }

  startPractice() {
      this.props.changeSlide();
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.optionReset();
          this.props.changeSlide();
          resolve()
        }, this.state.timeToNext)
      }
    )
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
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
          }, this.state.timeToNext * 2)
        })
      })
  }

  startTest() {
    this.startTimer();
    this.props.changeSlide();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.optionReset();
          this.props.changeSlide();
          resolve()
        }, this.state.timeToNext)
      }
    )
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
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
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
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
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
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
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            this.optionReset();
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext)
        })
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
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
        <h1
          style={{
            position: 'absolute',
            left: '50%',
            top: '30%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          Image Recognition
        </h1>
        <ImageRecognitionCMPT
          IR={this.props.IR}
          changeSlide={this.props.changeSlide}
          currentSlide={this.props.currentSlide}
          changeSection={this.props.changeSection}
          startPractice={this.startPractice}
          startTest={this.startTest}
          onChangeHandler={this.onChangeHandler}
          currentChoice={this.state.currentChoice}
          onPracticeHandler={this.onPracticeHandler}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IR)
