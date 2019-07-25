import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserResultsCMPT from '../components/UserResultsCMPT.jsx'

const mapStateToProps = store => ({
  ltvr: store.answers.ltvr,
  vps: store.answers.vps,
  wm: store.answers.wm,
  ir: store.answers.ir,
  cmsq: store.answers.cmsq,
  cnaaq: store.answers.cnaaq
})

class UserResults extends Component {
  constructor(props){
    super(props);

  }
  
  render(){
    console.log('props cmsq', this.props.cnaaq)
    const cnaaq = this.props.cnaaq.responses.reduce((a,b,c,d) => {
      c = c+1;
      console.log('testing c', c)
      if (c === 1 || c === 2 || c === 10) {
        a.STABLE += Number(b);
      };
      if (c === 2 || c === 5 || c === 8) {
        a.LEARN += Number(b);
      };
      if (c === 4 || c === 7 || c === 11) {
        a.GIFT += Number(b);
      };
      if (c === 6 || c === 9 || c === 12) {
        a.IMPROVE += Number(b)
      };
      if (c === 12) {
        a.STABLE = a.STABLE / 3;
        a.LEARN = a.LEARN / 3;
        a.GIFT = a.GIFT / 3
        a.IMPROVE = a.IMPROVE / 3;
        a.INCREMENTAL += Math.floor((a.IMPROVE + a.LEARN));
        a.ENTITY += Math.floor((a.STABLE + a.GIFT));
        a.IMPROVE = Math.floor(a.IMPROVE);
        a.GIFT = Math.floor(a.GIFT);
        a.LEARN = Math.floor(a.LEARN);
        a.STABLE = Math.floor(a.STABLE);
      }
      return a;
    }, {
      LEARN: 0,
      IMPROVE: 0,
      STABLE: 0,
      GIFT: 0,
      INCREMENTAL: 0,
      ENTITY: 0,
    });
    const cmsq = this.props.cmsq.responses.reduce((a,b,c,d) => {
      c = c + 1;
      if (c === 1 || c === 5 || c === 11 || c === 15 || c === 18) {
        a.DF += Number(b);
      };
      if (c === 4 || c === 7 || c === 9 || c === 19) {
        a.WF += Number(b);
      };
      if (c === 2 || c === 6 || c === 10 || c === 12 || c === 14 || c === 16) {
        a.DO += Number(b);
      };
      if (c === 3 || c === 8 || c === 13 || c === 17 || c === 20) {
        a.FE += Number(b);
      }
      if (c === 20) {
        a.DF = Math.floor(a.DF / 5);
        a.WF = Math.floor(a.WF / 4);
        a.DO = Math.floor(a.DO / 6);
        a.FE = Math.floor(a.FE / 5);
      }
      return a;
    }, {
      DF: 0,
      WF: 0,
      DO: 0,
      FE: 0,
    })
//     •	Items 1, 5, 11, 15, 18 averaged for the DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER dimension

    console.log('testing output', cnaaq)
    console.log('testing output', cmsq)

    return (
      <div>
        <UserResultsCMPT 
        ltvr={this.props.ltvr}
        vps={this.props.vps}
        wm={this.props.wm}
        ir={this.props.ir}
        cmsq={this.props.cmsq}
        cnaaq={this.props.cnaaq}
        />

      </div>
    )
  }
}

export default connect(mapStateToProps)(UserResults);

// •	Items 2, 5, 8 averaged for the LEARN dimension
// •	Items 6, 9, 12 averaged for the IMPROVE dimension
// •	Items 1, 3, 10 averaged for the STABLE dimension
// •	Items 4, 7, 11 averaged for the GIFT dimension
// •	LEARN mean + IMPROVE mean = INCREMENTAL
// •	STABLE mean + GIFT mean = ENTITY 
