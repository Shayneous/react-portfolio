import React from 'react'
import './styles/About.css'
import game from './assets/game.gif'

const About = () => {
    return (
        <section className='about'>
            <h1 className='about-me'>About Me</h1>
            <div className="container-a">
                <div className="image-cont">
                    <img src={game} alt="" />
                </div>
                <div className="text-a">
                    <p>5 Years of Experience in Game Design and Development</p>
                    <p>Unity</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Sound Designer in FL Studio</p>
                </div>
            </div>
        </section>
    )
}

export default About
