import { Component } from "react";
import {connect} from 'react-redux'

class Form extends Component {
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
            <form onSubmit = {this.handleSubmit}>
                <label>Image:</label>
                <input type = "file" />
                <input type = "submit" value = "Create" />
            </form>
            </>
        )
    }
}

export default connect(null, {}) (Form)