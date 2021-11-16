import { Component } from "react";
import {connect} from 'react-redux'

class RecipeForm extends Component {
    state = {
        image: null,
        name: "",
        ingredients: "",
        restores: "",
        buffs: "",
        recipe_sources: "",
        loved_by: "",
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
                <h1>Add a new recipe: </h1>
                <h3>Choose which Stardewvalley this recipe belongs to: </h3> 
                
                <StardewmodForm />
            <form onSubmit = {this.handleSubmit}>
                <label>Image:</label>
                <input type = "file" />
                <br></br>

                <label>Name: </label>
                <input type = "text" name = "name" onChange = {this.handleChange} />
                <br></br>

                <label>Ingredients: </label>
                <input type = "text" name = "ingredients" onChange = {this.handleChange} />
                <br></br>

                <label>Restores: </label>
                <input type = "text" name = "restores" onChange = {this.handleChange} />
                <br></br>

                <label>Buffs: </label>
                <input type = "text" name = "buffs" onChange = {this.handleChange} />
                <br></br>

                <label>Recipe Source(s): </label>
                <input type = "text" name = "recipe_sources" placeholder = "Ex. Mail from Evelyn" onChange = {this.handleChange} />
                <br></br>

                <label>Loved by: </label>
                <input type = "text" name = "loved_by" onChange = {this.handleChange} />
                <br></br>
                
                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (RecipeForm)