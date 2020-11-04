import React, { Component } from 'react';


class WorkOrders extends Component{
    constructor(props){
        super(props);
        this.state = {
            workorders : []
        }
    }

    componentDidMount(){
        this.getWorkorders();
    }

    getWorkorders(){
        fetch('http://localhost:4006/Workorders')
        .then(res => res.json())
        .then(workorders => this.setState({workorders}))
    }

    render(){
        const {workorders} = this.state
        return(
            <div>
                <table>
                    <table>
                        <tr>
                            <th>Project Id</th>
                            <th>Workorder Number</th>
                            <th>Workorder Description</th>
                            <th>Status</th>
                            <th>Report Date</th>
                            <th>Workorder Location</th>
                            <th>Workorder type</th>
                            <th>TPID</th>
                            <th>PSPProject</th>
                            <th>PS Project Description</th>
                            <th>PS Activity</th>
                            <th>PS Action Desctiption</th>
                        </tr>
                    </table>
                    <table>
                        {workorders.length ? (
                            <div>
                                {workorders.map ((item)=>{
                                    return(
                                    <tr>
                                        <td>{item.w_projectid}</td>
                                        <td>{item.w_WOnum}</td>
                                        <td>{item.w_desc}</td>
                                        <td>{item.w_status}</td>
                                        <td>{item.w_reporteddate}</td>
                                        <td>{item.w_location}</td>
                                        <td>{item.w_type}</td>
                                        <td>{item.w_TPID}</td>
                                        <td>{item.w_PSProject}</td>
                                        <td>{item.w_PSProjDesc}</td>
                                        <td>{item.w_PSActivity}</td>
                                        <td>{item.w_PSActDesc}</td>
                                    </tr>
                                    )
                                })}
                            </div>
                        ): (
                            <div>
                                Loading ...
                            </div>
                        )}
                    </table>
                </table>
            </div>
        )
    }
}

export default WorkOrders;