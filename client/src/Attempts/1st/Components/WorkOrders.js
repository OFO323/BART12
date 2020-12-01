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
                Workorder : [item.workorders.w_WOnum]
            }}}>Edit</Link>/
            <Link to = {{pathname:"deleteWorkorder", state:{
                Workorder: [item.workorders.w_WOnum],
            }}}>Delete</Link>
            
        </td>
    </tr>
)

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

    WOList(){
        return this.state.workorders.map (function(current, i){
            return <Workorders workorders = {current} key = {i} />
        });
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

    

    render(){
        const {workorders} = this.state
        //console.log(workorders);
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
            <Table className = "table table-striped" variant = 'dark' bordered responsive >
                <thead className = "WOtitles" >
                    <tr class="text-primary">
                        <th>Project Id</th>
                        <th>Workorder Number</th>
                        <th>Workorder Description</th>
                        <th>Status</th>
                        <th>Report Date</th>
                        <th>Workorder Location</th>
                        <th>Workorder type</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                  {this.WOList()}
                       {/*    <div>
                            {workorders.map ((item)=>{
                                return(
                                <tr className = "Workorder"> 
                                    <Workorder  w_projectid = {item.w_projectid} w_WOnum = {item.w_WOnum} w_desc = {item.w_desc}  w_status = {item.w_status} w_reportdate = {item.w_reportdate} w_location = {item.w_location} w_type = {item.w_type} w_TPID = {item.w_TPID} w_PSProject = {item.w_PSProject} w_PSProjDesc = {item.w_PSProjDesc} w_PSActivity = {item.w_PSActivity} w_PSActDesc = {item.w_PSActDesc}/>
                                    
                                </tr>
                                )
                            })}
                        </div> */}
                        {/* ): (
                            <div>
                                Loading ...
                            </div>
                        )} */}
                    </tbody>
            </Table>
            </Fragment>
        )
    }
}

export default WorkOrders;
