import React from "react";
import "./footer.css"
import logo_rato from '../../assets/img/Logo-rato.png'
const Footer : React.FC = () => {
    return (
        <>
        <footer>
            <div>
                <img src={logo_rato} alt="" />            
            </div>
            <div className="empresa">
                <div className="contato">
                    COMPANY
                    <ul>
                        <li>About Us</li>
                        <li>Partnership</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="contato">
                    COMPANY
                    <ul>
                        <li>About Us</li>
                        <li>Partnership</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="contato">
                    COMPANY
                    <ul>
                        <li>About Us</li>
                        <li>Partnership</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer