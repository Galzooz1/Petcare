import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "./Accountpet.css"
import axios from "axios"


class Accountpet extends Component {

    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    changeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }


    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:4000/app/signup", registered).then(response => console.log(response.data))

        window.location({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (

            <div className="account">
                <header>Create a Pet Parent account</header>
                <p>Or sign in to an <a style={{ color: "blue" }}>existing account</a></p>
                <div className="account_input">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid label='First name' placeholder='First name' onChange={this.changeFirstName} value={this.state.firstName} />
                            <Form.Input fluid label='Last name' placeholder='Last name' onChange={this.changeLastName} value={this.state.lastName} />

                        </Form.Group>
                        <Form.Field>
                            <label>Email address</label>
                            <input placeholder='Email address' onChange={this.changeEmail} value={this.state.email} />
                        </Form.Field>
                        <Form.Input fluid label='Enter Password' placeholder='Enter Password' type='password' onChange={this.changePassword} value={this.changePassword} />
                        <Form.Input fluid label='Enter Re-type Password' placeholder='Enter Re-type Password' type='password' />
                    </Form>


                </div>
                <Form.Button className="nextbutton">Next</Form.Button>
            </div>
        )
    }


}

export default Accountpet