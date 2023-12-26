// import React, { Component } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Carpage() {
    const navigate = useNavigate()
    const toCar = () =>{
        navigate('/Car')
    }
  const [cars, setCars] = useState ([
    {
      id: 1,
      name: "Cobalt",
      color: "white",
      position: "2",
      price: "12000$",
      year: 2024,
      img: (
        <img
          src="https://www.auto-mgn.ru/resources/images/upload/00000015532afa6310f0.jpg"
          alt="Cobalt img"
        />
      ),
    },
    {
      id: 2,
      name: "Malibu",
      color: "black",
      position: "3",
      price: "40000$",
      year: 2025,
      img: (
        <img
          src="https://getmecar.ru/wp-content/uploads/2023/06/Chevrolet-Malibu-2018-scaled.jpeg"
          alt="Malibu img"
        />
      ),
    },
    {
      id: 3,
      name: "Damas",
      color: "blue",
      position: "1",
      price: "8000$",
      year: 2023,
      img: (
        <img
          src="https://repost.uz/storage/uploads/1-1632142354-avto-post-material.jpeg"
          alt="Damas img"
        />
      ),
    },
  ]);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Color</th>
            <th>Position</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            cars.map((item, index) => {
            return (
              <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.position}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-primary" onClick={toCar}>More</button>
                  {/* <Link to = {`/SingleCar/${item.id - 1}`} className="btn btn-primary" > See All </Link> */}
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
}
