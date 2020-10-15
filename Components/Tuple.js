import express from 'express';
const {response} = express;
import React from 'react';
const {Component} = React;

class Tuple extends Component{
    constructor(){
        super();
        this.state = {
            loading:false,
            Data: []
        }
    };


    componentDidMount(){
        this.setState({loading: true});
        fetch('https://localhost:4002/Class/all')
            .then((response)=> response.json())
            .then((data)=>{
                this.setState({
                    loading:false,
                    Data: data
                });
            });
    };

    render(){
        const text = this.state.loading
        ? "Loading data .." : this.state.Data.name;
        return(
            response.send({text})
        )
    }
}

export default Tuple;