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
          learn: 0,
          improve: 0,
          stable: 0,
          gift: 0,
        },
        CMSQ: {
          DF: 0,
          WF: 0,
          DO: 0,
          FE: 0,
        } 
      },
    }
    this.addVal = this.addVal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  

  componentDidMount(){
    this.setState({
      ...this.state,
      instructions: this.props.test[3].instructions[0],
      CMSQ: this.props.test[3].questions,
      CNAAQ: this.props.test[4].questions
    })
  }

  addVal (e, id, questionnaire) {
    const name = e.target.name;
    const value = e.target.value;
    console.log('testing', value, name, id, questionnaire);
    if(questionnaire === 'CNAAQ') {
      if (id === 2 || id === 5 || id === 8) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CNAAQ: {
              ...this.state.scores.CNAAQ,
              learn: this.state.scores.CNAAQ.learn + Number(value),
            }
          }
        })
      } else if (id === 6 || id === 9 || id === 12) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CNAAQ: {
              ...this.state.scores.CNAAQ,
              improve: this.state.scores.CNAAQ.improve + Number(value),
            }
          }
        })
      } else if (id === 1 || id === 3 || id === 10) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CNAAQ: {
              ...this.state.scores.CNAAQ,
              stable: this.state.scores.CNAAQ.stable + Number(value),
            }
          }
        })
      } else if (id === 4 || id === 7 || id === 11) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CNAAQ: {
              ...this.state.scores.CNAAQ,
              gift: this.state.scores.CNAAQ.gift + Number(value),
            }
          }
        })
      }

    } else {

      if (id === 1 || id === 5 || id === 11 || id === 15 || id === 18) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CMSQ: {
              ...this.state.scores.CMSQ,
              DF: this.state.scores.CMSQ.DF + Number(value),
            }
          }
        })
      } else if (id === 4 || id === 7 || id === 9 || id === 19) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CMSQ: {
              ...this.state.scores.CMSQ,
              WF: this.state.scores.CMSQ.WF + Number(value),
            }
          }
        })
      } else if (id === 2 || id === 6 || id === 10 || id === 12 || id === 14 || id === 16) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CMSQ: {
              ...this.state.scores.CMSQ,
              DO: this.state.scores.CMSQ.DO + Number(value),
            }
          }
        })
      } else if (id === 3 || id === 8 || id === 13 || id === 17 || id === 20) {
        this.setState({
          ...this.state,
          scores: {
            ...this.state.scores,
            CMSQ: {
              ...this.state.scores.CMSQ,
              FE: this.state.scores.CMSQ.FE + Number(value),
            }
          }
        })
      } 
    }
  }

  onSubmit (e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {

    // console.log('state', this.state)
    return (
      <div>
        {this.state.instructions.instruction_text}
        {this.state.CMSQ && <QuestionnaireCMPT addVal={this.addVal} questions={this.state.CMSQ} />}
        {this.state.CNAAQ && <QuestionnaireCMPT addVal={this.addVal} questions={this.state.CNAAQ} />}
        <button onClick={this.onSubmit}>Submit</button>
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
