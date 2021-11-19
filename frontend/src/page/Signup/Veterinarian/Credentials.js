import React from "react";
import "./Credentials.css"
import { Button, Checkbox, Form, Input } from 'semantic-ui-react'

function Credentials() {

    return (
        <div className="credentials_main">
            <div className="credentials_header">Your licenses</div>
            <div className='credentials_subtitle'>Add up to 10 jurisdictional licenses.
                If you hold multiple licenses in different jurisdictions,
                it's recommended to add each of them as it will increase your search result exposure.</div>
            <div className="license_header">
                Add a license
            </div>
            <div className="license_subtitle">
                Get started by adding a license to your account.
            </div>
            <div className="input_list">
                <Form>
                    <Form.Field>
                        <label>List number</label>
                        <input placeholder='List number' />
                    </Form.Field>
                    <Form.Group widths='equal'>
                        <Form.Field
                            id='form-input-control-first-name'
                            control={Input}
                            label='Country'
                            placeholder='Country'
                        />
                        <Form.Field
                            id='form-input-control-last-name'
                            control={Input}
                            label='State'
                            placeholder='State'
                        />
                    </Form.Group>
                </Form>
                <div className="education">
                    <div className="education_header">Education</div>
                    <div className="education_subtitle">Please enter your school name and graduating year.</div>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='School Name'
                                placeholder='School Name'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Graduating Year'
                                placeholder='Graduating Year'
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default Credentials