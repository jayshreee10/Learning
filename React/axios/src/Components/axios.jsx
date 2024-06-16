import React from 'react'

function axios() {
const Base_url = "https://jsonplaceholder.typicode.com/todos/"
async function callApi(){
    const response = await fetch (Base_url);
    const data = response.json() ;
    console.log(data);
}


  return (
    <div>axios</div>
  )
}

export default axios