import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class BundleForm extends Component {
    state = {
        room: "",
        room_reward: "",
        name: "",
        requirements: "",
        bundle_reward: "",
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
                <h1>Add a new bundle:</h1>
                <h3>Choose which Stardewvalley this bundle belongs to: </h3> 

                <StardewmodForm />
                <form onSubmit = {this.handleSubmit}>
                    <h3>
                    <label>Bundle Name:</label>
                    <input type = "text" name = "name" onChange = {this.handleChange} />
                    <br></br>

                    <label>Room in Community Center(if it is a Joja Mart bundle just input "Joja Mart"): </label>
                    <input type = "text" name = "room" onChange = {this.handleChange} />
                    <br></br>

                    <label>Room Reward(if it is a Joja Mart bundle just put N/A)</label>
                    <input type = "text" name = "room_reward" onChange = {this.handleChange} />
                    <br></br>
                    
                    <label>Requirements to complete: </label>
                    <input type = "text" name = "requirements" onChange = {this.handleChange} />
                    <br></br>

                    <label>Bundle reward: </label>
                    <input type = "text" name = "bundle_reward" onChange = {this.handleChange}/>
                    <br></br>

                    <input type = "submit" value = "Create" />
                    </h3>
                </form>
            </>
        )
    }
}

export default connect(null, {}) (BundleForm)