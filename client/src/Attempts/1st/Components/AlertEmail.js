import React, { Component } from 'react';
import axios from 'axios';
import * as emailjs from 'emailjs-com';
import {Link} from "react-router-dom";

class AlertMessage extends Component {
    constructor(props){
    super(props);
    this.state = {
        asset: props.asset,
        to_name: '',
        from_name: '',
        message: '',
        to_email: ''
    }

   
    this.noButton = this.noButton.bind(this)
    this.createMessage = this.createMessage.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
    }
    // camontano89@gmail.com

    createMessage(){


        this.setState({ 
            [this.state.from_name] : 'Automated Machine',
            [this.state.message] : `Asset #: ${this.state.asset} is having dangerous readings a workorder has been issued and all your team has been notified`,
            [this.state.to_name] : 'Denylson',
            [this.state.to_email] : 'dennyfuentes88@gmail.com'
        })
        this.sendMessage()
    }


    sendMessage(){

        const templateId = "template_8q0z1ui";
        const userId = "user_fqJBawjFdyHwpJHq7Y58G";

         var emails = ['camontano89@gmail.com', 'dennyfuentes88@gmail.com']
        console.log(emails)

        var email = {
            'to_name': 'Denylson',
            'from_name': 'Automated Machine',
            'message': `Asset #: ${this.state.asset} is having dangerous readings a workorder has been issued and all your team has been notified`,
            'to_email' : 'dennyfuentes88@gmail.com'
        }

        emailjs.send("service_14jzr0n", templateId, email, userId).then((res)=>{console.log(res.text);
                    console.log(email);
                }, (err)=>{
                    console.log(err.text);
                })
       
        
    }

  

    noButton(){
        console.log("NO Clicked")
    }


    render(){
        return(
            <div>
                <h1>Alert</h1>
                <h3>Asset: {this.state.asset} is in danger would you like to notify fellow employees</h3>
                <button onClick = {this.createMessage}>Yes</button>
                <Link to = {'/'}> <button onClick = {this.noButton}>No</button> </Link>
            </div>
        )
    }
}

export default AlertMessage