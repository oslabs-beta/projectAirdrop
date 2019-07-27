import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserResultsCMPT from '../components/UserResultsCMPT.jsx';
import UserInfo from '../components/UserInfo';

const mapStateToProps = store => ({
  ltvr: store.answers.ltvr,
  vps: store.answers.vps,
  wm: store.answers.wm,
  ir: store.answers.ir,
  cmsq: store.answers.cmsq,
  cnaaq: store.answers.cnaaq,
  userData: store.userData.userData,
})

class UserResults extends Component {
  constructor(props){
    super(props);

  }
  
  render(){
    console.log('props cmsq', this.props.cnaaq)
    // const cnaaq = this.props.cnaaq.responses.reduce((a,b,c,d) => {
    //   c = c+1;
    //   console.log('testing c', c)
    //   if (c === 1 || c === 2 || c === 10) {
    //     a.STABLE += Number(b);
    //   };
    //   if (c === 2 || c === 5 || c === 8) {
    //     a.LEARN += Number(b);
    //   };
    //   if (c === 4 || c === 7 || c === 11) {
    //     a.GIFT += Number(b);
    //   };
    //   if (c === 6 || c === 9 || c === 12) {
    //     a.IMPROVE += Number(b)
    //   };
    //   if (c === 12) {
    //     a.STABLE = a.STABLE / 3;
    //     a.LEARN = a.LEARN / 3;
    //     a.GIFT = a.GIFT / 3;
    //     a.IMPROVE = a.IMPROVE / 3;
    //     a.INCREMENTAL += Number((a.IMPROVE + a.LEARN).toFixed(2));
    //     a.ENTITY += Number((a.STABLE + a.GIFT).toFixed(2));
    //     a.IMPROVE = Number(a.IMPROVE.toFixed(2));
    //     a.GIFT = Number(a.GIFT.toFixed(2));
    //     a.LEARN = Number(a.LEARN.toFixed(2));
    //     a.STABLE = Number(a.STABLE.toFixed(2));
    //   }
    //   return a;
    // }, {
    //   LEARN: 0,
    //   IMPROVE: 0,
    //   STABLE: 0,
    //   GIFT: 0,
    //   INCREMENTAL: 0,
    //   ENTITY: 0,
    // });
    // const cmsq = this.props.cmsq.responses.reduce((a,b,c,d) => {
    //   c = c + 1;
    //   if (c === 1 || c === 5 || c === 11 || c === 15 || c === 18) {
    //     a.DF += Number(b);
    //   };
    //   if (c === 4 || c === 7 || c === 9 || c === 19) {
    //     a.WF += Number(b);
    //   };
    //   if (c === 2 || c === 6 || c === 10 || c === 12 || c === 14 || c === 16) {
    //     a.DO += Number(b);
    //   };
    //   if (c === 3 || c === 8 || c === 13 || c === 17 || c === 20) {
    //     a.FE += Number(b);
    //   }
    //   if (c === 20) {
    //     a.DF = Number((a.DF / 5).toFixed(2));
    //     a.WF = Number((a.WF / 4).toFixed(2));
    //     a.DO = Number((a.DO / 6).toFixed(2));
    //     a.FE = Number((a.FE / 5).toFixed(2));
    //   }
    //   return a;
    // }, {
    //   DF: 0,
    //   WF: 0,
    //   DO: 0,
    //   FE: 0,
    // })
//     •	Items 1, 5, 11, 15, 18 averaged for the DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER dimension

    console.log('testing output', this.props.cnaaq)
    console.log('testing output', this.props.cmsq)
    // console.log('testing output', cmsq)
    console.log('testing output', this.props.ltvr)
    console.log('testing output', this.props.vps)
    console.log('testing output wm', this.props.wm)
    console.log('testing output ir', this.props.ir)
    console.log('testing output', this.props.userData)


    return (
      <div>
        <UserInfo 
        firstName={this.props.userData.firstName}
        lastName={this.props.userData.lastName}
        middleInitial={this.props.userData.middleInitial}
        rank={this.props.userData.rank}
        yearsInService={this.props.userData.yearsInService}
        yearsInSpecialOps={this.props.userData.yearsInSpecialOps}
        MOS={this.props.userData.MOS}
        dateOfAssessment={this.props.userData.dateOfAssessment}
        />
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
