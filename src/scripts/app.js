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
		
		return (
			<div>
				<header className="wrapper">
					<h1>Morse<span className="secondHeader" aria-hidden="true">-- --- .-. ... .</span></h1> {/* morse in morse */}
					<nav>
						<Link to='/'>Cheatsheet</Link>
						<Link to={`/quiz`}>Quiz</Link> 
						<Link to={`/create`}>Create</Link>
					</nav>
				</header>

				{this.props.children || <Practice morse={this.state.morseList} />}

				<footer className="wrapper">
					<p className="copyright">&copy; Jessica Ho | Front-End Web Dev</p>
					<p className="footer-header">-- --- .-. ... .</p>
					<div className="social-container">
						<Link to="https://github.com/jess-ho/morse"><i className="fa fa-github" aria-hidden="true"></i></Link>
						<Link to="https://twitter.com/thisisJessHo"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
						<Link to="http://jessho.co/"><i className="fa fa-mouse-pointer" aria-hidden="true"></i></Link>
					</div>
				</footer>
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