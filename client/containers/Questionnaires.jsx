import React, { Component } from 'react'
import QuestionnaireCMPT from './../components/QuestionnairesCMPT';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import SectionInstructions from '../components/SectionInstructions';
import QuestionnaireHeader from "../components/QuestionnaireHeader";
import UserSubmitBtn from "../components/UserSubmitBTN";
import { timingSafeEqual } from 'crypto';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const mapStateToProps = store => ({
	aid: store.answers.aid,
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
  postQuestionnaireResponses: (data) => dispatch(actions.questionnaireResponses(data)),
});


class Questionnaires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: '',
      CMSQ: null,
      CNAAQ: null,
      cmsqCurrentChoice: {},
      cnaaqCurrentChoice: {},
      sectionId: 'img/q',
      currentQuest: 0,
      toggled: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCMSQ = this.handleChangeCMSQ.bind(this);
    this.nextQuest = this.nextQuest.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){

    this.setState({
      ...this.state,
      instructions: this.props.test[3].instructions[0],
      CMSQ: this.props.test[3].questions,
      CNAAQ: this.props.test[4].questions
    })
  }
  componentWillUnmount() {
    const cmsq = Object.keys(this.state.cmsqCurrentChoice).reduce((a, b) => {
      const answer = {
        'aid': this.props.aid,
        'qid': b,
        'answer': Number(this.state.cmsqCurrentChoice[b])
      };
      a.push(answer);
      return a
    }, []);

    const cnaaq = Object.keys(this.state.cnaaqCurrentChoice).reduce((a, b) => {
      const answer = {
        'aid': this.props.aid,
        'qid': b,
        'answer': Number(this.state.cnaaqCurrentChoice[b])
      };
      a.push(answer);
      return a
    }, []);
    console.log('cmsq unmount', cmsq);
    console.log('cnaaq unmount', cnaaq);
    const questionnaireResponses = { ...cmsq, ...cnaaq};
    console.log('questionnaire assessment', questionnaireResponses)
    this.props.postAnswers(this.state.sectionId, questionnaireResponses);

    const cmsqResponses = Object.keys(this.state.cmsqCurrentChoice).reduce((a,b,c,d) => {
      a.push(this.state.cmsqCurrentChoice[b]);
      return a;
    }, []);
    const cnaaqResponses = Object.keys(this.state.cnaaqCurrentChoice).reduce((a,b,c,d) => {
      a.push(this.state.cnaaqCurrentChoice[b]);
      return a;
    }, []);
    this.props.postQuestionnaireResponses({
      cmsqResponses,
      cnaaqResponses,
    });
    console.log('testing keys', Object.keys(this.state.cmsqCurrentChoice))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuest !== this.state.currentQuest) {
      console.log('testing component did update')
      window.scrollTo(0, 0)
    }
  }

  handleChange(e, qid) {
    this.setState({
      cnaaqCurrentChoice: {
      ...this.state.cnaaqCurrentChoice,
        [qid]: e.target.value,
      },
    });
  }

  handleChangeCMSQ(e, qid) {
    this.setState({
      cmsqCurrentChoice: {
      ...this.state.cmsqCurrentChoice,
        [qid]: e.target.value,
      },
    });
  }

  nextQuest() {
    
    this.setState({
      currentQuest: this.state.currentQuest + 1,
    });
  };

  handleClose() {
    this.setState({
      toggled: !this.state.toggled,
    })
  }


  onSubmit (e) {
    console.log('did it get here?')
    e.preventDefault(e);
    if (this.state.currentQuest === 1 && Object.keys(this.state.cmsqCurrentChoice).length === 20) {
      this.props.changeSection()
    } else if (this.state.currentQuest === 1) {
      this.setState({
        toggled: !this.state.toggled
      })
    } else {
      console.log('did it get here tho?')
      if(Object.keys(this.state.cnaaqCurrentChoice).length === 12){
      console.log('did it get here tho? what about here?')
      console.log(this.state.cnaaqCurrentChoice.length)
        this.setState({
          currentQuest: this.state.currentQuest + 1,
        }) 
      } else {
          this.setState({
            toggled: !this.state.toggled
          })
        }
      }
    }
    
  // }

  render() {
    console.log('CNAAQ STATE', this.state.cnaaqCurrentChoice);
    console.log('CMSQ STATE',this.state.cmsqCurrentChoice);
    const questionnaireRend = [
    <QuestionnaireCMPT
      sectionName={this.props.test[4].section_display_name}
      questions={this.state.CNAAQ}
      handleChange={this.handleChange}
      // cnaaqAnswers={this.state.cnaaqAnswers}
      cnaaqCurrentChoice={this.state.cnaaqCurrentChoice}
      nextQuest={this.nextQuest}
      onSubmit={this.onSubmit}
      />,
      <QuestionnaireCMPT
      sectionName={this.props.test[3].section_display_name}
      questions={this.state.CMSQ}
      handleChange={this.handleChangeCMSQ}
      // cmsqAnswers={this.state.cmsqAnswers}
      cmsqCurrentChoice={this.state.cmsqCurrentChoice}
      onSubmit={this.onSubmit}
      />
    ]
    return (
      <div>
        {/* <QuestionnaireHeader sectionName={this.props.test[4].section_display_name}/> */}
        <br />
        <br />
        <SectionInstructions instructions={this.state.instructions.instruction_text}/>

        {/* {this.state.CNAAQ &&
        <QuestionnaireCMPT
        questions={this.state.CNAAQ}
        handleChange={this.handleChange}
        // cnaaqAnswers={this.state.cnaaqAnswers}
        cnaaqCurrentChoice={this.state.cnaaqCurrentChoice}

        />}

        <QuestionnaireHeader sectionName={this.props.test[3].section_display_name}/>

        {this.state.CMSQ &&
        <QuestionnaireCMPT
        questions={this.state.CMSQ}
        handleChange={this.handleChangeCMSQ}
        // cmsqAnswers={this.state.cmsqAnswers}
        cmsqCurrentChoice={this.state.cmsqCurrentChoice}
        submit={this.onSubmit}
        />} */}
      { this.state.toggled ?
      (
      <Dialog
        open={this.state.toggled}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"It looks like some of the questions were not answered."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please complete every item in the questionnaire before submitting.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      )
      :
      null}
        {this.state.CNAAQ && questionnaireRend[this.state.currentQuest]}
        {/* <UserSubmitBtn onSubmit={this.onSubmit}/> */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaires);
//  {/* {this.state.CMSQ && <QuestionnaireCMPT addVal={this.addVal} questions={this.state.CMSQ} />} */}
//         {/* {this.state.CNAAQ && <QuestionnaireCMPT addVal={this.addVal} questions={this.state.CNAAQ} />} */}
//         {/* {this.state.CMSQ && <QuestionnaireCMPT questions={this.state.CMSQ} />} */}
        // {/* <h2>q1{this.state.cnaaqAnswers[1]}</h2> */}
        // {/* <h2>q2{this.state.cnaaqAnswers[2]}</h2> */}
        // {/* <h2>q3{this.state.cnaaqAnswers[3]}</h2> */}
        // {/* <h2>q4{this.state.cnaaqAnswers[12]}</h2> */}
// •	Items 2, 5, 8 averaged for the LEARN dimension
// •	Items 6, 9, 12 averaged for the IMPROVE dimension
// •	Items 1, 3, 10 averaged for the STABLE dimension
// •	Items 4, 7, 11 averaged for the GIFT dimension
// •	LEARN mean + IMPROVE mean = INCREMENTAL
// •	STABLE mean + GIFT mean = ENTITY

// Competitive Motivational Styles Questionnaire

// Gillham, E., Gillham, A. D., & Burton, D. (2013). Competitive motivational styles questionnaire (CSMQ): Development and preliminary validation. Manuscript in preparation.

// 20 item instrument:
// •	Items 1, 5, 11, 15, 18 averaged for the DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER dimension
