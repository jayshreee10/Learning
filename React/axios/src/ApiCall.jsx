import React, { useState } from "react";
import TodoItem from "./TodoItem";
function ApiCall() {
  const [todos, setTodos] = useState([]);
  const Base_url = "https://jsonplaceholder.typicode.com/todos/";
  async function callApi() {
    try {
      const response = await fetch(Base_url);
      if (response.status == 200) {
        const data = await response.json();

        setTodos(data);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          callApi();
        }}
      >
        search
      </button>
      <button
        onClick={() => {
          console.log(todos);
        }}
      >
        Check
      </button>
      <ul>
        {todos.map((value) => {
          return (
            <li key={value.id}>
              <TodoItem
                id={value.id}
                userid={value.userId}
                title={value.title}
                completed={value.completed}
              />
              ;
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ApiCall;
