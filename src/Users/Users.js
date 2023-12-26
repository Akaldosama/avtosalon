import React from "react";
import { useState } from "react";
 
export default function Users() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    { first_name: "Umar", last_name: "Yunusov", age: 20, address: "Sergeli" },
  ]);

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const searchUser = (e) => {
    setSearch(e.target.value);
  };
  const addUser = () => {
    let payload = {
      first_name,
      last_name,
      age,
      address
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
           users.filter((item) =>{
             if(search === ''){
                return item
            }else if(item.first_name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
           }).map((item, index)=>{
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => delFunc(index)}>Delete</button>
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
            <input type="text" placeholder="First Name" onChange={changeFirstName} className="form-control"/>
            <input type="text" placeholder="Last Name" onChange={changeLastName} className="form-control mt-2" />
            <input type="text" placeholder="Age" onChange={changeAge} className="form-control mt-2" />
            <input type="text" placeholder="Address" onChange={changeAddress} className="form-control mt-2" />
          </form>
            <button onClick={addUser} className="btn btn-primary">Add User</button>
        </div>
      </div>
    </div>
  )
}
