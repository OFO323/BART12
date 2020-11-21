import React, { Component } from 'react'

function ARow(props){
    return(
        <div>
        <th className = "list-inline" ></th>
            <td class="list-inline-item"> {props.projectId}</td>
            <td class="list-inline-item"> {props.dept} </td>
            <td class="list-inline-item"> {props.meterName} </td>
            <td class="list-inline-item"> {props.reading} </td>
            <td class="list-inline-item"> {props.date} </td>
        </div>
    )
}

export default ARow