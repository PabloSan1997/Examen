import React from "react";
import { preguntas } from "./preguntas";
import { usePreguntas } from "./usePreguntas.js";

const Micontexto = React.createContext();

function Provedoor(props) {
  const { setGuardar, prego } = usePreguntas();
  const [texto1, setTexto1] = React.useState("");
  const [texto2, setTexto2] = React.useState("");
  const [texto3, setTexto3] = React.useState("");
  const [usar, setUsar] = React.useState(false);
  const [nomas, setNomas] = React.useState('');
  let preg;
  if (texto3 != "") {
    preg = prego.filter((elemento) => {
      return elemento.id == texto3;
    });
  } else {
    preg = prego;
  }

  const agregarPregunta = () => {
    let numero;
    if(prego.length===0){
      numero=1;
    }else if(prego.length>0){
      let hola = prego[prego.length-1];
      numero=hola.id+1;
    }
    if (texto1 != "") {
      let nuevoElemento = {
        id: numero,
        nombre: texto1,
        respuesta: [],
      };
      let elemento = prego;
      elemento.push(nuevoElemento);
      setGuardar(elemento);
      setTexto1('');
    } else {
      alert("No Puede haber espacio vacio");
    }
  };
  const agregarRespuesta = () => {
    let hola = [];
    if (preg.length != 0) {
      if (texto2 != "") {
        let numero = preg[0].id;
        hola[0] = texto2;
        let indice = prego.findIndex(ind=>ind.id===numero);
        if(indice!=-1){
          let nose = prego;
          nose[indice].respuesta.push(hola);
          setGuardar(nose);
          setTexto2('');
        }
      }
    }
  };
  const eliminarTodo=()=>{
    setGuardar([]);
  }
  const eliminarUno=()=>{
    if (preg.length != 0) {
        let numero = preg[0].id;
        let no = prego;
        no.splice(numero-1,1);
        setGuardar(no);
      }
    
  }
  const cambiando =(elementoId, num)=>{
    let todo = prego;
    let miElemento = todo.findIndex(vv=>vv.id===elementoId);
    todo[miElemento].estado=num;
    setGuardar(todo);
  }
  return (
    <Micontexto.Provider
      value={{
        preg,
        setGuardar,
        texto1,
        setTexto1,
        texto2,
        setTexto2,
        texto3,
        setTexto3,
        agregarPregunta,
        setUsar,
        usar,
        agregarRespuesta,
        eliminarTodo,
        eliminarUno,
        cambiando,
        setNomas
      }}
    >
      {props.children}
    </Micontexto.Provider>
  );
}

export { Provedoor, Micontexto };
