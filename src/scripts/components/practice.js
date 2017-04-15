import React from 'react'
import ReactDOM from 'react-dom'

import morse from '../morsedb.js'

export default class Practice extends React.Component {
	render() {
		const letters = Object.keys(morse)
		return (
			<div className="container">
				{
					letters.map((letter, i) => {
						return (
							<div key={`letter-${i}`}>
								<p>{letter}</p>
								<p>{morse[letter]}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}