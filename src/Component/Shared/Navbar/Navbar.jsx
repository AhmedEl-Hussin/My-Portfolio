
export default function Navbar() {
    return (
        <div className="text-white navbar-Style ">
            <nav className="navbar navbar-expand-lg  ">
                <div className="container">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse  navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">

                            <li className="nav-item ">
                                <a className="nav-link captionNavbar  " href="/home">
                                    <i className="fa-solid fa-house iconNav"></i>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link captionNavbar" href="/about">
                                    <i className="fa-solid fa-user iconNav"></i>
                                </a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link captionNavbar" href="#">
                                    <i className="fa-solid fa-list-check iconNav"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link captionNavbar" href="#">
                                    <i className="fa-solid fa-diagram-project iconNav"></i>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link captionNavbar" href="#">
                                    <i className="fa-solid fa-phone iconNav"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
