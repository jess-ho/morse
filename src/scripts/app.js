import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'

import morse from './morsedb.js'
import Quiz from './components/quiz.js'
import Create from './components/create.js'
import Practice from './components/practice.js'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			morseList: morse
		}
	}
	render() {
		// const myKeyPress = (e) => {
		// 	const keynum

		// 	if (window.event) {
		// 		keynum = e.keyCode
		// 	} else if (e.which) {
		// 		keynum = e.which
		// 	}

		// 	console.log(String.fromCharCode(keynum))
		// }
		return (
			<div>
				<header>
					<h1>-- --- .-. ... .</h1> {/* morse in morse */}
					<nav>
						<Link to='/'>Cheatsheet</Link>
						<Link to={`/quiz`}>Quiz</Link> 
						<Link to={`/create`}>Create</Link>
					</nav>
				</header>

				{this.props.children || <Practice morse={this.state.morseList} />}
			</div>
		)
	}
}

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<Route path="/quiz" component={Quiz} />
			<Route path="/create" component={Create} />
		</Route>
	</Router>
, document.getElementById('app'))