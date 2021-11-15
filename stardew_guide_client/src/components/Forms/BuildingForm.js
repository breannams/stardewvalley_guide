import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class BuildingForm extends Component {
    state = {
        image: null,
        name: "",
        cost: 0,
        use: "",
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
                <h1>Add a new building:</h1>
                <h3>Choose which Stardewvalley this animal belongs to: </h3> 
                <StardewmodForm />

                <form onSubmit = {this.handleSubmit}>
                    <h3>
                        <label>Building Image:</label>
                        <input type = "file" />
                        <input type = "submit" value = "Create" />
                        <br></br>

                        <label>Building Name: </label>
                        <input type = "text" name = "name" onChange = {this.handleChange} />
                        <br></br>

                        <label>Cost: </label>
                        <input type = "number" name = "cost" onChange = {this.handleChange} />
                        <br></br>

                        <label>Use:</label>
                        <input type = "text" name = "use" onChange = {this.handleChange} />
                        <br></br>

                        <input type = "submit" value = "Create" />
                    </h3>
                </form>
            </>
        )
    }
}

export default connect(null, {}) (BuildingForm)