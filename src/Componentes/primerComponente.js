import React, {useState} from 'react';

export const PrimerComponente = () => {

  //let nombre = "Dani Soto";

  const [nombre, setNombre] = useState("Dani Soto");
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  }

  return (
    <div>
      <p>Hola soy el primer componente</p>
      <p>Mi nombre es {nombre}</p>
      <button onClick={ e => cambiarNombre("Daniel Soto Aniñir")}>
        Cambiar Nombre
      </button> <br></br>

      <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder='Cambia el Nombre'></input>
    </div>
  )
}
