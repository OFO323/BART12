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

class UpdateTable extends Component{
    
   constructor(props){
       super(props);
       this.state = {  
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
        //console.log(this.state)

        return(
            <Table striped bordered hover variant = "dark">
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


export default UpdateTable;

