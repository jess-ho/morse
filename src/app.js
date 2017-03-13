import React from 'react'
import ReactDOM from 'react-dom'

import Search from './searchbar.js'

class Submitbutton extends React.Component {
	render() {
		return (
			<button className="search">Search</button>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<header>
				<h1>Hi</h1>  
				<p>This is a paragraph</p>
				<Search /><Submitbutton />
			</header>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))