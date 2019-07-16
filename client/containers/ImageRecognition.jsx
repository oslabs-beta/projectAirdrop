import React, { Component } from 'react';
import ImageRecognitionCMPT from '../components/ImageRecognitionCMPT.jsx'
import './../styles.css'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  apiStatus: store.answers.apiStatus,
  apiError: store.answers.apiError,
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment))
});


class ImageRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToNext: 500,
      currentChoice: '',
      sectionData: {},
      sectionId: 'IR'
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
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
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
            this.props.changeSlide();
            resolve()
          }, this.state.timeToNext * 2)
        })
      })
  }

  render() {
    console.log(this.props.apiStatus);
    console.log(this.props.apiError);
    console.log(this.state.sectionId, this.state.sectionData);
    return (
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
    />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageRecognition)
