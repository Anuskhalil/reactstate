import React, { useState } from 'react'
import bulbOn from './On.png'
import bulbOff from './off.jpg'

function Btn() {

    const [light, setLight] = useState(false);
    const toggleLight = () => {
        setLight(!light)
    }


    return (
        <>
            <div className='App mt-5'>
                <h1>Light ON and OFF using state</h1>
                <div className='main-btn'>
                    <button className='btn btn-success mx-3' onClick={toggleLight}>{light?'bulbOn':'bulbOff'}</button>
                    <img src={light?bulbOn:bulbOff} id='bulb' alt="" />
                    
                </div>
            </div>

        </>
    )
}

export default Btn
