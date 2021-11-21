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
import Phonevet from './Veterinarian/Phonevet'
import Locationvet from './Veterinarian/Locationvet'

function Signup() {
    const { register, formState: { errors, isValid }, handleSubmit, setValue } = useForm();
    let [currentStep, setCurrentStep] = useState(0);
    let [signupRole, setSignupRole] = useState("");
    const onSubmit = (Args) => {
        console.log(Args);
        // let url = URL_API + "/users/signup";
        // let data = await doApiMethod(url, "POST", Args);
        // console.log(data);
    }

    const currentComponent = () => {
        switch (currentStep) {
            case 1:
                if (signupRole === "user") return <Locationpet register={register} errors={errors} currentStep={currentStep} setCurrentStep={setCurrentStep} isValid={isValid} />;
                else return <Locationvet register={register} errors={errors} setCurrentStep={setCurrentStep} isValid={isValid} />;
            case 2:
                if (signupRole === "user") return <Patients register={register} errors={errors} />;
                else return <Phonevet register={register} errors={errors} setCurrentStep={setCurrentStep} />;
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
                            <Button onClick={() => { setValue("role", "vet"); setSignupRole("vet"); setCurrentStep(1) }} className="buttons_click">I'm a Vet</Button>
                            <Button onClick={() => { setValue("role", "vet"); setSignupRole("user"); setCurrentStep(1) }} className="buttons_click" >
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