import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from 'axios'






function LogIn(props) {
var [data, setData]=React.useState({username:"",password:""});
function handleChange(event){
    const {value,name}=event.target;
    setData(()=>{
      return {
        ...data,
        [name]:value
      };
    });
}
function Check(e){

  e.preventDefault();
    axios.
    post('http://localhost:4000/login',{username:data.username, password:data.password})
    .then(response=>{
      alert(JSON.stringify(response.data))
      if(JSON.stringify(response.data)==='valid'){
      }
      props.setLoggedIn(true)
    })
    .catch(err=>{
      console.log(err.message)
    }) 
}
  return (
    <div>
        <form className="form">
            <h2>Sign In To the Keeper App</h2>
        <TextField
          id="outlined-password-input"
          label="username"
          type="text"
          name="username"
          autoComplete="current-password"
          value={data.username}
          onChange={handleChange}
        />
            <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={data.password}
          onChange={handleChange}
        />
         <a >Don't have an account? Create One</a>
            <Button type="submit" onClick={Check} variant="outlined" >Submit</Button>
        
        </form>
    </div>
  )
}

export default LogIn
