import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class CropForm extends Component {
    state = {
        image: null,
        name: "",
        grow_time: 0,
        buy_price: 0,
        sell_price: 0,
        restores: "",
        used_in: "",
        giant_crop: false,
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
             <h1>Add a new crop:</h1>
                <h3>Choose which Stardewvalley this crop belongs to: </h3> 
                <StardewmodForm />

            <form onSubmit = {this.handleSubmit}>
                <label>Crop Image:</label>
                <input type = "file" />

                <label>Crop Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Grow Time: </label>
                <input type = "number" name = "grow_time" onChange = {this.handleChange} placeholder = "Ex. 10 days"/>
                <br></br>
                
                <label>Buy Price: </label>
                <input type = "number" name = "buy_price" onChange = {this.handleChange} />
                <br></br>

                <label>Sell Price: </label>
                <input type = "number" name = "sell_price" onChange = {this.handleChange} />
                <br></br>

                <label>Restores: </label>
                <input type = "text" name = "restores" onChange = {this.handleChange} />
                <br></br>

                <label>Used in: </label>
                <input type = "text" name = "used_in" onChange = {this.handleChange} />
                <br></br>

                <label>Can be turned into a Giant Crop: </label>
                <input type = "checkbox" name = "giant_crop" onChange = {this.handleChange} />
                <br></br>
                
                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (CropForm)