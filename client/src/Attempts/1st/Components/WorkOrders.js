import React, { Component, Fragment } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
// import Workorder from './WorkOrder.js';

import Table from 'react-bootstrap/Table';
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
            <Link to = {{pathname:`/editWorkorder/${item.workorders.w_projectid}/${item.workorders.w_WOnum}/${item.workorders.w_desc}/${item.workorders.w_status}/${item.workorders.w_reporteddate}/${item.workorders.w_location}/${item.workorders.w_type}/${item.workorders.w_TPID}/${item.workorders.w_PSProject}/${item.workorders.w_PSProjDesc}/${item.workorders.w_PSActivity}/${item.workorders.w_PSActDesc}`}}>Edit</Link>
        </td>
    </tr>
)

class WorkOrders extends Component{
    constructor({match}){
        super(match);
        if(match){
            this.state = {
                search: match.params.id,
                workorders: []
            }
        }
        else{
            this.state = {
                search: '',
                workorders: []
            }
        }
    //console.log(match)
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
        if(this.match){
            fetch(`http://localhost:4006/woSearch/${this.state.search}`)
                .then(res => res.json())
                .then(result => this.setState({workorders:result}))
        }
        else{
            fetch('http://localhost:4006/Workorders')
                .then(res => res.json())
                .then(result => this.setState({workorders:result}))
        }
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
             <div className = 'bg-dark'>
            <Navbar bg = 'dark' variant = 'dark'>
            <Row>
                <Nav.Link >
                    <Link to = {'/'} className = 'nav-link'>HOME</Link>
                </Nav.Link>
                
                <Form inline>
                    <Col >

                        <FormControl name = 'search' value = {this.state.search} onChange = {this.onChange} type="text" placeholder="Search Workorders" className="mr-sm-2"/>
                        <Button  onClick = {this.onClick} variant = 'info'>Search</Button>

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
            </div>
            </Fragment>
            
        )
    }
}

export default WorkOrders;