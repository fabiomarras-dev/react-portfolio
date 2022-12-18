import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (   
        <nav className="navbar navbar-expand-lg shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand" href="/"><h1>React Portfolio</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-grip-lines"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="home" offset={-110} className="nav-link" href="/#">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="aboutme" offset={-80} className="nav-link" href="/#">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="experience" offset={-100} className="nav-link" href="/#">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="projects" offset={-80} className="nav-link" href="/#">My Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contactme" offset={-80} className="nav-link" href="/#">Contact Me</Link>
                    </li>
                    </ul>
                    <ul className="navbar-nav ms-auto social-icons">
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/todoketee" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/fabio-marras-1911511b9/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
