import React, { useState } from 'react'
import "./Signup.css"
import dog from "../../image/registration.jpeg"
import logo from "../../image/logo.png"

import Patients from "./Patient/Patient"
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import Credentials from './Veterinarian/Credentials'
import Locationpet from './Patient/Locationpet'
import { doApiMethod } from '../../services/apiService'

function Signup() {
    const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

    let [currentStep, setCurrentStep] = useState(0);

    const onSubmit = (Args) => {
        console.log(Args);
        // let url = URL_API + "/users/signup";
        // let data = await doApiMethod(url, "POST", Args);
        // console.log(data);
    }

    const currentComponent = () => {
        switch (currentStep) {
            case 1:
                return <Locationpet />;
            case 2:
                return <Credentials />;
            default:
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === 0 &&
                <>
                    <img src={dog} className="registration" />
                    <div className="registrationselection">
                        <img src={logo} />
                        <p>
                            Pet-Care is an innovative pet wellness platform that connects pet parents to a marketplace of licensed veterinary professionals for video, chat and phone enabled appointments.<br /> For everyone, anytime, day or night.
                        </p>
                        <div className="buttons">
                            <Button onClick={() => { setValue("role", "vet"); setCurrentStep(1) }} className="buttons_click">I'm a Vet</Button>
                            <Button onClick={() => { setValue("role", "vet"); setCurrentStep(1) }} className="buttons_click" >
                                I'm a Pet Parent</Button>
                        </div>
                        <div className="signin">
                            Sign in to an existing account
                        </div>
                    </div>
                </>
            }
            <div>
                {currentComponent()}
            </div>
            <Button type="submit">
                Send
            </Button>
        </form>
    )
}

export default Signup