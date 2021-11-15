import { Component } from "react";
import {connect} from 'react-redux'

class FestivalForm extends Component {
    state = {
        name: "",
        date: "",
        time_location: "",
        description: "",
        purchases: "",
        stardewvalley_id: null
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render(){
        return(
            <>
                <h1>Add a new festival: </h1>
                <h3>Choose which Stardewvalley this festival belongs to: </h3> 
                
                <StardewmodForm />

            <form onSubmit = {this.handleSubmit}>
                <label>Festival Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Date:</label>
                <input type = "text" name = "date" onChange = {this.handleChange} />
                <br></br>

                <label>Time and Location: </label>
                <input type = "text" name = "time_location" onChange = {this.handleChange} />
                <br></br>

                <label>Description: </label>
                <input type = "text" name = "description" onChange = {this.handleChange} />
                <br></br>

                <label>Purchases available: </label>
                <input type = "text" name = "purchases" onChange = {this.handleChange} />
                <br></br>
                
                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (FestivalForm)