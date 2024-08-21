import React from "react";
import "./header.css"
 const Header : React.FC = () => {
    return(
        <header className="header">
            <div className="logo">
                <img src="../public/img/Logo-rato.png" alt="logo do site" />
            </div>
            <nav>
                <img src="../public/img/menu-hamb.svg" alt="Menu" />
                MENU
            </nav>
            <div className="search">
                <img src="../public/img/lupa-search.svg" alt="Barra de pesquisa" />
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