import React from "react";
import ("./game.css")

const Game : React.FC = () => {
    return(
        <>
        <div className="game">
            <div className="desc">
                <div className="tittle">
                    GOD OF WAR: RAGNARÖK
                </div>
                <div className="aval1">
                    AVALIAÇÃO DA RATINGS
                    <p>
                        <img src="../public/img/estrela1.svg" alt="estrela de avaliação" />
                        9,6/10
                    </p>
                </div>
                <div className="aval2">
                    SUA AVALIAÇÃO
                    <p>
                        <img src="../public/img/estrela2.svg" alt="Estrela aval cliente" />
                        Avaliar
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src="../public/img/ft_capa.jpg" alt="Foto da capa do jogo" />
                <img src="../public/img/ft_gameplay.jpg" alt="Foto da gameplay do jogo" />
            </div>
        </div>
        </>
    )
}

export default Game