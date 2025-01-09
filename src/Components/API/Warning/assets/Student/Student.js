import React from 'react'
import './Student.css'
import PropTypes from 'prop-types'


const Student = (props) => {
// const AnnAleat = Math.floor(Math.random() * 100)
  return (
    <div className='student'>
    <h1>Student : {props.id}</h1>
    <p><u><b>Name</b></u> : {props.nom}</p>
    <p><u><b>Prénom</b></u>: {props.prenom}</p>
    <p><u><b>Module</b></u> : {props.module}</p>
    <p><u><b>Année</b></u> : {props.annee}</p>
    </div>
  )
}
Student.defaultProps = {
  nom: "Reseigner Votre Nom",
  prenom: "Reseigner Votre Prénom",
  module: "Reseigner Votre Module",
  annee: "Reseigner Votre Année"
}
Student.propTypes = {
  nom: PropTypes.string,
  prenom: PropTypes.string,
  module: PropTypes.string,
}



export default Student