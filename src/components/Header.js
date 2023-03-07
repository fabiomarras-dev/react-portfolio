import React from "react";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h2>Web Developer</h2>
                <Typed
                    className="typed-text"
                    strings={['Laravel', 'PHP', 'React', 'Bootstrap', 'Javascript']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
                
                <Link to="contactme" offset={-80} className="btn-main-offer">Contact Me</Link>
            </div>
        </div>
    )
}

export default Header;
