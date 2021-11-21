import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core"

import Patients from '../../page/Signup/Patient/Patient'
import Accountpet from "../../page/Signup/Patient/Accountpet"
import Locationpet from '../../page/Signup/Patient/Locationpet'
import Paypet from '../../page/Signup/Patient/Paypet'
import Planepet from '../../page/Signup/Patient/Planepet'
import "./Navbarpet.css"


const Navbarpet = () => {

    const useStyles = makeStyles({
        root: {
            width: "50%",
            borderRadius: "40px 40px 40px",
            margin: "7rem 33rem",
            boxShadow: "0 15px 50px 0.17px rgba(0, 0, 0, 0.05)",
            position: "absolute",
            "& .MuiStepIcon-root.MuiStepIcon-active": {
                color: "#403897"
            }
        }
    })

    const [activeStep, setActicveStep] = useState(0)

    const handleNext = () => {
        setActicveStep(prevActiveStep => prevActiveStep + 1)
    }

    const classes = useStyles();

    function getSteps() {
        return ["Acoount", "Pet", "Location", "Plan", "Payment"]
    }
    const steps = getSteps();
    function getStepsContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <Accountpet />;
            case 1:
                return <Patients />;
            case 2:
                return <Locationpet />;
            case 3:
                return <Planepet />;
            case 4:
                return <Paypet />;
            default: return "Unchnown Step";
        }


    }

    return (
        <div>
            <div className="maim-header">
            </div>
            <div className={classes.root}  >
                <Stepper activeStep={activeStep} alternativeLabel style={{ borderRadius: "25px 25px 0 0" }}>
                    {steps.map(lable => (
                        <Step key={lable} className="step">
                            <StepLabel>
                                {lable}
                            </StepLabel>

                        </Step>
                    ))}
                </Stepper>
                <br />
                {activeStep == steps.length ? "The Steps Complate" : (
                    <>
                        {getStepsContent(activeStep)}
                        <Button onClick={handleNext} className="button">
                            {activeStep === steps.length ? "Finish" : "Next"}
                        </Button>
                    </>
                )}
            </div>
        </div>


    )
}

export default Navbarpet
