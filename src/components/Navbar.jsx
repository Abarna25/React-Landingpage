import React from 'react'
import logo from '../assets/logo.png'
import {useNavigate,useNavigation} from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    const navigate = useNavigate();
  return (
    <div className='header'>
        <div className='container1'>
        <img src={logo} alt="logo"></img>
        <h1>Edhub</h1>
        </div>
        <div className='nav'>
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/About')}>About</li>
                <li onClick={() => navigate('/Services')}>Services</li>
                <li onClick={() => navigate('/Contacts')}>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar