import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core"
import "./Navbarvet.css"
import Accountpet from '../../page/Signup/Patient/Accountpet'
import Photo from '../../page/Signup/Veterinarian/Photo'
import Locationvet from '../../page/Signup/Veterinarian/Locationvet'
import Credentials from '../../page/Signup/Veterinarian/Credentials'
import Phonevet from '../../page/Signup/Veterinarian/Phonevet'



const Navbarvet = () => {

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
        return ["Acoount", "Photo", "Location", "Credentials", "Phone"]
    }
    const steps = getSteps();


    function getStepsContent(stepIndex) {
        switch (stepIndex) {

            case 0:
                return <Accountpet />;
            case 1:
                return <Photo />;
            case 2:
                return <Locationvet />;
            case 3:
                return <Credentials />;
            case 4:
                return <Phonevet />;

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

export default Navbarvet