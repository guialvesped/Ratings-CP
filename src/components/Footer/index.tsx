import React from "react";
import "./footer.css"
const Footer : React.FC = () => {
    return (
        <>
        <footer>
            <div>
                <img src="../public/img/Logo-rato.png" alt="" />            
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