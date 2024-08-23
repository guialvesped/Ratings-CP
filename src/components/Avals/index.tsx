import React from "react";
import Coment from "./Comentário";
import ("./avals.css")

const Avals : React.FC = () => {
    const spoilerStyle: React.CSSProperties = {
        backgroundColor: "#0E1015",
        padding: "10px",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#FF003F"
    };

    return(
        <>
        <div className="avals">
            <div className="enr">
                <div>
                    <img src="../public/img/seta.svg" alt="" />ENREDO
                </div>
                <p>
                    Kratos and his son Atreus face the oncoming Norse apocalypse, Ragnarok.
                </p>
            </div>
            <div className="review">
                <div className="av_tittle">
                    <p>
                        <img src="../public/img/seta.svg" alt="" />
                        AVALIAÇÕES DE USUÁRIOS
                    </p>
                    + Avaliar
                </div>
            </div>
            <div className="separa">
                <Coment usuario="CaioHalbert" tittle="What an incredible sequeal!" data="9 de novembro de 2022" likes={33} deslike={11} spoiler={false}>
                    A fantastic and strong continuation of its predecessor, God of War Ragnarök is not afraid to take unexpected turns,
                    or slow its pace for you to fully explore an environment. It has the same upgrading system as before, but with better
                    armor, in my opinion. Atreus is a little bit older now and it's so great to see everybody reprise their magnificent 
                    roles.I don't want to give away too much in this review, but it's definitely worth buying. One of the best looking 
                    games on PS5. It'll definitely be a game of the year contender with Elden Ring. If you're new to the series, I recommend 
                    you start with God of War (2018) If you have the dedication, you could always start from the very first one. They're all 
                    on the PS+ collection. I still have yet to beat this newest entry, but I wanted to spread the good word as soon as possible:
                    Ragnarök is here and it is beautiful.
                </Coment>
                <Coment usuario="ClaudiaRayara" tittle="The game took part of my soul..." data="14 de novembro de 2022" likes={24} deslike={6} spoiler={true}>
                    
                </Coment>
            </div>
        </div>
        </>
    )
}

export default Avals