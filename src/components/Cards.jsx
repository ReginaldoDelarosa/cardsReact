import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Componente1 from './Contador'
const Cards =(props)=>{
    return(
      
        <div className="card text-center" >
            <img src={props.imageSource}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title} contador: {props.contador}</h5>
                
                <p className="card-text">{props.texto}</p>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-dark" >Link</button>
            </a>
            
        </div>
        
    )
}

export default Cards