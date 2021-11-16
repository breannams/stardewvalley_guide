import { Component } from "react";
import {connect} from 'react-redux'

class QuestForm extends Component {
    state = {

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
                <h1>Add a new quest: </h1>
                <h3>Choose which Stardewvalley this quest belongs to: </h3> 
                
                <StardewmodForm />
            <form onSubmit = {this.handleSubmit}>
                <label>Type:</label>
                <input type = "text" name = "type" onChange = {this.handleChange} />
                <br></br>

                <label>Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Description: </label>
                <input type = "text" name = "description" onChange = {this.handleChange} />
                <br></br>

                <label>Start by: </label>
                <input type = "text" name = "start_by" placeholder = "Ex. Help wanted sign" onChange = {this.handleChange} />
                <br></br>

                <label>Requirements: </label>
                <input type = "text" name = "requirements" onChange = {this.handleChange} />
                <br></br>

                <label>Rewards: </label>
                <input type = "text" name = "rewards" onChange = {this.handleChange} />
                <br></br>

                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (QuestForm)