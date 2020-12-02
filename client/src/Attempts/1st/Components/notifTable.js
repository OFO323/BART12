import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment'
import Table from 'react-bootstrap/Table';


//table pulls data from DB [projectUpdates table]

class notifTable extends Component{
    
   constructor(props){
       super(props);
       this.state = {          //specifiy notification type [danger, info, etc]
        projectUpdates : []
    }
   }

    //once compnent mounts data is pulled from DB
    componentDidMount(){
        this.getUpdates();
    }

    //should just fetch from DB
    getUpdates = () => {

        var date = moment().utcOffset('0').format('YYYY-MM-DD');
        console.log(date)

        fetch(`http://localhost:4006/projUpdates/${date}`)
            .then(response => response.json())
            .then(response => this.setState({projectUpdates:response}))
            .catch(err => console.log(err))
    } 



    render(){
        const {projectUpdates} = this.state;
        console.log(this.state)

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Asset</th>
                        <th>Project</th>
                        <th>Description</th>
                    </tr>
                    {projectUpdates.map ((item)=>{
                            return(
                                <tr>
                                    <li>{item.assetID}</li>
                                    <li>{item.projID}</li>
                                    <li>{item.progress}</li>
                                    <li>{item.updated_at}</li>
                                </tr>
                            )
                        })}
                </thead>
                <tbody>
                    {/* {projectUpdates.length ? (
                        <div>
                            {projectUpdates.map((item) => {
                                return (
                                    <div>
                                        <th className = "list-inline" >
                                            <td class="list-inline-item"> {}</td>
                                            <td class="list-inline-item"> {props.dept} </td>
                                            <td class="list-inline-item"> {props.meterName} </td>
                                            <td class="list-inline-item"> {props.reading} </td>
                                            <td class="list-inline-item"> {props.date} </td>
                                        </th>
                                    </div>
                                )
                            })}
                        </div>
                    ):(<div>
                        ...Loading
                    </div>)} */}
                        
                </tbody>
            </Table>
        )

    }
}

export default notifTable;
