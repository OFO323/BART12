import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment'
import Table from 'react-bootstrap/Table';


//table pulls data from DB [projectUpdates table]
//projID, name, phase, time_at
const ProjNotifs = item => (
    <tr>
        <td>{item.projectNotifications.projID}</td>
        <td>{item.projectNotifications.name}</td>
        <td>{item.projectNotifications.phase}</td>
        <td>{item.projectNotifications.time_at}</td>
    </tr>
)

class Notifications extends Component{
    
   constructor(props){
       super(props);
       this.state = {  
        projectNotifications : [],
        type : ''
    }
   }

    //once compnent mounts data is pulled from DB
    componentDidMount(){
        this.getNotifs();
    }

    notifList(){
        return this.state.projectNotifications.map((curr, index) => {
            return <ProjNotifs projectNotifications= {curr} key = {index} />
        });
    }

    //should just fetch from DB
    getNotifs = () => {

        var date = moment().utcOffset('0').format('YYYY-MM-DD');
        //console.log(date)
        var disType = this.state.type
        console.log('This type is ' , disType)

        fetch(`http://localhost:4006/projNotification/${date}/${this.state.type}`)
            .then(res => res.json())
            .then(projectNotifications => this.setState({projectNotifications}))
            .catch(err => console.log(err))
    } 



    render(){
        //console.log(this.state)

        return(
            <Table striped bordered hover variant = "dark">
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Name</th>
                        <th>Phase</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                {this.notifList()}
                </tbody>
            </Table>
        )

    }
}


export default Notifications;

