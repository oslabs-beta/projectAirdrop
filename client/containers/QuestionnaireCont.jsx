import React, { Component } from 'react'
import QuestionnaireCMPT from './../components/QuestionnairesCMPT';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import UserSubmitBtn from "../components/UserSubmitBTN";

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment))
});


class QuestionnaireCont extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instructions: '',
      CMSQ: null,
      CNAAQ: null,
      // cnaaqOptions: {
      //   SD: 'Strongly Disagree',
      //   D: 'Disagree',
      //   N: 'Neutral',
      //   A: 'Agree',
      //   SA: 'Strongly Agree'
      // },
      cmsqCurrentChoice: {


      },
      // cmsqAnswers: {},
      cnaaqCurrentChoice: {

      },
    }
    // this.addVal = this.addVal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCMSQ = this.handleChangeCMSQ.bind(this);
  }

// const cnaaqOptions = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
// const cmsqOptions = ['Strongly Disagree', 'Disagree', 'Mostly Disagree', 'Mostly Agree', 'Agree', 'Strongly Agree'];

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
        'aid': 1,
        'qid': b,
        'answer': Number(this.state.cmsqCurrentChoice[b])
      };
      a.push(answer);
      return a
    }, []);

    const cnaaq = Object.keys(this.state.cnaaqCurrentChoice).reduce((a, b) => {
      const answer = {
        'aid': 1,
        'qid': b,
        'answer': Number(this.state.cnaaqCurrentChoice[b])
      };
      a.push(answer);
      return a
    }, []);
    console.log('cmsq', cmsq)
    console.log('cnaaq', cnaaq)
    const questionnaireResponses = { ...cmsq, ...cnaaq};
    this.props.postAnswers(questionnaireResponses, this.state.sectionId)
  }

  handleChange(e, qid) {
    const name = e.target.name;
    const value = e.target.value;
    // console.log('handlechange', name, value, id)
    // console.log('check state', 'state cnaaq id', typeof this.state.cnaaqCurrentChoice[id][qid], typeof e.target.value);
    this.setState({
      cnaaqCurrentChoice: {
      ...this.state.cnaaqCurrentChoice,
        [qid]: e.target.value,
    },

    });
  }

  handleChangeCMSQ(e, qid) {
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log('handlechange', name, value, id)
    // console.log('check state', 'state cnaaq id', this.state.cnaaqCurrentChoice[id], 'e.target.val', e.target.value)
    this.setState({
      cmsqCurrentChoice: {
      ...this.state.cmsqCurrentChoice,
        [qid]: e.target.value,
    },

    });
  }

  onSubmit (e) {
    this.props.changeSection()
  }
  render() {
    console.log('testing state',this.state.cmsqCurrentChoice);
    // console.log('state', this.state.cnaaqAnswers)
    return (
      <div>
        {this.state.instructions.instruction_text}

        {this.state.CNAAQ &&
        <QuestionnaireCMPT
        questions={this.state.CNAAQ}
        handleChange={this.handleChange}
        cnaaqAnswers={this.state.cnaaqAnswers}
        cnaaqCurrentChoice={this.state.cnaaqCurrentChoice}
        />}
        {this.state.CMSQ &&
        <QuestionnaireCMPT
        questions={this.state.CMSQ}
        handleChange={this.handleChangeCMSQ}
        cmsqAnswers={this.state.cmsqAnswers}
        cmsqCurrentChoice={this.state.cmsqCurrentChoice}
        />}
        <button onClick={this.onSubmit}>Submit</button>
        {/*<UserSubmitBtn onSubmit={this.onSubmit}/>*/}
      </div>
    )
  }
};

export default connect(null, mapDispatchToProps)(QuestionnaireCont);
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
