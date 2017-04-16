import React from 'react'
import ReactDOM from 'react-dom'
import { ajax } from 'jquery'

import morse from '../morsedb.js'

const apiUrl = 	'https://od-api.oxforddictionaries.com:443/api/v1/wordlist/en/lexicalCategory%3Dnoun%2Cadjective'
const apiID = 'a94ecc80'
const apiKey = '0121ed5805a81740d154df0bdf298c9d'

// const apiUrl = 'http://api.wordnik.com/v4/words.json/randomWords'
// const key = ''

const randoNum = Math.floor(Math.random() * 2195)

export default class Quiz extends React.Component {
	constructor() {
		super()
		this.state = {
			wordTest: [],
			userInput: '',
			userAnswer: [],
			wordAnswer: [],
			current: 0,
			score: 0
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.restart = this.restart.bind(this)
	}
	componentDidMount() {
		ajax({
			url: 'http://proxy.hackeryou.com',
			type: 'GET',
			dataType: 'json',
			data: {
				reqUrl: apiUrl,
				xmlToJSON: 'false',
				proxyHeaders: {
					'Accept': 'application/json',
					'app_id': apiID,
					'app_key': apiKey
				},
				params: {
					// offset: randoNum,
					// limit: 1000,
					exact: false
				}
			}
		}).then((res) => {
			const results = res.results
			const questionList = []
			for (var i = 0; i < 10; i++) {
				const index = Math.floor(Math.random() * results.length) 
				questionList.push(results[index].word)
			}

			let questionMorse = questionList.map((question, index) => {
				const toTranslate = question.split('')
				const temp = []
				const charList = Object.keys(morse)
				for (var i = 0; i < toTranslate.length; i++) {
					for (var j = 0; j < charList.length; j++) {
						if (toTranslate[i] === charList[j]) {
							temp.push(morse[charList[j]])
						}
					} 
					if (toTranslate[i] === ' ') {
						temp.push('/')
					}
				}
				return temp.join(' ')
			})
			this.setState({
				wordTest: questionMorse,
				wordAnswer: questionList
			})

		})
		// ajax({
		// 	url: apiUrl,
		// 	method: 'GET',
		// 	dataType: 'json',
		// 	data: {
		// 		hasDictionaryDef: 'false',
		// 		minCorpusCount: 0,
		// 		maxCorpusCount: -1,
		// 		minDictionaryCount: 1,
		// 		maxDictionaryCount: -1,
		// 		minLength: 5,
		// 		maxLength: -1,
		// 		limit: 20,
		// 		api_key: ''
		// 	}
		// })
	}
	render() {
		let answerKey = ''
		
		if (this.state.current > 9) {
			answerKey = (
				<div className="final-score">
					<p>Final Score:</p>
					<p>{this.state.score} / 10</p>
					<button onClick={this.restart}>Start Over</button>
				</div>
			)
		}
		let questionArray = this.state.wordTest.map((word, i) => {
			return (
				<div key={`word-${i}`} className='question' id={`question${i}`}>
					<h3>Question {i + 1}</h3>
					<p>{word}</p>
					<input type='text' name='userInput' value={this.state.userInput} onChange={this.handleChange} selected />
					<button id="nextBtn" onClick={this.handleClick}>Next</button>
				</div>
			)
		})
		return (
			<div className="wrapper">
				<h2>Quiz</h2>
				{questionArray[this.state.current]}
				{answerKey}
			</div>
		)
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleClick(e) {
		e.preventDefault()
		if (this.state.userInput.toLowerCase() === this.state.wordAnswer[this.state.current]) {
			this.setState({
				userInput: '',
				score: this.state.score + 1,
				current: this.state.current + 1
			})
		} else {
			this.setState({
				userInput: '',
				current: this.state.current + 1
			})
		}
	}
	restart() {
		window.location.reload()
	}
}