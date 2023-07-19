import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FaInstagram /> <FaTwitter /> <FaFacebook /> <FaLinkedin />
            </div>
            <p> &copy; 2021 kameshpizza.com</p>
        </div>
    )
}

export default Footer
