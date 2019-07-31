import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class Chart extends Component {
  constructor(props) {
    super(props);

  }
  render() {

    return (
      <div>
        <Bar
          data={this.props.data}
          options={this.props.options}
          //   {
          //   title:{
          //     display:this.props.displayTitle,
          //     text:'Largest Cities In '+this.props.location,
          //     fontSize:25
          //   },
          //   // legend:{
          //   //   display:this.props.displayLegend,
          //   //   position:this.props.legendPosition
          //   // }
          // }
        
        />

      </div>
    )
  }
}
