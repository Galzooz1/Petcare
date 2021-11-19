
import React, { Component } from 'react'
import { Button, Checkbox, Form, Select } from 'semantic-ui-react'
import "./Locationvet.css"


function Locationvet() {


    return (
        <div>

            <div className="location">
                <header>Where are you located ?</header>

                <div className="location_input">
                    <Form>
                        <Form.Field>
                            <label>Address</label>
                            <input placeholder='Address' />
                        </Form.Field>

                        <Form.Field>
                            <label>Address Line 2 </label>
                            <input placeholder='Address' />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-city'
                                label='City'
                                placeholder='City'
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-state'
                                label='State'
                                placeholder='State'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-country'
                                label='Country'
                                placeholder='Country'
                            />
                            <Form.Input
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Zip code'
                                placeholder='Zip code'
                            />
                        </Form.Group>
                    </Form>


                </div>
                <Form.Button className="nextbutton">Next</Form.Button>
            </div>
        </div>
    )
}


export default Locationvet