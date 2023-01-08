
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function DisplayEmployee() {

const [employee,setEmployee]=useState({

  name:"",
  contact:"",
  national_id:"",
  email:"",
  address:""

});

const{id} = useParams();

useEffect(()=>{
loadEmployee();
});
const loadEmployee=async()=>{
  const result=await axios.get(`http://localhost:8080/employee/${id}`)
  setEmployee(result.data);
}

  return (
    
<div className="container"> 
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h2 className="text-center m-4">Employee Details</h2>
   <div className="card">

  <div className="card-header">
    Details of Employee With ID:{employee.id}
<ul className="list-group list-group-flush">

<li className="list-group-item">
<b>Name:</b>
{employee.name}
</li>
<li className="list-group-item">
<b>Contact:</b>
{employee.contact}
</li>
<li className="list-group-item">
<b>National ID:</b>
{employee.national_id}
</li>
<li className="list-group-item">
<b>Email:</b>
{employee.email}
</li>
<li className="list-group-item">
<b>Address:</b>
{employee.address}
</li>
</ul>

</div>
</div>
<Link className="btn btn-primary my-2" to={"/"}>Back To Home Page</Link>
</div>
</div>

</div>

    
  )
}
