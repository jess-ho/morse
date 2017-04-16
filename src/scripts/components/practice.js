import React from 'react'
import ReactDOM from 'react-dom'

import morse from '../morsedb.js'

export default class Practice extends React.Component {
	render() {
		const codes = Object.keys(morse)
		let codeList = codes.map((code, i) => {
			
			return (
				<div key={`code-${i}`}>
					<p>{code}</p>
					<p>{morse[code]}</p>
				</div>
			)
		})
		return (
			<div className="cheatsheet">
				<h2>Cheatsheet</h2>
				<div className="container wrapper">
					{codeList}
				</div>
			</div>
		)
	}
}