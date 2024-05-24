import React, { useState } from "react"

const Counter = () => {

  const [counter, setCounter] = useState(0)

  const inCreaseCount = () => {
    setCounter(counter + 1)
  }

  const decreseCount = () => {
    setCounter(counter - 1)
  }

  const resetCount = () => {
    setCounter(0)
  }

  return (
    <>
      <div className="container">
        <p className="counter-display">{counter}</p>
        <button className="counter-btn" onClick={inCreaseCount}>Increase</button>
        <button className="counter-btn" onClick={decreseCount}>Decrese</button>
        <button className="counter-btn" onClick={resetCount}>Reset</button>
      </div>
    </>
  )
}

export default Counter