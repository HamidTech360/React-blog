import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'



const Footer =()=>{
 
    return(
    <footer className="footer-section">
        <div className="container">
            <div className="footer-text">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ft-about">
                            <div className="logo">
                             
                            </div>
                            <p>We inspire and enrich the souls<br /> with astobishing diets</p>
                            <div className="fa-social">
                                <NavLink to="#"><i className="fa fa-facebook"></i></NavLink>
                                <NavLink to="#"><i className="fa fa-twitter"></i></NavLink>
                                <NavLink to="#"><i className="fa fa-tripadvisor"></i></NavLink>
                                <NavLink to="#"><i className="fa fa-instagram"></i></NavLink>
                                <NavLink to="#"><i className="fa fa-youtube-play"></i></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-contact">
                            <h6>Contact Us</h6>
                            <ul>
                                <li>+234 7015713905</li>
                                <li>Owolabihammed2001@gmail.com</li>
                                <li>Obafemi Awolow University, Ile-Ife, Osun State, Nigeria.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 offset-lg-1">
                        <div className="ft-newslatter">
                            <h6>New latest</h6>
                            <p>Get the latest updates and offers.</p>
                            <form className="fn-form" onSubmit={(e)=>e.preventDefault()}>
                                <input type="text" placeholder="Email"/>
                                <button type="submit"><i className="fa fa-send"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="copyright-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <ul>
                            <li><NavLink to="#">Contact</NavLink></li>
                            <li><NavLink to="#">Terms of use</NavLink></li>
                            <li><NavLink to="#">Privacy</NavLink></li>
                            <li><NavLink to="#">Environmental Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
                        <div className="co-text"><p>
                            Copyright All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <NavLink to="#" >MedaWeb Software</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</footer>
    )

 }

export default Footer