import React, { useState } from 'react'

const MyComponent = () => {

  const [name, setName] = useState("Guest")
  const [age, setAge] = useState(0)
  const [isEmployed, setIsEmployed] = useState(false)

  const updateName = () => {
    setName("Seth")
  }

  const incramentAge = () => {
    setAge(age + 1)
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set Name</button>

      <p>Age: {age}</p>
      <button onClick={incramentAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )

}

export default MyComponent