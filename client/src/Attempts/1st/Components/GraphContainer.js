import React, { Component, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

import Table from 'react-bootstrap/Table';

class Charts extends Component{

    constructor(props){
        super(props);
        this.state = {  
            data: []
        }
        //console.log(this.props)
    }

     componentDidMount(){
        this.getData()
    }

     getData(){
        // console.log(this.props)
       fetch(`http://localhost:4006/Assets/${this.props.asset}/${this.props.dept}/${this.props.meter}`)
       .then(res => res.json())
       .then(data => this.setState({data}))       
        
    }

    render(){

        const {data} = this.state;
        //console.log(data)
        
        const Dates = []
        const Readings = []
        const Goal = []

        {data.map ((item)=>{
            Dates.push(item.a_readdate)
            Readings.push(item.a_meterreading)
            Goal.push(item.a_goal)
        })}

        //console.log(Dates, Readings)

        const dataSet = {
            labels: Dates,
            datasets:[
                {
                    label: 'Meter Reading',
                    data: Readings,
                    fill: true,                    
                },
                {
                    label: 'Goal',
                    data: Goal,
                    fill: false,
                }

            ]
        };
        
        
        return (
            <div>
                <div>
                    <thead className = "AssetInfo" >
                        <body>
                            <p>ProjectId: </p>
                            <p>Department: </p>
                            <p>Meter Name: </p>
                            <p>Meter Reading: </p>
                            <p>Reading Date: </p>
                            <p>Meter Description: </p>
                            <p>Meter Units: </p>
                            <p>Goal: </p>
                            <p>Goal Group: </p>
                        </body>
                        {/* {data.map ((item)=> {
                                return (
                            <body>
                                <p>{item.a_projectid}</p>
                                <p>{item.a_dept}</p>
                                <p>{item.a_metername}</p>
                                <p>{item.a_meterreading}</p>
                                <p>{item.a_readdate}</p>
                                <p>{item.a_meterdesc}</p>
                                <p>{item.a_meterunits}</p>
                                <p>{item.a_goal}</p>
                                <p>{item.a_goalgroup}</p>
                            </body>
                            )}
                        )} */}
                    </thead>
                </div> 
                <div>
                    <Line data = {dataSet} />
                </div>
            </div>
            
        )
    }
    
}

export default Charts;