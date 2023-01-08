import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
export default function Home() {
const[employees,setEmployees]=useState([]);
const {id}=useParams();

useEffect(()=>{
    loadEmployees()
},[]);
const loadEmployees=async()=>{
    const result =await axios.get("http://localhost:8080/employees")
  setEmployees(result.data);
};




const deleteEmployee=async(id)=>{
  await axios.delete(`http://localhost:8080/employee/${id}`)

  loadEmployees()
}
  return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Address</th>
      <th scope="col">Contact</th>
      <th scope="col">Email</th>
      <th scope="col">Name </th>
      <th scope="col"> National ID</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        employees.map((employee,index)=>(
            <tr>
      <th scope="row"  key={index}>{index+1}</th>
      <td>{employee.address}</td>
      <td>{employee.contact}</td>
      <td>{employee.email}</td>
      <td>{employee.name}</td>
      <td>{employee.national_id}</td>
      <td>
<Link className="btn btn-primary mx-2" to={"display"}>View</Link>
  <Link className="btn btn-outline-primary mx-2" 
  to={`/editemployee/${employee.id}`}>Edit</Link>
<Link className="btn btn-danger mx-2"

onClick={()=>deleteEmployee(employee.id)}>
  Delete</Link>


      </td>
    </tr>
        ))
    }
    
    
  </tbody>
</table>





        </div>
    </div>
  )
}
