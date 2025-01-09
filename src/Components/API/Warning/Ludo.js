import React, { useState } from 'react'
 const Ludo = () => {
    const [count , setCount] = useState(0)
    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={plus} id="btn">Plus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
export default Ludo
