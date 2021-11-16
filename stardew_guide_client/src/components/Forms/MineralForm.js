import { Component } from "react";
import {connect} from 'react-redux'

class MineralForm extends Component {
    state = {
        image: null,
        name: "",
        description: "",
        sellprice: 0,
        location: "",
        used_in: "",
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
            <h1>Add a new mineral: </h1>
                <h3>Choose which Stardewvalley this mineral belongs to: </h3> 
                
                <StardewmodForm />
            <form onSubmit = {this.handleSubmit}>
                <label>Mineral Image:</label>
                <input type = "file" name = "image"/>
                <br></br>

                <label>Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Description: </label>
                <input type = "text" name = "description" onChange = {this.handleChange} />
                <br></br>

                <label>Sell Price: </label>
                <input type = "number" name = "sellprice" onChange = {this.handleChange} />
                <br></br>

                <label>Location: </label>
                <input type = "text" name = "location" onChange = {this.handleChange} />
                <br></br>

                <label>Used in: </label>
                <input type = "text" name = "used_in" onChange = {this.handleChange} />
                <br></br>


                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (MineralForm)