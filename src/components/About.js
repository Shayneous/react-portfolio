import React from 'react'
import './styles/About.css'
import game from './assets/game.gif'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'


const About = () => {
    return (
        <section className='about'>
            <div className="arrow-home">
            <Link to='/'><ArrowBack className='arrow'/></Link>
            </div>
            
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
