import React from 'react';
import CanvasJSReact from "../../canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function UsersReach() {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Users' Reach"
    },
    data: [{
      type: "doughnut",
      indexLabel: "{label}: {y}%", // Display label and percentage
      dataPoints: [
        { y: 35, label: "IOT" },
        { y: 28, label: "AVP" },
        { y: 12, label: "DSA" },
        { y: 8, label: "Mathematics" },
        { y: 6, label: "Physics" },
      ]
    }]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default UsersReach;
