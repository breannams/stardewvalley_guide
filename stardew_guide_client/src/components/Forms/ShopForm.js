import { Component } from "react";
import {connect} from 'react-redux'

class ShopForm extends Component {
    state = {
        name : "",
        open_hours: "",
        days_closed: "",
        inventory: "",
        extra_info: ""
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
                <h1>Add a new shop: </h1>
                <h3>Choose which Stardewvalley this shop belongs to: </h3> 
                
                <StardewmodForm />

                <form onSubmit = {this.handleSubmit}>
                    <label>Name:</label>
                    <input type = "text" name = "name" onChange = {this.handleChange}/>
                    <br></br>

                    <label>Hours Open: </label>
                    <input type = "text" name = "open_hours" onChange = {this.handleChange} />
                    <br></br>

                    <label>Days closed: </label>
                    <input type = "text" name = "days_closed" onChange = {this.handleChange} />
                    <br></br>

                    <label>Inventory: </label>
                    <input type = "text" name = "inventory" onChange = {this.handleChange} />
                    <br></br>
                    
                    <label>Extra Info: </label>
                    <input type = "text" name = "extra_info" placeholder = "Ex. Clint's shop allows for tool upgrades: need 5 bars of copper,iron,gold, or iridium etc." onChange = {this.handleChange} />
                    <br></br>

                    <input type = "submit" value = "Create" />
                </form>
            </>
        )
    }
}

export default connect(null, {}) (ShopForm)