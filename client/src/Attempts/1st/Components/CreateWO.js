import React, { Component, Fragment } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateWO extends Component{
    constructor(props){
        super(props);
        this.state = {
            'w_projectid': " ",
            'w_WOnum': 0,
            'w_desc': '',
            'w_status': '',
            'w_reporteddate': 0,
            'w_location': '',
            'w_type': '',
            'w_TPID': 0,
            'w_PSProject': '',
            'w_PSProjDesc': '',
            'w_PSActivity': '',
            'w_PSActDesc': ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    //The code needs to be added which is responsible for resding the data of the new todo element to the back-end is the onSubmit method.body


    onSubmit(){
        // console.log("SUCCESSFULLY SUBMITTED FORM")
        // console.log(`WO ProjId: ${this.state.w_projectid}`)
        // console.log(`WO WOnum: ${this.state.w_WOnum}`)
        // console.log(`WO-desc: ${this.state.w_desc}`)

        const newWorkorder = {
           "w_projectid" : this.state.w_projectid,
           "w_WOnum": this.state.w_WOnum,
           "w_desc": this.state.w_desc,
           "w_status": this.state.w_status,
           "w_reporteddate": this.state.w_reporteddate,
           "w_location": this.state.w_location,
           "w_type": this.state.w_type,
           "w_TPID": this.state.w_TPID,
           "w_PSProject": this.state.w_PSProject,
           "w_PSProjDesc": this.state.w_PSProjDesc,
           "w_PSActivity": this.state.w_PSActivity,
           "w_PSActDesc": this.state.w_PSActDesc
        }

        axios.post('http://localhost:4006/create', newWorkorder)
            .then(res => console.log(res.data))

        if(this.state.w_WOnum == 10){
            this.props.history.push('/alertMessage'); 
        }

            this.setState({
               'w_projectid' : '',
               'w_WOnum': 0,
               'w_desc': '',
               'w_status': '',
               'w_reporteddate': '',
               'w_location': '',
               'w_type': '',
               'w_TPID': '',
               'w_PSProject': '',
               'w_PSProjDesc': '',
               'w_PSActivity': '',
               'w_PSActDesc': ''
            })

           
    }

    render(){
        const {w_WOnum} = this.state.w_WOnum

        
        return(
            <Fragment>
            <Navbar bg = 'dark' variant = 'dark'>
            <Row>
                <Form inline>
                <Nav.Link >
                    <Link to = {'/'} className = 'nav-link'>HOME</Link>
                </Nav.Link>
                </Form>
            </Row>
            </Navbar>
            <div class='bg-secondary'>
                <h3 className = 'text-white'>Create New WorkOrder</h3>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Project Id</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_projectid' 
                            value = {this.state.w_projectid}
                            onChange = {this.onChange} />
                            {this.state.w_projectid}
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Work Order Number</label>
                            <input 
                            type = 'number' 
                            className = 'form-control' 
                            name = 'w_WOnum' 
                            value = {this.state.w_WOnum}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_desc' 
                            value = {this.state.w_desc}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Status</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_status' 
                            value = {this.state.w_status}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Report Date</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_reporteddate' 
                            value = {this.state.w_reporteddate}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Location</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_location' 
                            value = {this.state.w_location}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Type</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_type' 
                            value = {this.state.w_type}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>TP Id</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_TPID' 
                            value = {this.state.w_TPID}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Project</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSProject' 
                            value = {this.state.w_PSProject}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Project Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSProjDesc' 
                            value = {this.state.w_PSProjDesc}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>PS Activity</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSActivity' 
                            value = {this.state.w_PSActivity}
                            onChange = {this.onChange} />
                        </div>

                        <div className = 'form-group' style={{ width:'500px'}}>
                            <label>Activity Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSActDesc' 
                            value = {this.state.w_PSActDesc}
                            onChange = {this.onChange} />
                        </div>

                        
                            <input type = 'Submit' value = 'Submit'/>
                        

                    </div>
                        
                   

                </form>
            </div>
            </Fragment>
        )
    }
}

export default CreateWO;