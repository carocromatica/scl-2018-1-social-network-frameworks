import '../../App.css';
import React, { Component } from 'react';
import '../../App';



class IconBar extends Component {
    render(){
        return(
            <div className="containerIconBar">
                <div className="listOfIconBar">
                    <p>
                        <i className="fas fa-home activado fa-2x">Inicio</i> 
                        <i className="fas fa-user-friends fa-2x">Amigos</i> 
                        <i className="far fa-calendar-alt fa-2x">Eventos</i>  
                        <i className="fas fa-medal fa-2x">Desafíos</i>                     
                    </p>
                </div>
            </div>
        )
    }
  }
  
  export default IconBar;