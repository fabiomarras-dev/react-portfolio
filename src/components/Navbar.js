import React from 'react'

const Navbar = () => {
    return (   
        <nav className="navbar navbar-expand-lg shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/#"><h1>React Portfolio</h1></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-grip-lines"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Link</a>
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

export default Navbar
