import { React } from 'react'
import './styles/Section.css'
import headshot from './assets/gamelab.png'


const Section = () => {
    return (
        <section className='main-section'>
            <div className='container'>


                <div className="text">
                    <h1>Hey! My name's</h1>
                    <h1 className='h1-big'>Shayne Ganness</h1>
                    <p>Game Designer with 5 years of experience and a newly established Full-Stack Web Developer</p>
                    <button className='text-button'>My Work</button>
                </div>
                <div className="headshot">
                    <img src={headshot} alt="" />"
                </div>
            </div>
        </section>
    )
}

export default Section