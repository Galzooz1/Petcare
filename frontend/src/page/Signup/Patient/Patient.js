
import React, { Component } from 'react'
import "./Patient.css"
import { Button, Checkbox, Form, Select } from 'semantic-ui-react'


const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },

]

class Patients extends Component {



    render(

    ) {

        return (
            <div>

                <div className="patient">
                    <header>Tell us about your pet!!</header>

                    <div className="patientt_input">
                        <Form>

                            <Form.Field>
                                <label>Pet Name</label>
                                <input placeholder='Pet Name' />
                            </Form.Field>
                            <Form.Group widths='equal'>
                                <Form.Input fluid label='Species' placeholder='Species' />
                                <Form.Input fluid label='Primary Color' placeholder='Primary Color' />
                                <Form.Select
                                    control={Select}
                                    options={genderOptions}
                                    label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                                    placeholder='Gender'
                                    search
                                    searchInput={{ id: 'form-select-control-gender' }}
                                />
                            </Form.Group>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    id='form-subcomponent-shorthand-input-first-name'
                                    label='Weight'
                                    placeholder='Weight'
                                />
                                <Form.Input
                                    fluid
                                    id='form-subcomponent-shorthand-input-last-name'
                                    label='Age'
                                    placeholder='Age'
                                />
                            </Form.Group>
                        </Form>


                    </div>
                    <Form.Button className="nextbutton">Next</Form.Button>
                </div>
            </div>

        );
    }
}

export default Patients
// class Patients extends Component {

//     constructor() {
//         super()
//         this.state = {

//         }
//     }
//     render()
//     return(
//     

// }
