import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class FishForm extends Component {
    state = {
        image: null,
        name: "",
        location: "",
        time: "",
        season: "",
        weather: "",
        difficulty: "",
        used_in: "",
        sell_price: 0,
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
                <h1>Add a new fish: </h1>
                <h3>Choose which Stardewvalley this fish belongs to: </h3> 
            
                <StardewmodForm />

            <form onSubmit = {this.handleSubmit}>
                <label>Fish Image:</label>
                <input type = "file" />
                <br></br>

                <label>Fish Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Location: </label>
                <input type = "text" name = "location" onChange = {this.handleChange} />
                <br></br>

                <label>Time available: </label>
                <input type = "text" name = "time" onChange = {this.handleChange} />
                <br></br>

                <label>Season(s) available: </label>
                <input type = "text" name = "season" onChange = {this.handleChange} />
                <br></br>

                <label>Weather available: </label>
                <input type = "text" name = "weather" onChange = {this.handleChange} />
                <br></br>

                <label>Difficulty Rating: </label>
                <input type = "text" name = "difficulty" onChange = {this.handleChange} />
                <br></br>

                <label>Used in: </label>
                <input type = "text" name = "used_in" onChange = {this.handleChange} />
                <br></br>

                <label>Sell Price: </label>
                <input type = "number" name = "sell_price" onChange = {this.handleChange} />
                <br></br>

                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (FishForm)