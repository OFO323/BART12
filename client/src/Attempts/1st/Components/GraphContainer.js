import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


class Charts extends Component{

    constructor(props){
        super(props);
        this.state = { 
            single: [], 
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
       .then(result => this.setState({data: result}))

       fetch(`http://localhost:4006/Assets2.0/${this.props.asset}/${this.props.dept}/${this.props.meter}`)
       .then(res => res.json())
       .then(result => this.setState({single: result}))        
        
    }

    render(){

        const {data} = this.state.data;
        //console.log(data)
        
        const Dates = []
        const Readings = []
        const Goal = []

        {this.state.data.map ((item)=>{
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
            <Navbar bg="dark" variant="dark">
                <Nav.Link >
                <Link to = {'/Assets'} className = 'nav-link'>Back</Link>
                </Nav.Link>
            </Navbar>
                <div>
                {this.state.single.map ((item)=>{
                         return(
                            <body>
                            <p>Project Id: {item.a_projectid}</p>
                            <p>Meter Name: {item.a_metername}</p>
                            <p>Department: {item.a_dept}</p>
                            <p>Meter Description: {item.a_meterdesc}</p>
                            <p>Meter Reading: {item.a_meterreading}</p>
                            <p>Meter Units: {item.a_meterunits}</p>
                            <p>Read Date: {item.a_readdate}</p>
                            <p>Group: {item.a_group}</p>
                            <p>Goal Group: {item.a_goalgroup}</p>
                        </body>
            
                            // <Table className = 'table table-striped' bordered responsive bg = 'dark' fluid = 'md' variant = 'dark'>
                            //     <Row bg = 'dark' >
                            //         <Col>Project Id: {item.a_projectid}</Col>
                            //         <Col>Meter Name: {item.a_metername}</Col>
                            //     </Row>
                            //     <Row bg = 'dark' variant = 'dark'>
                            //         <Col>Department: {item.a_dept}</Col>
                            //         <Col>Meter Description: {item.a_meterdesc}</Col>
                            //         <Col>Units: {item.a_meterunits}</Col>
                            //     </Row>
                            //     <Row bg = 'dark'>
                            //         <Col>Goal Group: {item.a_goalgroup}</Col>
                            //     </Row>
                            // </Table>
                 ) })}

                </div> 
                <div>
                    <Line data = {dataSet} />
                </div>
                <Navbar class = "navbar fixed-bottom" expand = 'lg' sticky = 'bottom' bg = 'dark'>
                    <p></p>
                </Navbar>
            </div>
          
        )
    }
    
}

export default Charts;