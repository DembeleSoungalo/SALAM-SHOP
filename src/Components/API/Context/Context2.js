import React,{ useContext } from 'react'
import { myContext } from './Context1'


const Context2 = () => {
   const data = useContext(myContext)
  return (
    <div> <h1>{data}</h1></div>
  )
}

export default Context2