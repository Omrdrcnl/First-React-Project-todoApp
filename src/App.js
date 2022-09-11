import React, { useState } from "react";

function App() {
  const [todoText, settodoText] = useState("");

  const handleSubmit = (event)=> {
    event.preventDefault();
    if(todoText===""){alert("todoText is can't be empty")
    return;          };
    
    console.log(todoText);
    
  }
  return (
    <div className="container">
      <h1 className="text-center my-5">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your todo"
            value={todoText}
            onChange={(event)=>settodoText(event.target.value)}
          />
          <button className="btn btn-outline-secondary" type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
