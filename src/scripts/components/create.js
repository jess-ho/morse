import React from 'react'
import ReactDOM from 'react-dom'

import morse from '../morsedb.js'

export default class Create extends React.Component {
	constructor() {
		super()
		this.state = {
			code: [],
			letter: []
		}
	}
	render() {
		document.getElementsByClass('message')[0].addEventListener('keyDown', (e) => {
			if (e.keyCode >= 65 && e.keyCode <= 90) {
				
			}
		})
		return (
			<div className="message">
				{/* two states, key listeners */}
				<div></div>
				<div></div>
			</div>
		)
	}
}