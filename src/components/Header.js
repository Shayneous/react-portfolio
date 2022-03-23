import { MenuOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import Contact from './Contact'
import { Data } from './Data'


const Header = () => {

    const [open,setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }
    return (
        <div className='header'>
            <nav>

                <div className="logo">
                    <h1>Shayneous</h1>
                </div>

                <ul className='ul-items'>
                    <li>
                        <Link to='#'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    <div className="hamburger-menu">
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div>
                </ul>
            </nav>

            <nav className={open ? 'slider active' : 'slider'}>
                <ul className='slider-ul' onClick={showMenu}>
                    {Data.map((item,index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>


        </div>
    )
}

export default Header