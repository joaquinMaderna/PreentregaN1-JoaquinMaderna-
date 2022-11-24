import React from "react";
import Navbar from "./NavBar";
import CarWidget from "./CartWidget";

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div  className="col-md-6" >
                    <Navbar></Navbar>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-end' >
                    <CarWidget></CarWidget>
                </div>
            </div>
        </div>
    )
}

export default Header;