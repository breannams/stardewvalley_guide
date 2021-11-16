import { Component } from "react";
import {connect} from 'react-redux'

class TreeForm extends Component {
    state = {
        image: null,
        name: "",
        growth_time: 0,
        season: "",
        price: 0,
        produces: "",
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
                <h1>Add a new tree: </h1>
                <h3>Choose which Stardewvalley this tree belongs to: </h3> 
                
                <StardewmodForm />
            <form onSubmit = {this.handleSubmit}>
                <label>Image:</label>
                <input type = "file" />
                <br></br>

                <label>Tree Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Growth Time (days): </label>
                <input type = "number" name = "growth_time" onChange = {this.handleChange} />
                <br></br>

                <label>Season(s): </label>
                <input type = "text" name = "season" onChange = {this.handleChange} />
                <br></br>
                
                <label>Price: </label>
                <input type = "number" name = "price" onChange = {this.handleChange} />
                <br></br>

                <label>Produces: </label>
                <input type = "text" name = "produces" onChange = {this.handleChange} />
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

export default connect(null, {}) (TreeForm)