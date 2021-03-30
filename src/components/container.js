import React from 'react';
import dataPersonajes from '../rickandmorty.json';
import Card from './card';


        

function Container(props) {


    return (
   
            <div className="container">

                <ul id="myUL">

                {
                dataPersonajes.map(function (personaje,idx) {
                    
                        return(
                            <Card personajeCard={personaje} key={idx}/>
                        )
                })
                
                    }
                    
                </ul>
            </div>
   
    );
}

export default Container;