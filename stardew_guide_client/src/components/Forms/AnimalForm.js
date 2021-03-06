import { Component } from "react";
import {connect} from 'react-redux'
import StardewmodForm from './StardewmodForm'

class AnimalForm extends Component {
    state = {
        image: null,
        name: "",
        cost: 0,
        produces: "",
        sell_price: 0,
        requirements: "",
        stardewvalley_id: 1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    handleSubmit = (event) => {
        event.preventDefault()
        let state = this.state
        debugger
    }

    render(){
        return(
            <>
                <h1>Add a new animal: </h1>

                <form onSubmit = {this.handleSubmit}>
               
                    <h3>
                        <br></br>
                        {/* need to add images to backend AR and grab stardew ID from mod form. */}
                        {/* <label>Animal Image:</label>
                        <input type = "file" onChange = {this.imageChange}/>
                        <button OnClick = {this.fileUploadHandler}>Upload</button>
                        <br></br> */}

                        <label>Animal Name: </label>
                        <input type = "text" name = "name" onChange = {this.handleChange} />
                        <br></br>

                        <label>Cost: </label>
                        <input type = "number" name = "cost"onChange = {this.handleChange} />
                        <br></br>
                        
                        <label>Produce: </label>
                        <input type = "text" name = "produces" onChange = {this.handleChange} />
                        <br></br>

                        <label>5 heart selling price: </label>
                        <input type = "number" name = "selling_price" onChange = {this.handleChange} />
                        <br></br>

                        <label>Requirements to purchase: </label>
                        <input type = "text" name = "requirements" onChange = {this.handleChange} />
                        <br></br>

                        <input type = "submit" value = "Create" />
                    </h3>
                </form>
            </>
        )
    }
}

export default connect(null, {}) (AnimalForm)