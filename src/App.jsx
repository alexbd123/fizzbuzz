import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="card">
        {
        count % 5 === 0 && count % 3 === 0 && count != 0 ? "fizzbuzz" :
        count % 5 === 0 && count != 0 ? "buzz" :
        count % 3 === 0 && count != 0 ? "fizz" :
        count
        }
         </h1>
      <div>
        <button className="button" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button className="button" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </>
  )
}

export default App
