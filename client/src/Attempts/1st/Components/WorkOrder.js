import React from 'react';
import '../styles.css';
function Workorder(props){
    return(
        <div>
        <th className = "list-inline" ></th>
            <td class="list-inline-item"> {props.w_projectid} </td>
            <td class="list-inline-item"> {props.w_WOnum} </td>
            <td class="list-inline-item"> {props.w_desc} </td>
            <td class="list-inline-item"> {props.w_status} </td>
            <td class="list-inline-item"> {props.w_reportdate} </td>
            <td class="list-inline-item"> {props.w_location} </td>
            <td class="list-inline-item"> {props.w_type} </td>
        </div>

    )

}

export default Workorder;