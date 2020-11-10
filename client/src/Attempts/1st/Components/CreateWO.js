import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

class CreateWO extends Component{
    constructor(props){
        super(props);
        this.state = {
            w_projectid: '',
            w_WOnum: 0,
            w_desc: '',
            w_status: '',
            w_reporteddate: '',
            w_location: '',
            w_type: '',
            w_TPID: '',
            w_PSProject: '',
            w_PSProjDesc: '',
            w_PSActivity: '',
            w_PSActDesc: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    onSubmit(){
        console.log("SUCCESSFULLY SUBMITTED FORM")

        this.setState({
            w_projectid : '',
            w_WOnum: 0,
            w_desc: '',
            w_status: '',
            w_reporteddate: '',
            w_location: '',
            w_type: '',
            w_TPID: '',
            w_PSProject: '',
            w_PSProjDesc: '',
            w_PSActivity: '',
            w_PSActDesc: ''
        })
    }

    render(){
        return(
            <div>
                <h1>HELLO WORLD FROM THE CREATE WORKORDER PAGE</h1>
                <h3>Create New WorkOrder</h3>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <div className = 'form-group'>
                            <label>Project Id: </label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_projectid' 
                            value = {this.state.w_projectid}
                            placeholder = 'Project Id'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>#WO</label>
                            <input 
                            type = 'number' 
                            className = 'form-control' 
                            name = 'w_WOnum' 
                            value = {this.state.w_WOnum}
                            placeholder = 'WO_num'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_desc' 
                            value = {this.state.w_desc}
                            placeholder = 'Description'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Status</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_status' 
                            value = {this.state.w_status}
                            placeholder = 'Status'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Report Date</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_reporteddate' 
                            value = {this.state.w_reporteddate}
                            placeholder = 'Report Date'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Location</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_location' 
                            value = {this.state.w_location}
                            placeholder = 'Location'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Type</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_type' 
                            value = {this.state.w_type}
                            placeholder = 'Type'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>TP Id</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_TPID' 
                            value = {this.state.w_TPID}
                            placeholder = 'TP Id'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Project</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSProject' 
                            value = {this.state.w_PSProject}
                            placeholder = 'Project'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Project Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSProjectDesc' 
                            value = {this.state.w_PSProjDesc}
                            placeholder = 'Project Description'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>PS Activity</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSActivity' 
                            value = {this.state.w_PSActivity}
                            placeholder = 'PS Activity'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>Activity Description</label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_PSActDesc' 
                            value = {this.state.w_PSActDesc}
                            placeholder = 'Activity Description'
                            onChange = {this.onChange} />
                        </div>
                    </div>
                    <div>
                        <input type = 'Submit' value = 'Create Workorder'/>
                    </div>

                </form>
            </div>
        )
    }
}

export default CreateWO;