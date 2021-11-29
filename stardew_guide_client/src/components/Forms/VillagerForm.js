import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class VillagerForm extends Component {
    state = {
        image: null,
        name: "",
        gifts: "",
        heart_event_triggers: [],
        marriage: false,
        birthday: "",
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
                <h1>Add a new villager: </h1>
                <h3>Choose which Stardewvalley this villager belongs to: </h3> 
                
                <StardewmodForm />
            <form onSubmit = {this.handleSubmit}>
                <label>Image:</label>
                <input type = "file" />
                <br></br>

                <label>Villager Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Birthday: </label>
                <input type = "text" name = "birthday" onChange = {this.handleChange} />
                <br></br>

                <label>Best Gifts: </label>
                <input type = "text" name = "gifts" onChange = {this.handleChange} />
                <br></br>

                <label>Heart levels needed for events: </label>
                <input type = "number" name = "heart_event_triggers" onChange = {this.handleChange} />
                {/* Need a way to add more to this ^^^^ for an array. */}
                <br></br>

                <label>Marriagable? </label>
                Yes<input type = "checkbox" name = "marriage" onChange = {this.handleChange} />
                <br></br>
                
                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (VillagerForm)