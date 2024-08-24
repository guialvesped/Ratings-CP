import React from "react";
import ("./game.css")
import estrela1 from '../../assets/img/estrela1.svg'
import estrela2 from '../../assets/img/estrela2.svg'
import capa from '../../assets/img/ft_capa.jpg'
import gameplay from '../../assets/img/ft_gameplay.jpg'


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
                        <img src={estrela1} alt="estrela de avaliação" />
                        9,6/10
                    </p>
                </div>
                <div className="aval2">
                    SUA AVALIAÇÃO
                    <p>
                        <img src={estrela2} alt="Estrela aval cliente" />
                        Avaliar
                    </p>
                </div>
            </div>
            <div className="photo">
                <img src={capa} alt="Foto da capa do jogo" />
                <img src={gameplay} alt="Foto da gameplay do jogo" />
            </div>
        </div>
        </>
    )
}

export default Game