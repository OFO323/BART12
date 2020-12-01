import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

class deleteWO extends Component{
    //instance of needed info to find desired WO tuple
    constructor(props){
        super(props);
        this.state = {
            w_projectid: '',
            w_WOnum: props.location.state.Workorder,
        }

        console.log(props)

    //onChange -> updates state of search bar content 
    //onSubmit -> what is submitted 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}
    //event : typing in search 
    onChange(event){
        this.setState({
            [event.target.name] : [event.target.value]
        })
    }

    onSubmit(){
        console.log("SUCCESSFULLY SUBMITTED FORM")

        //gather up all info entered
            const contents = [this.state.w_projectid, this.state.w_WOnum];

        //use axios.delete to call the api url 
        const url = `http://localhost:4006/${contents[0]}/${contents[1]}`;
        axios.delete(url, contents)

        this.setState({
            w_projectid : '',
            w_WOnum: 0
        })
    }

    //only need to account for project ID and WO# when searching to delete once completed 
    render(){
        return(
            <div>
                <h1>DELETE WO PAGE</h1>
                <h3>Delete Work Order</h3>
                <form onSubmit = {this.onSubmit}>
                <div>
                        <div className = 'form-group'>
                            <label>Project Id: </label>
                            <input 
                            type = 'text' 
                            className = 'form-control' 
                            name = 'w_projectid' 
                            value = {this.state.w_projectid}
                            placeholder = 'Project Id'
                            onChange = {this.onChange} />
                        </div>
                        <div className = 'form-group'>
                            <label>WO#</label>
                            <input 
                            type = 'number' 
                            className = 'form-control' 
                            name = 'w_WOnum' 
                            value = {this.state.w_WOnum}
                            placeholder = 'WO_num'
                            onChange = {this.onChange} />
                        </div>
                        
                    </div>
                    <div>
                        <input type = 'Submit' value = 'Delete Work Order'/>
                    </div>
                    </form>
            </div>


        )
    }
}  
   

export default deleteWO;