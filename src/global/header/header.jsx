import React from 'react'
import {NavLink} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './header.css'
import 'font-awesome/css/font-awesome.css'


const Header = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" id="title" to="#">MedaWeb Blog</NavLink>
                <i className="fa fa-bars fa-1x toggler-icon" id="bars-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> </i>
                <div className="collapse navbar-collapse pull-right float-right" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li  className="nav-item " >
                        <NavLink className="nav-link active" id="nav-1" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li id="" className="nav-item">
                        <NavLink className="nav-link" id="nav-2" to="/postnew">post new article</NavLink>
                    </li>
                   
                    <li id="" className="nav-item">
                         <NavLink className="nav-link " id="nav-3" to="/" >About us</NavLink>
                    </li>
                </ul>
              
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Header