import React, { useEffect, useState } from "react";
import "./App.css";

function App(){
  //hook for getting the api

  const [data, setData] = useState([]);

  //hook for running the api

  useEffect (()=>{
    //fetching the api
    // fetch api from website
    fetch("https://dummyjson.com/products").then((response) => response.json()).then((data) => {
      setData(data.products);
    // catch error if fetch is wrong
  }).catch((e)=>{
    console.log("There is something wrong", e);
  })
  }, [])
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
            <th>image</th>
            <th>Rating</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((ecom)=>(
        <tr key={ecom.id}>
          <td>{ecom.id}</td>
          <td>{ecom.title}</td>
          <td>{ecom.description}</td>
          <td>{ecom.price}</td>
          <td>{ecom.brand}</td>
          <td>{ecom.category}</td>
          {/* show image source in browser */}
          <td><img src={ecom.images[0]} alt={ecom.title}/></td>
          <td>{ecom.rating}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </>
  )
}
export default App