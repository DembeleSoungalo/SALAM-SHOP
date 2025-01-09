import React, { useRef } from 'react'

const Form2 = () => {
    const nomContainer = useRef(null);
    const passContainer = useRef(null);
console.log(nomContainer.current);

  return (
    <div>
        <form>

        <label htmlFor='nom'>UserName</label>
        <input type='text' id='nom' ref={nomContainer}></input>
        <br/>
        <br/>
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' ref={passContainer}></input>
        <br/>
        <br/>
        <button type='submit' onClick={console.log(nomContainer.current.value)}>Se Contecter</button>

        </form>
    </div>
  )
}

export default Form2