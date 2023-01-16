import React, { Component } from 'react'
import Chart from 'react-google-charts'
const WordTreeData = [
  ['Phrases'],
  ['cats are better than dogs'],
  ['cats eat kibble'],
  ['cats are better than hamsters'],
  ['cats are awesome'],
  ['cats are people too'],
  ['cats eat mice'],
  ['cats meowing'],
  ['cats in the cradle'],
  ['cats eat mice'],
  ['cats in the cradle lyrics'],
  ['cats eat kibble'],
  ['cats for adoption'],
  ['cats are family'],
  ['cats eat mice'],
  ['cats are better than kittens'],
  ['cats are evil'],
  ['cats are weird'],
  ['cats eat mice'],
]
const WordTreeOptions = {
  wordtree: {
    format: 'implicit',
    word: 'cats',
  },
}
class WordTreeChart extends Component {
  render() {
    return (
      <div className="text-center my-0 mx-auto container w-[1000px]">
        <h2>Word Tree Chart</h2>
        <Chart
          width={'900px'}
          height={'500px'}
          chartType="WordTree"
          loader={<div>Loading Chart</div>}
          data={WordTreeData}
          options={WordTreeOptions}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    )
  }
}
export default WordTreeChart