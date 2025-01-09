import React, { useState } from 'react'

const ChangeName = () => {
    const [name, setName] = useState("Dembele");
    const [metier, setMetier] = useState("Web Dev");
    const change = () => {
        setName("Mamadou")
    }
    const changeMetier = () => {
        setMetier("Fulstack Developer")
    }
  return (
    <div>
    <p> Nom : {name}</p>
    <p> Metier : {metier}</p>
    <p><button onClick={change} onDoubleClick={changeMetier}>Changer</button></p>
    
    </div>
  )
}

export default ChangeName