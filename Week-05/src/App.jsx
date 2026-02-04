import React, { useState } from 'react'

function App() {
  const [todo ,settodo] = useState(["coding","GYM"])

  const [input ,setInput ] = useState("")

  const addTodo = () =>{
    settodo([...todo ,input])

    setInput("")
  }
  



  return (
    <div>
      <input type="text" placeholder='Enter Todo'  
      value={input}
      onChange={(e) => setInput(e.target.value)
      }
      
      />

      <button onClick={addTodo}> Add Todo</button>


      {
        todo.map((singleTodo ,index) => (
          <p key={index}>{singleTodo}</p>
        ))
      }
    </div>
  )
}

export default App

