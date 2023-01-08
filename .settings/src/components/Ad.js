import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container,Paper,Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Student() {
const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
const[name,setName]=useState('')
const[address,setAddress]=useState('')
const[email,setEmail]=useState('')
const[contact,setContact]=useState('')
const[national_id,setNational_ID]=useState('')

  const classes = useStyles();
const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address,email,contact,national_id}
    console.log(student)
    fetch("http://localhost:8080/employees",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        document.writeln("New student successfully added")
    })
    
}

  return (
    <Container>
    <Paper elevation={3} style={paperStyle}>
        <h1 style={{color:"green"}}>Add New Employee</h1>
    <form className={classes.root} noValidate autoComplete="off">
      
      <br></br><TextField id="outlined-basic" label="Student Address" variant="outlined"
fullWidth value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <TextField id="outlined-basic" label="Employee Contact" variant="outlined"
fullWidth value={contact}
      onChange={(e)=>setContact(e.target.value)}/>
      <TextField id="outlined-basic" label="Employee Email" variant="outlined"
fullWidth value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Employee Name" variant="outlined"
fullWidth   value={name}
       onChange={(e)=>setName(e.target.value)} />
<TextField id="outlined-basic" label="Employee National ID" variant="outlined"
fullWidth   value={national_id}
       onChange={(e)=>setNational_ID(e.target.value)} />
      <Button variant="contained" color="primary" onClick={handleClick}>
  Save
</Button><Button variant="contained" color="secondary" onClick={handleClick}>
  Clear
</Button>
    </form>
    {name}
    {address}
    {email}
    {contact}
    {national_id}
    </Paper>
    </Container>
    
  );
}
