import React, { useState } from 'react'

const MyComponent = () => {

  const [name, setName] = useState()

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>set Name</button>
    </div>
  )

}

export default MyComponent