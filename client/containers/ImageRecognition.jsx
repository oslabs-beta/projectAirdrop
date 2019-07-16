import React, { Component } from 'react';
import ImageRecognitionCMPT from '../components/ImageRecognitionCMPT.jsx'
import './../styles.css'
import WorkingMemoryCMPT from "../components/WorkingMemoryCMPT";

class ImageRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToNext: 2000,
      currentChoice: '',
      answers: {}
    };
    this.startPractice = this.startPractice.bind(this);
    this.startTest = this.startTest.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onPracticeHandler = this.onPracticeHandler.bind(this)
  }

  onChangeHandler(e, qid) {
    this.setState({
      currentChoice: e.target.value,
      answers: {
        ...this.state.answers,
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
    console.log(this.state.answers);
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

export default ImageRecognition
