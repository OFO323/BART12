import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Workorder from './WorkOrder.js';
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

    render(){
        const {workorders} = this.state
        console.log(workorders);
        return(
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
        )
    }
}

export default WorkOrders;