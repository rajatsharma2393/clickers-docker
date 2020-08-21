import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { URI } from "./../common/constants";
import ClipLoader from "react-spinners/ClipLoader";
import "./../assets/styles/graph.css";
export default class ClickGraph extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, isLoading: true, options: {} };
  }
  componentDidMount() {
    this.getGraphData();
  }
  getGraphData = () => {
    axios.get(URI).then(res => {
      if (res.status === 200 && Object.keys(res.data.clicks).length > 0) {
        let labels = Object.keys(res.data.clicks);
        let clicks = Object.values(res.data.clicks);
        this.setState({
          data: {
            labels,
            datasets: [
              {
                data: clicks,
                label: "No. of Clicks",
                fill: false,
                backgroundColor: "rgba(1,1,1,1)",
                borderColor: "rgba(1,1,1,1)",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(1,1,1,1)",
                pointBackgroundColor: "rgba(1,1,1,1)",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(1,1,1,1)",
                pointHoverBorderColor: "rgba(1,1,1,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                tickMarkLength: 1
              }
            ]
          },
          isLoading: false,
          options: {
            responsive: true,
            scales: {
              yAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Clicks"
                  }
                }
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: "Hours:Minutes"
                  }
                }
              ]
            }
          }
        });
      } else {
        this.setState({
          isLoading: false
        });
      }
    });
  };
  render() {
    let graphContent =
      this.state.data && Object.keys(this.state.data).length > 0 ? (
        <Line data={this.state.data} options={this.state.options} />
      ) : (
        <div className="no-clicks">Get some clicks first</div>
      );
    let content = this.state.isLoading ? <ClipLoader /> : graphContent;
    return <div>{content}</div>;
  }
}
