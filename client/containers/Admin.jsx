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
      sectionSuggestions: [{ label: 'Long Term Verbal Recall' }, { label:'Visual Processing Speed' }, { label: 'Working Memory' }, { label: 'Image Recognition' }, { label: 'Psychological Questionnaires' }],
      columnSuggestions: [{label: 'User ID'}, {label: 'Rank'}, {label: 'Years in Service'}, {label: "ODA"}, {label: 'MOS'}],
      valueSuggestions: {
        rank: [{label: 'SGT'}, {label: 'SSG'}, {label: 'SFC'}, {label: 'MSG'}, {label: '1SG'}, {label: 'SGM'}, {label: 'CPT'}, {label: 'MAJ'}, {label: 'LTCOL'}, {label: 'COL'}],
        mos: [{label: '18A'}, {label: '180A'}, {label: '18B'}, {label: '18C'}, {label: '18D'}, {label: '18E'}, {label: '18F'}, {label: '18Z'}],
        years: [{label: '<2'}, {label: '3-6'}, {label: '7-10'}, {label: '11-15'}, {label: '16-20'}, {label: '20+'}]
      },
      displayColumnField: false,
      displayValueField: false,
      tables: [],
      columns: [],
      values: [],
      chips: [],
    }
    this.updateTable = this.updateTable.bind(this);
    this.updateColumns = this.updateColumns.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
  }

  updateTable(val) {
    this.setState({
      tables: [...val]
    })
  }

  updateColumns(val){
    this.setState({
      columns: [...val],
      displayValueField: true,
    })
  }

  updateValues(val){
    this.setState({
      values: [...val],
      displayColumnField: false,
      displayValueField: false,
    })
  }

  addFilter(){
    this.setState({
      displayColumnField: true
    })
  }

  removeFilter(target){
    this.setState({
      columns: [...this.state.columns].splice(target, 1),
      values: [...this.state.values].splice(target, 1),
      chips: [...this.state.chips].splice(target, 1)
    })
  }

  render() {
    return (
      <div>
        <button> Get Results </button>
        <h1>Hi</h1>
        <AdminQueryFilterCMPT 
        changeHandler={this.props.changeHandler}
        sectionSuggestions={this.state.sectionSuggestions}
        columnSuggestions={this.state.columnSuggestions}
        currentColumn={this.state.columns[this.state.columns.length - 1]}
        valueSuggestions={this.state.valueSuggestions}
        displayColumnField={this.state.displayColumnField}
        displayValueField={this.state.displayValueField}
        updateTable={this.updateTable}
        updateColumns={this.updateColumns}
        addFilter={this.addFilter}
        removeFilter={this.removeFilter}
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
