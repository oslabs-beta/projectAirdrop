import React, { Component } from 'react';
import WorkingMemoryCMPT from '../components/WorkingMemoryCMPT.jsx'
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment))
});

class WorkingMemory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToNext: 3000,
      currentChoice: '',
      sectionData: {},
      sectionId: 'WM'
    };
    this.startPractice = this.startPractice.bind(this);
    this.startTest = this.startTest.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPracticeHandler = this.onPracticeHandler.bind(this)
  }

  componentWillUnmount() {
    const assessment = Object.keys(this.state.sectionData).reduce((a, b) => {
      const answer = {
        'aid': 1,
        'qid': b,
        'answer': this.state.sectionData[b]
      };
      a.push(answer);
      return a
    }, []);

    this.props.postAnswers(this.state.sectionId, assessment)
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
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
  }

  startTest() {
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
            this.props.changeSlide();
            resolve()
          }, 5000)
        })
      })
  }

  render() {
    console.log(this.state.sectionId, this.state.sectionData);
    return (
      <WorkingMemoryCMPT
        WM={this.props.WM}
        changeSlide={this.props.changeSlide}
        currentSlide={this.props.currentSlide}
        changeSection={this.props.changeSection}
        startPractice={this.startPractice}
        startTest={this.startTest}
        onChangeHandler={this.onChangeHandler}
        currentChoice={this.state.currentChoice}
        onPracticeHandler={this.onPracticeHandler}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(WorkingMemory)
