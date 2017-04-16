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
		const textSplit = e.target.value.split('')

		// loop through the array and match against database
		const textArray = []
		const charList = Object.keys(morse)

		for (var i = 0; i < textSplit.length; i++) {
			for (var j = 0; j < charList.length; j++) {
				if (textSplit[i].toLowerCase() === charList[j]) {
					textArray.push(morse[charList[j]])
				} 
			}

			if (textSplit[i] === " ") {
				textArray.push('/')
			}
		}

		// put enter as new line
		// console.log(textArray)

		this.setState({
			[e.target.name]: e.target.value,
			codes: textArray.join(' ')
		})
	}
	render() {
		return (
			<div>
				<p>Create your own message</p>
				<div className="message wrapper">
					<textarea name="text" id="" cols="30" rows="10" placeholder="Type your message here" value={this.state.text} onChange={this.myKeyPress}></textarea>
					<div className="translatedCode">
						{this.state.codes}
					</div>
				</div>
			</div>
		)
	}
}