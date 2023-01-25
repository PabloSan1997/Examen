import React from "react";
import { Micontexto } from "../contexto";
import './index.css'
function Lista(props){
    
    return(
        <div className="filaPregunta">
            <div className="caja uno"><p className="preguntas">{props.numero} {props.nombre}</p></div>
            <div className="caja dos">{props.respuestas.map(hola=>
                (
                <div key={hola} className="opciones">
                    <p className="texto" key={hola}>{hola}</p>
                </div>
                ))}</div>
        </div>
    );
}
export{Lista}