import "./coment.css"

interface ComentProps {
    usuario : string
    tittle : string
    data ?: string
    children ?: any
    likes : number
    deslike : number
    spoiler : boolean
}
function Coment( props: ComentProps){
    return(
        <>
        <div className="box_coment">
            <div className="desc_aval">
                <p id="tittle_aval">AVALIAÇÃO EM DESTAQUE</p>
                <p id="star">
                    <img src="../public/img/estrela1.svg" alt="estrela de avaliação" />
                    10<a>/10</a>
                </p>
            </div>
            <div className="user_data">
                <p id="nome">
                    {props.usuario}
                </p>
                <p id="date">
                    {props.data}
                </p>
            </div>
            <div className="comentario">
                <p id="titulo">
                    {props.tittle}
                </p>
                {props.spoiler ? (
                    <p>
                        <a className="spoilerStyle">
                            Warning: Spoilers! <img src="../public/img/seta_girada.svg"></img>
                        </a>
                    </p>
                ):(
                    <p id="texto">
                        {props.children}
                    </p>
                )}
            </div>
            <div className="like-menu">
                <div className="likes">
                    <img src="../public/img/joinha.svg" alt="Like" />
                    {props.likes}
                    <img src="../public/img/deslike.svg" alt="Deslike" />
                    {props.deslike}
                </div>
                <div className="menu_3pt">
                    <img src="../public/img/menu_3p.svg" alt="Menu de 3 pontos" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Coment