import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function AdmGraph() {
  {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Student Subscription",
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "center",
      },
      axisY: {
        horizontal: true, 
      },      
    data: [{
        type: "bar",
        
        dataPoints: [
            { y:  5, label: "Jan" },
            { y:  10, label: "Feb" },
            { y:  15, label: "March" },
            { y:  20, label: "April" },
            { y:  25, label: "May" },
            { y:  5, label: "June" },
            { y:  10, label: "July" },
            { y:  15, label: "Aug" },
            { y:  20, label: "Sep" },
            { y:  25, label: "Oct" } ,
            { y:  25, label: "Nov" } ,
            { y:  25, label: "Dec" } 
               ],
        
    },],
    data: [{
      type: "bar",
      dataPoints: [
            { y:  5, label: "Jan" },
            { y:  10, label: "Feb" },
            { y:  15, label: "March" },
            { y:  20, label: "April" },
            { y:  25, label: "May" },
            { y:  5, label: "June" },
            { y:  10, label: "July" },
            { y:  15, label: "Aug" },
            { y:  20, label: "Sep" },
            { y:  25, label: "Oct" } ,
            { y:  25, label: "Nov" } ,
            { y:  25, label: "Dec" } 
      ],
      
  },
]
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default AdmGraph;
