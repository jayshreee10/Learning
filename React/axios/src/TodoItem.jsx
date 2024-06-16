import React, { useState } from "react";

function TodoItem(props) {
  let item = {
    userid: props.userid,
    id: props.id,
    title: props.title,
    completed: props.completed,
  };
  // const [item, setItem] = useState(data);

  const [check, setCheck] = useState(item.completed == true);

  return (
    <div
      style={{
        color: "black",
        border: check ? "2px solid green" : "2px solid red",
        padding: "15px",
        margin: "10px",
      }}
    >
      <div>
        {"userid : "}
        {item.userid}{" "}
      </div>

      <div>
        {" "}
        {"id : "} {item.id}{" "}
      </div>
      <div>
        {" "}
        {"title : "}
        {item.title}{" "}
      </div>
      {/* <div>
        {" "}
        {"Iscompleted : "} {item.completed.toString()}{" "}
      </div> */}
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(e.target.checked);
        }}
      />
    </div>
  );
}

export default TodoItem;
