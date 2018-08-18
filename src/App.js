import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  
  state ={
  numCorrect: 0,
  numQuestions:0,
  value1: Math.floor(Math.random() * 100),
  value2: Math.floor(Math.random() * 100),
  value3: Math.floor(Math.random() * 100),
  get proposedAnswer() {
    return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
  }
  }

answerTrue = (value1,value2,value3,proposedAnswer)=>{
	if(value1+value2+value3===proposedAnswer){
    this.setState((prevState)=>({
    numCorrect: prevState.numCorrect + 1,
  	numQuestions: prevState.numQuestions + 1,
    value1: Math.floor(Math.random() * 100),
	value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
	get proposedAnswer() {
    return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
  }
    }))
    }
  else{
  this.setState((prevState)=>({
    numCorrect: prevState.numCorrect,
  	numQuestions: prevState.numQuestions + 1,
    value1: Math.floor(Math.random() * 100),
	value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
	get proposedAnswer() {
    return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
  }
    }))
}
}
answerFalse = (value1,value2,value3,proposedAnswer)=>{
	if(value1+value2+value3===proposedAnswer){
    this.setState((prevState)=>({
    numCorrect: prevState.numCorrect,
  	numQuestions: prevState.numQuestions + 1,
      value1: Math.floor(Math.random() * 100),
	value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
	get proposedAnswer() {
    return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
  }
    }))
    }
  else{
  this.setState((prevState)=>({
    numCorrect: prevState.numCorrect + 1,
  	numQuestions: prevState.numQuestions + 1,
    value1: Math.floor(Math.random() * 100),
	value2: Math.floor(Math.random() * 100),
    value3: Math.floor(Math.random() * 100),
	get proposedAnswer() {
    return Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3
  }
    }))
}
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.answerTrue(this.state.value1,this.state.value2,this.state.value3,this.state.proposedAnswer)}>True</button>
          <button onClick={() => this.answerFalse(this.state.value1,this.state.value2,this.state.value3,this.state.proposedAnswer)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
