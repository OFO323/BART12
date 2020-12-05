import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Workorder from './WorkOrder.js';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import 'bootstrap/dist/css/bootstrap.min.css';
                              
const Workorders = item => (
    <tr>
        <td>{item.workorders.w_projectid}</td>
        <td>{item.workorders.w_WOnum}</td>
        <td>{item.workorders.w_desc}</td>
        <td>{item.workorders.w_status}</td>
        <td>{item.workorders.w_reporteddate}</td>
        <td>{item.workorders.w_location}</td>
        <td>{item.workorders.w_type}</td>
        <td>

            <Link to = {{pathname:"/editWorkorder",state :{
                Project: [item.workorders.w_projectid],
                Workorder : [item.workorders.w_WOnum],
                Description: [item.workorders.w_desc],
                Status : [item.workorders.w_status],
                Date: [item.workorders.w_reporteddate],    
                Location: [item.workorders.w_location],
                Type: [item.workorders.w_type],
                TPID: [item.workorders.w_TPID],
                PSProject : [item.workorders.w_PSProject],
                ProjDesc: [item.workorders.w_PSProjDesc],
                Activity : [item.workorders.w_PSActivity],
                ActDesc : [item.workorders.w_PSActDesc]
            }}}>Edit</Link>


        </td>
    </tr>
)

class WorkOrders extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            workorders: []
        }
     this.onClick = this.onClick.bind(this)
     this.onChange = this.onChange.bind(this);

    }

    onChange(event){
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }


    componentDidMount(){
        this.getWorkorders();
    }


    WOList(){
            return this.state.workorders.map (function(current, i){
                return <Workorders workorders = {current} key = {i} />
            });
        
    }

    getWorkorders(){
            fetch('http://localhost:4006/Workorders')
                .then(res => res.json())
                .then(result => this.setState({workorders:result}))
    }

    onClick(){

        fetch(`http://localhost:4006/woSearch/${this.state.search}`)
                .then(res => res.json())
                .then(result => this.setState({workorders:result}))

    }

    

    render(){
        const {workorders} = this.state
        //console.log(workorders);
        return(
            <Fragment>
            <Navbar bg = 'dark' variant = 'dark'>
            <Row>
                <Nav.Link >
                    <Link to = {'/'} className = 'nav-link'>HOME</Link>
                </Nav.Link>
                <Form inline>
                    <Col >
                        <FormControl type="text" placeholder="Search Workorders" className="mr-sm-2"/>
                        <Button variant = 'outline-info'>Search</Button>
                    </Col>
                </Form>
                </Row>
            </Navbar>
            <Table className = "table table-striped" variant = 'dark' bordered responsive>
                <thead className = "WOtitles" >
                    <tr class="text-primary">
                        <th>Project Id</th>
                        <th>Workorder Number</th>
                        <th>Workorder Description</th>
                        <th>Status</th>
                        <th>Report Date</th>
                        <th>Workorder Location</th>
                        <th>Workorder type</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                  {this.WOList()}
                </tbody>
            </Table>
            <Navbar class = "navbar fixed-bottom" expand = 'lg' sticky = 'bottom' bg = 'dark'>
                    <p></p>
                </Navbar>
            </Fragment>
            
        )
    }
}

export default WorkOrders;