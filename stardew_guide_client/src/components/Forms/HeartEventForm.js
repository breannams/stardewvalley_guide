import { Component } from "react";
import {connect} from 'react-redux'

class HeartEventForm extends Component {
    state = {
        villager_id: null,
        heart_number: 0,
        description: "",
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
              <h1>Add a new heart event: </h1>
                <h3>Choose which Villager this heart belongs to: </h3> 
                
               {/* Hmm not sure how I want to handle this one yet. */}

            <form onSubmit = {this.handleSubmit}>
                <label>How many heart levels needed to trigger event: </label>
                <input type = "number" name = "heart_number" onChange = {this.handleChange} />
                <br></br>

                <label>Event description: </label>
                <input type = "text" name = "description" onChange = {this.handleChange} />
                <br></br>

                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (HeartEventForm)