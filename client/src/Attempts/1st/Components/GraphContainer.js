import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import {Line} from 'react-chartjs-2';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
            return(
                Dates.push(item.a_readdate),
                Readings.push(item.a_meterreading),
                Goal.push(item.a_goal)
            )
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
                    backgroundColor: "rgba(248, 231, 0, .9)",
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
            <div style = {{backgroundColor: '#E7F7F7'}}>
            <div>
            <Navbar bg="dark" variant="dark">
                <Nav.Link >
                <Link to = {'/Assets'} className = 'nav-link'>BACK</Link>
                </Nav.Link>
            </Navbar>
            <div style ={{background:"#90a7a7"}}>
                <div class = "container" style = {{paddingTop: '10px', paddingBottom: '10px'}}>
                <div className = 'py-3 pl-3 my-1 text-left'>
                    <h2><strong>Asset Details</strong></h2>
                </div>
                {this.state.single.map ((item)=>{
                         return(
                           
                            <Table>
                                <Row bg = 'dark' >
                                <Col bg = 'dark'>
                                    <div style = {{textAlign: 'left', paddingLeft: "100px", paddingRight: "50px"}}>
                                        <p><b>Project Id: </b> {item.a_projectid}</p>
                                        <p><b>Meter Name: </b> {item.a_metername}</p>
                                        <p><b>Meter Description: </b> {item.a_meterdesc}</p>
                                        <p><b>Meter Reading: </b> {item.a_meterreading}</p>
                                        <p><b>Department: </b> {item.a_dept}</p>
                                    </div>
                                </Col>
                                <Col bg = 'dark' variant = 'dark'>
                                <div style = {{textAlign: 'left', paddingLeft: "100px"}}>
                                    <p><b>Read Date: </b> {item.a_readdate}</p>
                                    <p><b>Units: </b> {item.a_meterunits}</p>
                                    <p><b>Goal: </b> {item.a_goal}</p>
                                    <p><b>Goal Group: </b> {item.a_goalgroup}</p>
                                    </div>
                                </Col>
                                </Row>
                            </Table>
                 ) })}

                </div> 
                </div>

                <div class = "container">
                    <div style = {{paddingTop: '30px', paddingBottom: '30px'}}>
                        <Line style = {{height:50}} data = {dataSet} />
                    </div>
                </div>
                <Navbar class = "navbar fixed-bottom" expand = 'lg' sticky = 'bottom' bg = 'dark'>
                    <p></p>
                </Navbar>
            </div>
          </div>
        )
    }
    
}

export default Charts;