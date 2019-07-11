import React, { Component } from 'react'
import QuestionnaireCMPT from './../components/QuestionnairesCMPT';

export default class QuestionnaireCont extends Component {
  constructor(props) {
    super(props)
    this.state = {
      instructions: '',
      CMSQ: null,
      CNAAQ: null,
      scores: {
        CNAAQ: {
          learn: [],
          improve: [],
          stable: [],
          gift: [],
        } 
      },
      questions: [],
    }
    this.addVal = this.addVal.bind(this);
  }
  

  componentDidMount(){
    this.setState({
      ...this.state,
      instructions: this.props.test[3].instructions[0],
      CMSQ: this.props.test[3].questions,
      CNAAQ: this.props.test[4].questions
    })
  }

  addVal (e) {
    const name = e.target.name;
    const value = e.target.value;
    
  }


  render() {

    console.log('state', this.state)
    return (
      <div>
        {this.state.instructions.instruction_text}
        {this.state.CMSQ && <QuestionnaireCMPT questions={this.state.CMSQ} />}
        {this.state.CNAAQ && <QuestionnaireCMPT questions={this.state.CNAAQ} />}
      </div>
    )
  }
};


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
