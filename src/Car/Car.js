import React from "react";
import { useState } from "react";
 
export default function Users() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [position, setPosition] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    { name: "Malibu", color: "black", price: 20000, year: 2022, position: 3 },
  ]);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeColor = (e) => {
    setColor(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeYear = (e) => {
    setYear(e.target.value);
  };
  const changePosition = (e) => {
    setPosition(e.target.value);
  };
  const searchUser = (e) => {
    setSearch(e.target.value);
  };
  const addUser = () => {
    let payload = {
      name,
      color,
      price,
      year, 
      position,
    };
    setUsers([...users, {...payload}])
  };
  const delFunc = (index) => {
    users.splice(index,1)
    setUsers([...users])
  }
  return (
    <div className="container">
      <input type="text" placeholder="Search" onChange={searchUser} className="form-control" /> <br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Year</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           users.filter((item) =>{
             if(search === ''){
                return item
            }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
           }).map((item, index)=>{
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.year}</td>
                <td>{item.position}</td>
                <td>
                    <button   className="btn btn-danger" onClick={() => delFunc(index)}>Delete</button>
                </td>
            </tr>
           })
          }
        </tbody>
      </table>
      <div className="card">
        <div className="card-header">Add User</div>
        <div className="card-body">
          <form>
            <input type="text" placeholder="Name" onChange={changeName} className="form-control mt-2"/>
            <input type="text" placeholder="Color" onChange={changeColor} className="form-control mt-2" />
            <input type="text" placeholder="Price" onChange={changePrice} className="form-control mt-2" />
            <input type="text" placeholder="Year" onChange={changeYear} className="form-control mt-2" />
            <input type="text" placeholder="Position" onChange={changePosition} className="form-control mt-2" />
          </form>
            <button onClick={addUser} className="btn btn-primary mt-2">Add User</button>
        </div>
      </div>
    </div>
  )
}
