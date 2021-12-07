import React from "react";

export default function Buscar(props) {

    // ASIGNACION POR DESTRUCTURING
     const { userInfo, Buscar} = props; 
     const {nombre, edad}= userInfo;
     console.log (props);
     console.log (userInfo);
     
    return (
        <>
        <button  onClick={() =>props.Buscar(nombre, edad)}>Buscando</button>{' '}
        
        </>
    );
}