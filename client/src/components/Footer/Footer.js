import React from "react";
import "./Footer.css";

const Footer = () => (
<footer className= "Footer page-footer font-small blue" >
        <div className= "footerTop container-fluid text-center text-md-left" > 
            <div className="row col-12">
                <div className="mission col-6">
                    <h5 className="footerTitle text-uppercase">Mission Statement</h5>
                        <p>The Book Worm believes that everyone should have easy access to a great education, providing anyone access to books near you free of charge. </p>
                </div>

                <div className="devs float-right col-6">
                    <h5 className="footerTitle float-right text-uppercase">Developers</h5>
                    <ul className="links list-unstyled">
                        <li>
                            <a href="#!">Derek F.</a>
                        </li>
                        <li>
                            <a href="#!">Derrick G.</a>
                        </li>
                        <li>
                            <a href="#!">Ida J.</a>
                        </li>
                        <li>
                            <a href="#!">Nate J.</a>
                        </li>
                        <li>
                            <a href="#!">Ravish R.</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
            <div className="footer-copyright py-3 text-center">
                <h4 className="footerTitle">Copyright © 2018 The Book Worm Company</h4>
            </div>
    </footer>
);

export default Footer;
