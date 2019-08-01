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
  means: store.answers,
})

class UserResults extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  };

  render(){
    console.log('props cnaaq', this.props.cnaaq)
    console.log('props cmsq', this.props.cmsq)
    console.log('testing means', this.props.means)

    console.log('testing output', this.props.cnaaq)
    console.log('testing output', this.props.cmsq)
    // console.log('testing output', cmsq)
    console.log('testing output', this.props.ltvr)
    console.log('testing output vps', this.props.vps)
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
        // chartData={this.state.chartData}
        // ltvrData={ltvrData}
        // ltvrOptions={ltvrOptions}
        // vpsData={vpsData}
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
