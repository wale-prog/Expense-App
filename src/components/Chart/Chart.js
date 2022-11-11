import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {  
  const dataPointValue = props.chart.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.chart.map(chart => (
      <ChartBar
      key={chart.label}
      value={chart.value}
      maxValue={totalMaximum}
      label={chart.label}
      />
      ))}
    </div>
  )
};

export default Chart;