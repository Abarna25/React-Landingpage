import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const showWelcomeContent = !['/Home', '/About', '/Services', '/Contacts'].includes(location.pathname);


    return (
        <div className='content'>
          <div className='header'>
            <div className='container1'>
                <img src={logo} alt="logo" />
                <h1>LearnHub</h1>
            </div>

            <div className='nav'>
                <ul>
                    <li onClick={() => navigate('/Home')}>Home</li>
                    <li onClick={() => navigate('/About')}>About</li>
                    <li onClick={() => navigate('/Services')}>Services</li>
                    <li onClick={() => navigate('/Contacts')}>Contacts</li>
                </ul>
            </div>
            </div>

            {showWelcomeContent && (
                <div className='welcome-content'>
                    <h1>Welcome to LearnHub</h1>
                    <p>Unlock your potential with expert-led courses and interactive learning experiences.</p>
                    <p>Dive into a world of knowledge with personalized learning paths and hands-on projects. Learn from industry experts, collaborate with peers, and gain real-world skills to stay ahead.</p>
                    <p>Whether you're a student, professional, or lifelong learner, we have something for you. Start your journey today and shape a brighter future!</p>
                    <div className='buttons'>
                        <button>Explore Courses</button>
                        <button>Get Started</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
