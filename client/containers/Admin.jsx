// test results view for Admin

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import AdminResultsCMPT from "../components/AdminResultsCMPT";
import AdminQueryFilterCMPT from "../components/AdminQueryFilterCMPT";
const mapStateToProps = store => ({
  ltvr: store.answers.ltvr,
  vps: store.answers.vps,
  wm: store.answers.wm,
  ir: store.answers.ir,
  cmsq: store.answers.cmsq,
  cnaaq: store.answers.cnaaq,
  means: store.answers
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  
});
class AdminView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: [{ label: 'Long Term Verbal Recall' }, { label:'Visual Processing Speed' }, { label: 'Working Memory' }, { label: 'Image Recognition' }, { label: 'Psychological Questionnaires' }],
      tables: [],
    }
    this.updateTable = this.updateTable.bind(this);
  }

  updateTable(val) {
    this.setState({
      tables: [...val]
    })
  }

  render() {
    console.log('Please update the table?', this.state.tables)
    return (
      <div>
        <button> Get Results </button>
        <h1>Hi</h1>
        <AdminQueryFilterCMPT 
        changeHandler={this.props.changeHandler}
        suggestions={this.state.suggestions}
        updateTable={this.updateTable}
        />
        <AdminResultsCMPT
          ltvr={this.props.ltvr}
          vps={this.props.vps}
          wm={this.props.wm}
          ir={this.props.ir}
          cmsq={this.props.cmsq}
          cnaaq={this.props.cnaaq}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
