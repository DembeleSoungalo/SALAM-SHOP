/*Function Compon*/
import React from 'react'

const Counter = () => {

    const visitorName = "Dembele"

  return (
    <div>
        <h2>{ 
            " Hello Mr/Ms " + visitorName
            }
        </h2>
    </div>
  )
}

export default Counter
/*Class components*/ 
// import React, { Component } from 'react'

// export default class Counter extends Component {
//   render() {
//     return (
//       <div>Counter</div>
//     )
//   }
// }
