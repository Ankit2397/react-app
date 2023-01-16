import React, { Component } from 'react'
import Chart from 'react-google-charts'
const geoData = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
  ['India', 1100],
]
class GeoChart extends Component {
  render() {
    return (
      <div className="my-2 mx-auto text-center">
        <h2>React Gauge</h2>
        <Chart
          width={'1000px'}
          height={'900px'}
          chartType="GeoChart"
          data={geoData}
          className="my-0 mx-auto text-center"
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_MAP_API_KEY_GOES_HERE"
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default GeoChart;