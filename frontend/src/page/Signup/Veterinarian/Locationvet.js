
import React, { Component } from 'react'
import { Button, Checkbox, Form, Select } from 'semantic-ui-react'
import "./Locationvet.css"


function Locationvet({ register, errors, setCurrentStep, isValid }) {

    return (
        <div>
            <div className="location">
                <header>Where are you located ?</header>
                <div className="location_input">
                    <Form>
                        <Form.Field>
                            <label>Address</label>
                            <input {...register("address", { required: true })} placeholder='Address' />
                            {errors.address?.type === 'required' && <span className="text-danger">First name is required</span>}
                        </Form.Field>
                        <Form.Field>
                            <label>Address Line 2 </label>
                            <input placeholder='Address' />
                        </Form.Field>
                        <Form.Group widths='equal'>
                            <input
                                {...register("city", { required: true })}
                                fluid
                                id='form-subcomponent-shorthand-input-city'
                                label='City'
                                placeholder='City'
                            />
                            {errors.city?.type === 'required' && <span className="text-danger">First name is required</span>}
                            <input
                                {...register("state")}
                                fluid
                                id='form-subcomponent-shorthand-input-state'
                                label='State'
                                placeholder='State'
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <input
                                {...register("country")}
                                fluid
                                id='form-subcomponent-shorthand-input-country'
                                label='Country'
                                placeholder='Country'
                            />
                            <input
                                {...register("zip")}
                                fluid
                                id='form-subcomponent-shorthand-input-last-name'
                                label='Zip code'
                                placeholder='Zip code'
                            />
                        </Form.Group>
                    </Form>
                </div>
                <Form.Button onClick={() => {setCurrentStep(cur => cur - 1) }} className="backbutton">Back</Form.Button>
                <Form.Button onClick={() => {setCurrentStep(cur => cur + 1) }} className="nextbutton">Next</Form.Button>
            </div>
        </div>
    )
}


export default Locationvet