import React, { Component, useEffect } from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';

import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';

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
        console.log(data)
        
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
                    lineTension: 0.5,
                    backgroundColor: "rgba(248, 231, , .9)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10
                },
                {
                    label: 'Goal',
                    data: Goal,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(0, 0, 220, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                }

            ]
        };

                           
        
        return (
            <div>
                <div>
                {data.map ((item)=>{
                    return(
                    <Table className = 'table table-striped' bordered responsive bg = 'dark' fluid = 'md' variant = 'dark'>
                        <Row bg = 'dark' >
                            <Col>Project Id: {item.a_projectid}</Col>
                            <Col>Meter Name: {item.a_metername}</Col>
                        </Row>
                        <Row bg = 'dark' variant = 'dark'>
                            <Col>Department: {item.a_dept}</Col>
                            <Col>Meter Description: {item.a_meterdesc}</Col>
                            <Col>Units: {item.a_meterunits}</Col>
                        </Row>
                        <Row bg = 'dark'>
                            <Col>Goal Group: {item.a_goalgroup}</Col>
                        </Row>
                    </Table>
                 ) })}
                </div> 
                <div>
                    <Line data = {dataSet} />
                </div>
            </div>
            
        )
    }
    
}

export default Charts;