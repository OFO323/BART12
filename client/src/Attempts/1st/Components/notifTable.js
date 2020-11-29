import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Table from 'react-bootstrap/Table';


//table pulls data from DB [projectUpdates table]

class notifTable extends Component{
    
    state = {
        type : '',          //specifiy notification type [danger, info, etc]
        projectUpdates : []
    }

    //once compnent mounts data is pulled from DB
    componentDidMount(){
        this.getUpdates();
    }

    //should just fetch from DB
    getUpdates = _ => {
        fetch('localhost:4006/projUpdates')
            .then(response => response.json())
            .then(response => this.setState({projectUpdates : response.data }))
            .catch(err => console.log(err))
    } 



    render(){
        const {projectUpdates} = this.state;

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Project</th>
                        <th>Description</th>
                    </tr>
                </thead>
            </Table>
        )

    }
}

export default notifTable;