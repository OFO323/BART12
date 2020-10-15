import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = { apiResponse: " "};
  }

  componentDidMount(){
    fetch("http://localhost:4002/Class/all")
    .then(res => res.text())
    .then(res => this.setState({apiResponse : res}))
    .then(data=> console.log(data))
    .catch(err => err);
  }

  render(){
    
    const text = this.state.apiResponse;

    return(
      <div>
        Hello There
        <p>{text}</p>
      </div>
    )
  }
}

export default App;
