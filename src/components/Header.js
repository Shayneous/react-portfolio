import { MenuOutlined } from '@material-ui/icons'
import { React } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>

                <div className="logo">
                    <h1>Shayne Ganness</h1>
                </div>

                <ul className='ul-items'>
                    <li>
                        <Link to='#'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    <div className="hamburger-menu">
                        <MenuOutlined className='menu'/>
                    </div>
                </ul>
            </nav>

        </div>
    )
}

export default Header