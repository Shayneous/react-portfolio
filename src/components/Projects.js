import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React from 'react'
import './styles/Projects.css'
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.gif'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.png'
import p5 from './assets/p5.jpg'
import p6 from './assets/p6.jpg'


const Projects = () => {
    return (
        <section className='projects'>
        <div className="arrow-home">
            <Link to='/'><ArrowBack className='arrow'/></Link>
        </div>
            <h1>Projects</h1>
            <div className="cart-container">
                <div className="cart">
                    <img src={p1} alt="" />
                    <p>On-Demand CRM</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos non aspernatur dolorum ipsum corrupti, nihil, sunt veniam, eum fuga dicta ipsa reiciendis doloribus ullam expedita ad quod. Iste, sugaenese vitae..</h5>
                </div>

                <div className="cart">
                    <img src={p2} alt="" />
                    <p>Privacy Protectors</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto maiores quia tenetur placeat, assumenda pariatur incidunt quis! Minus quas accusamus explicabo nostrum suscipit aperiam pariatur.</h5>
                </div>

                <div className="cart">
                    <img src={p3} alt="" />
                    <p>Suspect</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, voluptate inventore veniam aliquid sed quia ea doloribus repellat at laudantium sequi. Nam reiciendis dolore, quo expedita incidunt corrupti</h5>
                </div>
                <a href="https://memestagram1.herokuapp.com/">
                    <div className="cart">
                    <img src={p4} alt="" />
                    <p>Memestagram</p>
                    <h5>Memestagram is a visual platform. The purpose of this application is to enable users to share images with their audience.</h5>
                    </div>
                </a>

                <div className="cart">
                    <img src={p5} alt="" />
                    <p>Project 5</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto maiores quia tenetur placeat, assumenda pariatur incidunt quis! Minus quas accusamus explicabo nostrum suscipit aperiam pariatur.</h5>
                </div>

                <div className="cart">
                    <img src={p6} alt="" />
                    <p>Project 6</p>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium excepturi fugiat incidunt, exercitationem illo non. Ipsum reiciendis unde quisquam eos? Quo corrupti voluptatibus doloremque, quos explicabo necessitatibus. Molestiae eius animi rerum hic earum tenetur esse Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, voluptate inventore veniam aliquid sed quia ea doloribus repellat at laudantium sequi. Nam reiciendis dolore, quo expedita incidunt corrupti</h5>
                </div>

            </div>
        </section>
    )
}

export default Projects