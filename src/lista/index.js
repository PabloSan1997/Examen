import React from "react";
import { Micontexto } from "../contexto";
import './index.css'
function Lista(props){
    const {cambiando, setNomas}=React.useContext(Micontexto);
    const cambiarEstado=(num)=>{
        cambiando(props.numero, num);
        setNomas('se cambio'+props.numero);
    }
    return(
        <div className="filaPregunta">
            <div className="caja uno">
                <p className="preguntas">{props.numero} {props.nombre}</p>
                <div className="botones">
                    <button className="boton" onClick={()=>cambiarEstado(1)}>✔</button>
                    <button className="boton" onClick={()=>cambiarEstado(2)} >X</button>
                </div>
                </div>
            <div className="caja dos">{props.respuestas.map(hola=>
                (
                <div key={hola} className={`opciones ${props.estado===1 && 'verde' || props.estado===2 && 'rojo' } `}>
                    <p className="texto" key={hola}>{hola}</p>
                </div>
                ))}</div>
        </div>
    );
}
export{Lista}