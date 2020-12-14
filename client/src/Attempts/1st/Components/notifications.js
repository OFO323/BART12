import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment'
import Table from 'react-bootstrap/Table';



const ProjNotifications = item => (
    <tr>
        <td>{item.projectNotifs.projID}</td>
        <td>{item.projectNotifs.name}</td>
        <td>{item.projectNotifs.phase}</td>
        <td>{item.projectNotifs.time_at}</td>
    </tr>
)

class NotifTable extends Component{
    
   constructor(props){
       super(props);
       this.state = {  
        type : this.props.type,        //specifiy notification type [danger, info, etc]
        projectNotifs : []
    }
    //console.log(props)
   }

    //once compnent mounts data is pulled from DB
    componentDidMount(){
        this.getNotifs();
    }

    NotifList(){
        return this.state.projectNotifs.map((curr, index) => {
            return <ProjNotifications projectNotifs = {curr} key = {index} />
        });
    }

    //should just fetch from DB
    getNotifs = () => {

        var date = moment().utcOffset('0').format('YYYY-MM-DD');
        console.log(date)

        fetch(`http://localhost:4006/projNotification/${date}/${this.state.type}`)
            .then(res => res.json())
            .then(projectNotifs => this.setState({projectNotifs}))
            .catch(err => console.log(err))
    } 



    render(){
        console.log(this.state)

        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Project ID</th>
                        <th>Name</th>
                        <th>Phase</th>
                        <th>Updated At</th>
                    </tr>
                </thead>
                <tbody>
                {this.NotifList()}
                </tbody>
            </Table>
        )

    }
}

export default NotifTable;
