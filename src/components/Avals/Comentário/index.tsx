import "./coment.css"
import estrela1 from '../../../assets/img/estrela1.svg'
import seta_girada from '../../../assets/img/seta_girada.svg'
import joinha from '../../../assets/img/joinha.svg'
import deslike from '../../../assets/img/deslike.svg'
import menu_3p from '../../../assets/img/menu_3p.svg'
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
                    <img src={estrela1} alt="estrela de avaliação" />
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
                            Warning: Spoilers! <img src={seta_girada}></img>
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
                    <img src={joinha} alt="Like" />
                    {props.likes}
                    <img src={deslike} alt="Deslike" />
                    {props.deslike}
                </div>
                <div className="menu_3pt">
                    <img src={menu_3p} alt="Menu de 3 pontos" />
                </div>
            </div>
        </div>
        </>
    )
}
export default Coment