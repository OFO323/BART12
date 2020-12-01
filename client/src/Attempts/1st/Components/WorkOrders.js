<<<<<<< HEAD
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
=======
import React, { Component, Fragment } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
>>>>>>> a6677dc7241fc2e040e5575aa29d6de2a2517b20
import Workorder from './WorkOrder.js';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';


class WorkOrders extends Component{
    constructor(props){
        super(props);
        this.state = {
            workorders: []
        }
     //   this.onClick = this.onClick.bind(this)
    }

    componentDidMount(){
        this.getWorkorders();
    }

    getWorkorders(){
        fetch('http://localhost:4006/Workorders')
        .then(res => res.json())
        .then(workorders => this.setState({workorders}))
    }

    // onClick(data){

    //     console.log(data);
    // //     axios.get(`http://localhost:4006/Workorders/${data}`, (err, res)=>{
    // //         if(err){
    // //             console.log(err);
    // //         }
    // //         else{
    // //             console.log(res);
    // //         }
    // //     })

    // }

     tabSytle = {
        
    };

    render(){
        const {workorders} = this.state
        console.log(workorders);
        return(
            <Fragment>
            <Navbar bg = 'dark' variant = 'dark'>
            <Row>
                <Form inline>
                        <Col xl = {4}>
                            <Form.Label className="my-1 mr-2 ml-5" htmlFor="inlineFormCustomSelectPref">
                                <p style = {{color:"grey", margin:1 }}>Search Workorders</p>
                            </Form.Label>
                        </Col>
                        <Col >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                            <Button variant = 'outline-info'>Search</Button>
                        </Col>
                </Form>
                </Row>
            </Navbar>
            <Table variant = 'dark' bordered responsive >
                <thead className = "WOtitles" >
                    <tr>
                    <th scope = "col">Project Id</th>
                    <th scope = "col">Workorder Number</th>
                    <th scope = "col">Workorder Description</th>
                    <th scope = "col">Status</th>
                    <th scope = "col">Report Date</th>
                    <th scope = "col">Workorder Location</th>
                    <th scope = "col">Workorder type</th>
                    </tr>
                </thead>
                <tbody>
                        {workorders.length ? (
                            <div>
                                {workorders.map ((item)=>{
                                    return(
                                    <tr className = "Workorder" scope = 'col'>
                                        
                                        <Workorder  w_projectid = {item.w_projectid} w_WOnum = {item.w_WOnum} w_desc = {item.w_desc}  w_status = {item.w_status} w_reportdate = {item.w_reportdate} w_location = {item.w_location} w_type = {item.w_type} w_TPID = {item.w_TPID} w_PSProject = {item.w_PSProject} w_PSProjDesc = {item.w_PSProjDesc} w_PSActivity = {item.w_PSActivity} w_PSActDesc = {item.w_PSActDesc}/>
                                        
                                    </tr>
                                    )
                                })}
                            </div>
                        ): (
                            <div>
                                Loading ...
                            </div>
                        )}
                    </tbody>
            </Table>
            <div>
                <table className = "WOtable">
                        <thead className = "WOtitles">
                            <tr>
                            <th scope = "col">Project Id</th>
                            <th scope = "col">Workorder Number</th>
                            <th scope = "col">Workorder Description</th>
                            <th scope = "col">Status</th>
                            <th scope = "col">Report Date</th>
                            <th scope = "col">Workorder Location</th>
                            <th scope = "col">Workorder type</th>
                            </tr>
                        </thead>
                    <tbody>
                        {workorders.length ? (
                            <div>
                                {workorders.map ((item)=>{
                                    return(
                                    <tr className = "Workorder">
                                        
                                        <Workorder  w_projectid = {item.w_projectid} w_WOnum = {item.w_WOnum} w_desc = {item.w_desc}  w_status = {item.w_status} w_reportdate = {item.w_reportdate} w_location = {item.w_location} w_type = {item.w_type} w_TPID = {item.w_TPID} w_PSProject = {item.w_PSProject} w_PSProjDesc = {item.w_PSProjDesc} w_PSActivity = {item.w_PSActivity} w_PSActDesc = {item.w_PSActDesc}/>
                                        
                                    </tr>
                                    )
                                })}
                            </div>
                        ): (
                            <div>
                                Loading ...
                            </div>
                        )}
                    </tbody>
                </table>
            </div>
            </Fragment>
        )
    }
}

export default WorkOrders;
