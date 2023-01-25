import React from "react";
import { AreaAgregar } from "../areaAgregar";
import { Arealista } from "../areaLista";
import { Micontexto } from "../contexto";
import { Lista } from "../lista";

function AppUi(){
    const {preg}=React.useContext(Micontexto);
    return(
        <React.Fragment>
            <AreaAgregar/>
            <Arealista>
                {preg.map(valor=>(
                    <Lista
                     key={valor.id}
                     nombre={valor.nombre}
                     numero={valor.id}
                     respuestas={valor.respuesta}
                     />
                ))}
            </Arealista>
        </React.Fragment>
    );
}

export{AppUi}