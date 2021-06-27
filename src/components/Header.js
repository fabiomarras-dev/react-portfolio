import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h2>Web Developer</h2>
                <Typed
                    className="typed-text"
                    strings={['Laravel', 'PHP', 'Bootstrap', 'Javascript']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop
                />
            </div>
        </div>
    )
}

export default Header;
