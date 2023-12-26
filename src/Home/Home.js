import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
    const meme = () =>{
        navigate('/Login')
    }
  return ( 
    <div className="container">
      <h1>Home</h1>
      <div className="parent d-flex">
        <div className="card m-3">
          <div className="card-header">Title 1</div>
          <div className="card-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            earum voluptates quis voluptatem nostrum corrupti eos eum fugiat,
            debitis quasi vel doloribus non repellat dolore, odit atque fugit
            voluptas? Totam.
          </div>
        </div>
        <div className="card m-3">
          <div className="card-header">Title 2</div>
          <div className="card-body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            earum voluptates quis voluptatem nostrum corrupti eos eum fugiat,
            debitis quasi vel doloribus non repellat dolore, odit atque fugit
            voluptas? Totam.
          </div>
        </div>
      </div>
       <button className="btn btn-primary" onClick={meme}>Login Page</button>
    </div>
  );
}
