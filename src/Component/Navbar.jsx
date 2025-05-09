import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
 
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark  bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>   */}
                        <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                        <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                        <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                        <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>          
                        <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>          
                        <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>          
                    </ul>
                   
                    </div>
                </div>
             </nav>
        </>
    );
  
}

export default Navbar;
