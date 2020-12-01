import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

//import Table from 'react-bootstrap/Table';



function Workorder(props){
    return(
        <Fragment>
                <td> {props.w_projectid} </td>
                <td> {props.w_WOnum} </td>
                <td> {props.w_desc} </td>
                <td> {props.w_status} </td>
                <td> {props.w_reportdate} </td>
                <td> {props.w_location} </td>
                <td> {props.w_type} </td>
        </Fragment>
    )

}

export default Workorder;
