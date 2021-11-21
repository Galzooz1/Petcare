import React from "react";
import "./Phonevet.css"

import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'
function Phonevet({setCurrentStep}) {

    return (
        <div className="phone">
            <div className="phone_header">Add your phone number</div>
            <div className="phone_subtitle">Please enter and verify your phone number. If you would like to receive SMS alerts use a mobile number.
                If your country code is not listed in the options, please contact support.</div>
            <div className="input_phone">
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Field className="country_code"
                            control={Input}
                            label='Country Code'
                            placeholder='Country Code'
                        />
                        <Form.Field
                            control={Input}
                            label='Phone number'
                            placeholder='Phone number'
                        />

                    </Form.Group>
                    <div>Verification method</div>
                    <Form.Field
                        control={Checkbox}
                        label='SMS'
                    />
                    <Form.Field
                        control={Checkbox}
                        label='CALL'
                    />
                    <Button type='submit'>Verify phone</Button>
                </Form>

                <Form.Button onClick={() => {setCurrentStep(cur => cur - 1) }} className="backbutton">Back</Form.Button>
            </div>
        </div>
    )
}

export default Phonevet