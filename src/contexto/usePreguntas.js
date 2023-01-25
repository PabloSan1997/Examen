import React from "react";
import { preguntas } from "./preguntas";

function usePreguntas(){
    
    if(!localStorage.preguntas){
        localStorage.preguntas=JSON.stringify(preguntas);
    }
    const [prego, setPreg]=React.useState(JSON.parse(localStorage.preguntas));
    const setGuardar = (guardar) =>{
        localStorage.preguntas=JSON.stringify(guardar);
        setPreg(guardar);
    }

    return {setGuardar, prego}
}

export{usePreguntas}