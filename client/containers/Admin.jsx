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
  fetchMeans: (data) => dispatch(actions.fetchMeans(data)),
});

class AdminView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionSuggestions: [{ label: 'Long Term Verbal Recall' }, { label:'Visual Processing Speed' }, { label: 'Working Memory' }, { label: 'Image Recognition' }, { label: 'Psychological Questionnaires' }, {label: "All"}],
      columnSuggestions: [{label: 'User ID'}, {label: 'Rank'}, {label: 'Years in Service'}, {label: "ODA"}, {label: 'MOS'}],
      valueSuggestions: {
        rank: [{label: 'SGT'}, {label: 'SSG'}, {label: 'SFC'}, {label: 'MSG'}, {label: '1SG'}, {label: 'SGM'}, {label: 'CPT'}, {label: 'MAJ'}, {label: 'LTCOL'}, {label: 'COL'}],
        mos: [{label: '18A'}, {label: '180A'}, {label: '18B'}, {label: '18C'}, {label: '18D'}, {label: '18E'}, {label: '18F'}, {label: '18Z'}],
        years: [{label: '<2'}, {label: '3-6'}, {label: '7-10'}, {label: '11-15'}, {label: '16-20'}, {label: '20+'}]
      },
      columnToAdd: null,
      displayColumnField: false,
      displayValueField: false,
      tables: [],
      columns: [],
      values: [],
      chips: {},
    }
    this.updateTable = this.updateTable.bind(this);
    this.updateColumns = this.updateColumns.bind(this);
    this.updateValues = this.updateValues.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.addChip = this.addChip.bind(this);
    this.fireQuery = this.fireQuery.bind(this);
  }

  fireQuery(){
    let queryObj = {
      section: "",
      column: [],
      value: [],
      test: "test"
    };
    for(let i = 0; i < this.state.tables.length; i++){
      switch(this.state.tables[i]){
        case "Long Term Verbal Recall":
          queryObj.section = "ltvr";
          break;
        case "Visual Processing Speed":
          queryObj.section = "vps";
          break;
        case "Working Memory":
          queryObj.section = "wm";
          break;
        case "Image Recognition":
          queryObj.section = "ir";
          break;
        case "Psychological Questionnaires":
          queryObj.section = "q";
          break;
        case "All":
          queryObj.section = "all";
          break;
      }
      for(let j = 0; j < this.state.columns.length; j++){
        switch(this.state.columns[j]){
          case 'User ID':
            queryObj.column.push("user_id");
            break;
          case 'Rank':
            queryObj.column.push("rank");
            break;
          case 'Years in Service':
            queryObj.column.push("years_in_service");
            break;
          case "ODA":
            queryObj.column.push("oda");
            break;
          case "MOS":
            queryObj.column.push("mos");
            break;
        }
        queryObj.value.push(this.state.values[j])
      }
    }
    console.log(queryObj)
    this.props.fetchMeans(queryObj);
  }

  updateTable(val) {
    this.setState({
      tables: [...val]
    })
  }

  updateColumns(val){
    this.setState({
      columnToAdd: val[0],
      displayValueField: true,
    })
  }

  updateValues(val){
    this.setState({
      columns: [...this.state.columns, this.state.columnToAdd],
      values: [...this.state.values, ...val],
    })
  }

  addFilter(){
    this.setState({
      displayColumnField: true
    })
  }

  addChip(val){
    this.setState({
      chips: {
        ...this.state.chips,
        [val.key]: val.val,
      },
      displayColumnField: false,
      displayValueField: false,
    })
  }

  removeFilter(item){
    console.log(item, "item")
    let columnIndex = 0;
    let valueIndex = 0;
    for(let i = 0; i < this.state.values.length; i++){
      console.log(i, "index")
      if(this.state.values[i] === item){
        console.log("bool valid")
        columnIndex = i;
        valueIndex = i;
        break;
      }
    }
    let newColumns = this.state.columns.slice(0, columnIndex).concat(this.state.columns.slice(columnIndex + 1, this.state.columns.length))
    let newValues = this.state.values.slice(0, valueIndex).concat(this.state.values.slice(valueIndex + 1, this.state.values.length))
    this.setState({
      columns: newColumns,
      values: newValues,
      chips: {
        ...this.state.chips,
        [item]: ""
      }
    })
  }

  render() {
    console.log(this.state.columns, this.state.values)
    return (
      <div>
        <button onClick={this.fireQuery}> Get Results </button>
        <h1>Hi</h1>
        {Object.values(this.state.chips)}
        <AdminQueryFilterCMPT 
        changeHandler={this.props.changeHandler}
        columnToAdd={this.state.columnToAdd}
        sectionSuggestions={this.state.sectionSuggestions}
        columnSuggestions={this.state.columnSuggestions}
        currentColumn={this.state.columns[this.state.columns.length - 1]}
        valueSuggestions={this.state.valueSuggestions}
        displayColumnField={this.state.displayColumnField}
        displayValueField={this.state.displayValueField}
        updateTable={this.updateTable}
        updateColumns={this.updateColumns}
        updateValues={this.updateValues}
        addFilter={this.addFilter}
        addChip={this.addChip}
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
