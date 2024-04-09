// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  changing = event => {
    const {value} = event.target
    console.log(value)
    this.setState({input: value})
  }

  render() {
    const {input} = this.state
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading"> Calculate the Letters you enter</h1>
          <label className="para" htmlFor="phraseText">Enter the phrase</label>
          <input
            type="text"
            className="input"
            placeholder="Enter the phrase"
            onChange={this.changing}
            value={input}
            id="phraseText"
          />
          <p className="letter-count">No.of letters: {input.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
