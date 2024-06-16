import React, { useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";
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

  async function axiosCall() {}
  const [sendUserid, setSendUserid] = useState("");

  async function SearchUserId() {
    try {
      let new_url = Base_url + "?userId=" + sendUserid;
      const response = await axios.get(new_url);

      if (response.status == 200) {
        let data = response.data;
        console.log(data);
        setTodos(data);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }
  return (
    <div>
      <div>
        <input
          style={{
            background: "white",
            border: "2px solid navy",
            margin: "10px",
            height: "50px",
            color: "black",
          }}
          type="search"
          onChange={(e) => {
            setSendUserid(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          SearchUserId();
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
