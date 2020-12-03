import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment'
import Table from 'react-bootstrap/Table';


//table pulls data from DB [projectUpdates table]

const ProjUpdates = item => (
    <tr>
        <td>{item.projectUpdates.assetID}</td>
        <td>{item.projectUpdates.projID}</td>
        <td>{item.projectUpdates.progress}</td>
        <td>{item.projectUpdates.updated_at}</td>
    </tr>
)

class NotifTable extends Component{
    
   constructor(props){
       super(props);
       this.state = {  
        //type : '',        //specifiy notification type [danger, info, etc]
        projectUpdates : []
    }
   }

    //once compnent mounts data is pulled from DB
    componentDidMount(){
        this.getUpdates();
    }

    UpdateList(){
        return this.state.projectUpdates.map((curr, index) => {
            return <ProjUpdates projectUpdates = {curr} key = {index} />
        });
    }

    //should just fetch from DB
    getUpdates = () => {

        var date = moment().utcOffset('0').format('YYYY-MM-DD');
        console.log(date)

        fetch(`http://localhost:4006/projUpdates/${date}`)
            .then(res => res.json())
            .then(projectUpdates => this.setState({projectUpdates}))
            .catch(err => console.log(err))
    } 



    render(){
        const {projectUpdates} = this.state;
        console.log(this.state)

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Asset ID</th>
                        <th>Project ID</th>
                        <th>Progress</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                {this.UpdateList()}
                </tbody>
            </Table>
        )

    }
}

/*
    {projectUpdates.length ? (
                        <div>
                            {projectUpdates.map((item) => {
                                return (
                                    <div>

                                            <td class="list-inline-item"> {}</td>
                                            <td class="list-inline-item"> {props.dept} </td>
                                            <td class="list-inline-item"> {props.meterName} </td>
                                            <td class="list-inline-item"> {props.reading} </td>
                                            <td class="list-inline-item"> {props.date} </td>

                                    </div>
                                )
                            })}
                        </div>
                    )
                    }
*/


export default NotifTable;

