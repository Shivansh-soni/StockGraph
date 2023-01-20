import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";
const FinalArray = [];
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class App extends Component {
    componentDidMount() {
        var chart = this.chart;

        

        fetch(
          "https://financialmodelingprep.com/api/v3/historical-chart/1hour/AAPL?apikey=b1360803f80dd08bdd0211c5c004ad03"
        )
          .then(function (response) {
            return response.json();
          })
            .then(function (data) {
              // eslint-disable-next-line
              // data.map((d) => {
              //   //   console.log(new Date(d.date).getTime())
              //   const date = new Date(d.date);
              //   const yData = [d.open, d.low, d.high, d.close];
              //   FinalArray.push({
              //     x: date,
              //     y: yData,
              //   });
              // });

              for (let i = 0; i < 20; i++) {
                const date = new Date(data[i].date)
                console.log(date);
                const yData = [data[i].open, data[i].low, data[i].high, data[i].close];
                FinalArray.push({
                  x: date,
                  y: yData,
                });
              }
              chart.render();
            });
        console.log("FINAL", FinalArray);
    }

    render() {

        

        const options = {
          exportEnabled: true,
          title: {
            text: "DEMO",
          },
          axisX: {
            valueFormatString: "D MMM",
          },
          axisY: {
            title: "Price",
            prefix: "$",
          },
          data: [
            {
              type: "candlestick",
              name: "DEMO",
              showInLegend: true,
              yValueFormatString: "$##0.00",
              xValueType: "DateTime",
              dataPoints: FinalArray,
            },
          ],
        };
        return (
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width:"100vw",
                height:"100vh"
            }}>
                <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)}  />
            </div>
        );
    }
}
export default App;