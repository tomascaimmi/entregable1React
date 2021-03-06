import React from 'react';


function Card(props) {
    return (
   
            <div className="card">

                    <a>{props.personajeCard.name}</a>
                    <img className='fotoPersonaje' src={props.personajeCard.image} alt='Not found'/>
                    <p>Status: {props.personajeCard.status}</p>
                    <p>Species: {props.personajeCard.species}</p>
                    <p>Origin: {props.personajeCard.origin.name}</p>
            </div>
   
    );
}

export default Card;

