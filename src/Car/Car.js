import React, { Component } from "react";
export default class SingleCar extends Component {
  state = {
    cars: [
      {
      },
    ],
  };
  render() {
    const { cars } = this.state;
    const url = window.location.href.split("/");
    let index = Number(url[4]);
    console.log(url[4]);
    return (
      <div className="card">
        <div className="card-header">
          <h1>About a Car</h1>
        </div>
        <div className="card-body">
          <h3>{`Car name: ${cars[index].name}`}</h3>
          <h3>{`Color: ${cars[index].color}`}</h3>
          <h3>{`Position: ${cars[index].position}`}</h3>
          <h3>{`Price ${cars[index].price}`}</h3>
          <h3>{`Year ${cars[index].year}`}</h3>
          <h3>{cars[index].img}</h3>
        </div>
      </div>
    );
  }
}
