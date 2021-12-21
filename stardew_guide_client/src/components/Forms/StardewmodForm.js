import { Component } from "react";
import {connect} from 'react-redux'
////make this form look like a box.
class Form extends Component {
    state = {
        name: ""
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
            <br></br>
            list out stardewvalley and mods here w/ bullet points
            or add a new stardew mod:
            <form onSubmit = {this.handleSubmit}>
                <label>Stardewvalley Name: </label>
                <input type = "text" onChange = {this.handleChange} />
                <input type = "submit" value = "Add" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (Form)