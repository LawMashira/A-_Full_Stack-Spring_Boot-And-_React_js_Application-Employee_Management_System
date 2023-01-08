import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default function  Add() {
let navigate=useNavigate()


    const[Employee,setEmployee]=useState({
        name:"",
        contact:"",
        national_id:"",
        email:"",
        address:""
    });
    const {name,contact,national_id,email,address}=Employee;

    const onInputChange=(e)=>{
setEmployee({...Employee,[e.target.name]:e.target.value})
    };
const onSubmit=async(e)=>{

e.preventDefault();
await axios.post("http://localhost:8080/employee",Employee)

navigate("/")

}
  return (
    <div className="container"> 
    <div className="row">
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h2 className="text-center m-4">Register New Employee</h2>
    <form  onSubmit={(e)=>onSubmit(e)}>
    <div className="mb-3">
        <label htmlFor="Name" className="form-label">
        Name
        </label>
        <input
        type={"text"}
        className="form-control"
        placeholder="Enter employee name"
        name="name"
        value={name}
        onChange={(e)=>onInputChange(e)}        /> 
    </div>
    <div className="mb-3">
        <label htmlFor="Contact" className="form-label">
        Contact
        </label>
        <input
        type={"text"}
        className="form-control"
        placeholder="Enter employee contact"
        name="contact"
        value={contact}
        onChange={(e)=>onInputChange(e)} /> 
    </div>

    <div className="mb-3">
        <label htmlFor="natioanlid" className="form-label">
        National ID
        </label>
        
        <input
        type={"text"}
        className="form-control"
        placeholder="Enter employee national ID number"
        name="national_id"
        value={national_id}
        onChange={(e)=>onInputChange(e)} /> 
        </div>

<div className="mb-3">
        <label htmlFor="Email" className="form-label">
        Email
        </label>
        
        <input
        type={"text"}
        className="form-control"
        placeholder="Enter employee email"
        name="email"
        value={email}
        onChange={(e)=>onInputChange(e)} /> 
    </div>
    <div className="mb-3">
        <label htmlFor="Address" className="form-label">
        Address
        </label >
    
        <input
        type={"text"}
        className="form-control"
        placeholder="Enter employee address"
        name="address"
        value={address}
        onChange={(e)=>onInputChange(e)} 
         /> 
    </div>
    

<button type="register" className="btn btn-outline-primary">Register</button>
<Link type="clear" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>


</form>
   
    </div>

    </div>
    </div>
    
  )
}
