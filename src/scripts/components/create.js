import React from 'react'
import ReactDOM from 'react-dom'

import morse from '../morsedb.js'

export default class Create extends React.Component {
	constructor() {
		super()
		this.state = {
			text: '',
			codes: []
		}

		this.myKeyPress = this.myKeyPress.bind(this)
	}
	myKeyPress(e) {
		// convert string of this.state.text into an array where each letter is separated
		const textSplit = e.target.value.replace(/[^\w]/gi, ' ').split('')
		// console.log(textSplit)

		// loop through the array and match against database
		const textArray = []
		const charList = Object.keys(morse)

		for (var i = 0; i < textSplit.length; i++) {
			for (var j = 0; j < charList.length; j++) {
				if (textSplit[i] === charList[j]) {
					textArray.push(morse[charList[j]])
				} 
				// else if (textSplit[i] === " ") {
				// 	textArray.push("")
				// }
			}

			if (textSplit[i] === " ") {
				textArray.push('/')
			}
		}

		// put enter as new line
		// console.log(textArray)

		// set state for both at once, updates in real time? iunno something like that
		this.setState({
			[e.target.name]: e.target.value,
			codes: textArray.join(' ')
		})

		// console.log(e.target.value)
		// console.log(textInput)
	}
	render() {
		return (
			<div className="message">
				<textarea name="text" id="" cols="30" rows="10" value={this.state.text} onChange={this.myKeyPress}></textarea>
				<div>
					{this.state.codes}
				</div>
			</div>
		)
	}
}