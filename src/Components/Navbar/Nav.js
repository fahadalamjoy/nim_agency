import React from 'react'
import './Nav.css'
// import {Link} from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link'
import logo from '../../images/logo.png'

const Nav = () => {
    return (
        <div className="container">
            <div className="containerNav">
                <Link to='/'><img src={logo} className="logo" alt='logo'/></Link>
                <div className='menu'>
                    <ul>
                        <li><Link className="link" to='/'>Home</Link></li>
                        <li><Link  smooth className="link" to='/#about'>About</Link></li>
                        <li><Link smooth className="link" to='/#services'> Services</Link></li>
                        <li><Link className="link" to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="getquote">
                <Link className="link" to='/contact'><p className="quote">Get Qoute</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
