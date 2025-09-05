import React from 'react';
import { Home, About, Experience, Skills, Awards, Contact } from './constants.jsx';
import './content.scss';

const Content = () => (
    <div className="portfolio-container">
        {/* Left Sidebar with Navigation */}
        <div className="sidebar">
            <div className="name-section">
                <h1>K.Chaitra</h1>
            </div>

            <nav>
                <ul className="nav-menu">
                    <li>
                        <button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                            About
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementById("skills").scrollIntoView({ behavior: "smooth" })}>
                            Skills
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementById("experience").scrollIntoView({ behavior: "smooth" })}>
                            Experience
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementById("awards").scrollIntoView({ behavior: "smooth" })}>
                            Awards
                        </button>
                    </li>
                    <li>
                        <button onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                            Contact
                        </button>
                    </li>
                </ul>
            </nav>

        </div>

        {/* Right Main Content */}
        <div className="main-content">
            <Home />
            <About />
            <Skills />
            <Experience />
            <Awards />
            <Contact />
        </div>
    </div>
);

export default Content;