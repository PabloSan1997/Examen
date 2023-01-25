import React from "react";
import { Micontexto } from "../contexto";
import "./index.css";
function AreaAgregar() {
  const {
    setTexto1,
    setTexto2,
    setTexto3,
    agregarPregunta,
    texto2,
    usar,
    setUsar,
    agregarRespuesta,
    texto3,
    eliminarTodo,
    texto1,
    eliminarUno,
  } = React.useContext(Micontexto);
  const funcion1 = () => {
    agregarPregunta();
  };
  const funcion2 = () => {
    if (usar) {
      agregarRespuesta();
    }
  };
  const eliminart = () => {
    eliminarTodo();
  };
  const agregar1 = (evento) => {
    setTexto1(evento.target.value);
  };
  const agregar2 = (evento) => {
    setTexto2(evento.target.value);
  };
  const agregar3 = (evento) => {
    if (evento.target.value === "") {
      setUsar(false);
    } else {
      setUsar(true);
    }
    setTexto3(evento.target.value);
  };
  const quitar = () => {
    if (usar) {
      setTexto3("");
      eliminarUno();
    }
  };
  return (
    <div className="area-agregar">
      <div className="fila">
        <input
          type="text"
          className="entrada"
          placeholder="Agregar pregunta"
          onChange={agregar1}
          value={texto1 == "" ? "" : texto1}
        />
        <div className="areaBotones">
          <button className="boton" onClick={funcion1}>
            Agregar
          </button>
          <button className="boton" onClick={eliminart}>
            Eliminar Todo
          </button>
        </div>
      </div>
      <div className="fila">
       <div className="areaFila">
       <input
          className="entrada numero"
          type="number"
          placeholder="#"
          min="1"
          onChange={agregar3}
          value={texto3 == "" ? "" : texto3}
        />
        <input
          type="text"
          className="entrada texto"
          placeholder="Agregar Respuesta"
          onChange={agregar2}
          value={texto2 == "" ? "" : texto2}
        />
       </div>
        <div className="areaBotones">
          <button className="boton" onClick={funcion2}>
            Agregar
          </button>
          <button className="boton" onClick={quitar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export { AreaAgregar };
