import React, { Component, useEffect } from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

class Charts extends Component{

    constructor(props){
        super(props);
        this.state = {  
            data: []
        }
    }

     componentDidMount(){
        this.getData()
    }

     getData(){
         //console.log(this.props)
       fetch(`http://localhost:4006/Assets/${this.props.asset}`)
       .then(res => res.json())
       .then(data => this.setState({data}))       
        
    }

    render(){

        const {data} = this.state;
        //console.log(data)

        const Dates = []
        const Readings = []

        {data.map ((item)=>{
            Dates.push(item.a_readdate)
            Readings.push(item.a_meterreading)
        })}

        console.log(Dates, Readings)

        const dataSet = {
            labels: Dates,
            datasets:[
                {
                    label: 'Meter Reading',
                    data: Readings,
                    fill: true,
                }
            ]
        };
        
        
        return (
            <div>
                 <Line data = {dataSet} />
            </div>
        )
    }
    
}

export default Charts;