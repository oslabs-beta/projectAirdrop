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