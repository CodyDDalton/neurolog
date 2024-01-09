import React, { useState } from 'react';
import Astrid from '../images/astrid_default.png';
import Angry from '../images/angry_neuro.png';
import Celebrate from '../images/celebrate_neuro.png';
import Happy from '../images/happy_neuro.png';
import Meh from '../images/meh_neuro.png';
import Sad from '../images/sad_neuro.png';
import Sleepy from '../images/sleepy_neuro.png';
import Scared from '../images/scared_neuro.png';


const Log = () => {

    const feels = [
        {
            src: Happy,
            mood: "Happy"
        },
        {
            src: Celebrate,
            mood: "Celebratory"
        },
        {
            src: Sleepy,
            mood: "Sleepy"
        },
        {
            src: Meh,
            mood: "Meh"
        },
        {
            src: Angry,
            mood: "Angry"
        },
        {
            src: Sad,
            mood: "Sad"
        },
        {
            src: Scared,
            mood: "Scared"
        }
    ]

    const setMood = (e) => {
        console.log(e.target.value);
        localStorage.setItem("mood", e.target.value)
    }

    return(
        <div id="log-space" style={{ width:'350px',}}>
            <img src={Astrid} alt="Astrid" style={{ width:'75%' }}/>
            <p id="log-prompt" style={{  fontFamily:"'Roboto Slab', serif", color:'white', textTransform:'uppercase' }}>How are you feeling?</p>
            <div className="moods" style={{ marginBottom:'2%', display:'flex', flexDirection:'row', width:'100%'}}>
                {feels.map((feel) => <input type="image" src={feel.src} value={feel.mood} style={{ width:'14%' }}onClick={((e) => setMood(e))}></input>)

                }
                
            </div>
            <textarea id="log-body" type="text" maxLength="150" style={{ width:'100%', marginBottom:'2%'}}></textarea>
        </div>
    )
}

export default Log;