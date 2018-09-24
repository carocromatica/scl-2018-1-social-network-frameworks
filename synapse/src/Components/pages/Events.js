import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import IconBar from '../iconBar/IconBar'
import Navbar from '../nav/Nav'


class Events extends Component {
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
     <div>
        <div>
          <Navbar />
      </div>
      <div className="container">
     
        <div className="row">
       
          <div className="col s12 m10 offset-m1 l6 offset-l3">
          <div className="card z-depth-0">
        <IconBar /> 
        </div>
        SOY EVENTOS
        <div className='divEventos'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Antonella Caroca</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Coding in sign language!</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>5/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>Programación accesible en lengua de señas para la comunidad sorda! Vengan a este super evento que incluye a destacados hackers internacionales y la comunidad sorda!</p>
                <i class="far fa-calendar-check"></i>
            </div>
             <hr/>
          </div>
          <div className='divEventos'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Caro Torres</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Programación y Diseño!</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>7/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>Programación y Diseño es un evento que mezcla lo mejor de estos dos mundos. Vienen destacadas diseñadoras y programadoras de latinoamerica.</p>
                <i class="far fa-calendar-check"></i>
            </div>
             <hr/>
             <div className='divEventos'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Pamela Rojas</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Inteligencia Artificial</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>10/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>¿Qué es la inteligencia artificial? Este es un evento para todas aquellas personas que deseen aventurarse en el mundo de la inteligencia artificial.
                Se repasarán conceptos básicos y no se requiere conocimiento previo para participar. Todas invitadas!</p>
                <i class="far fa-calendar-check"></i>
            </div>
             <hr/>
             <div className='divEventos'>
                <i class="fas fa-user fa-2x"></i>
                <p>CREADORA: Francisca Zúñiga</p>
                <h5>NOMBRE EVENTO:</h5>
                <h4>Desarrollo y perfeccionamiento de habilidades blandas</h4>
                <h5>¿CUÁNDO?</h5>
                <h4>12/Noviembre/2018</h4>
                <h5>DESCRIPCIÓN DEL EVENTO:</h5>
                <p>¿Cómo logras formar o integrarte a un equipo de trabajo sin morir en el intento? Aprende a potenciar tus habilidades blandas y a transferirlas a tu trabajo </p>
                <i class="far fa-calendar-check"></i>
            </div>
             <hr/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
)(Events)
