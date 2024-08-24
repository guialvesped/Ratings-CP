import React from "react";
import "./header.css"
import logo_rato from '../../assets/img/Logo-rato.png'
import menu_hamb from '../../assets/img/menu-hamb.svg'
import lupa from '../../assets/img/lupa-search.svg'

 const Header : React.FC = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src={logo_rato} alt="logo do site" />
            </div>
            <nav>
                <img src={menu_hamb}alt="Menu" />
                MENU
            </nav>
            <div className="search">
                <img src={lupa} alt="Barra de pesquisa" />
                <input type="text" placeholder="Search" />
            </div>
            <div className="login">
                <button>
                    LOGIN
                </button>
            </div>
        </header>
    )
 }

 export default Header