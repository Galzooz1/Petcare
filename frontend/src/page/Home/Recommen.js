import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import "./Recommen.css"

import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'


function Recommen(props) {

    const people = [
        {
            name: "Nathan D.",
            recommen: "I was quite excited when the online appointment was made. It is a practical daily help. I have not had a decrease in the number of calls but CaptainVet is a service that complements well with my current schedule."
        },
        {
            name: "Nathan D.",
            recommen: "I was quite excited when the online appointment was made. It is a practical daily help. I have not had a decrease in the number of calls but CaptainVet is a service that complements well with my current schedule."
        },
        {
            name: "Nathan D.",
            recommen: "I was quite excited when the online appointment was made. It is a practical daily help. I have not had a decrease in the number of calls but CaptainVet is a service that complements well with my current schedule."
        },
        {
            name: "Nathan D.",
            recommen: "I was quite excited when the online appointment was made. It is a practical daily help. I have not had a decrease in the number of calls but CaptainVet is a service that complements well with my current schedule."
        },

    ]

    const [autoplay, setAutoplay] = useState(true);

    let pepoleCard = people.map(person => {

        return (

            <div className="Card">

                <p>{JSON.stringify(person.recommen).replace(/"/g, '')}</p>
                <p>{JSON.stringify(person.name).replace(/"/g, '')}</p>

            </div >


        )
    })

    return (

        <div>
            <Slide autoplay={autoplay}>
                <div >
                    {pepoleCard}
                </div>
            </Slide>

        </div >
    )
}
export default Recommen
