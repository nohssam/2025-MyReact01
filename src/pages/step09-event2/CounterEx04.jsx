import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function CounterEx04(params) {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [result, setResult] = useState('');

    const handleLogin = () =>{
        setResult(`ID : ${userId} / PW :  ${userPw}` )
    }
    const handleReset = () =>{
        setUserId('');
        setUserPw('');
        setResult('');
    }
    return(
        <>
        <h2>Login Form</h2>
        <TextField 
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={(e)=>setUserId(e.target.value)}
            style={{marginBottom:"10px"}}
        />
        <br />
        <TextField 
            label="PassWord"
            type="password"
            variant="outlined"
            value={userPw}
            onChange={(e)=>setUserPw(e.target.value)}
            style={{marginBottom:"10px"}}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button> 
        <Button variant="contained" color="secondary" 
         style={{marginLeft:"10px"}} onClick={handleReset}>Reset</Button> 
         <hr />
         <h3>결과  : {result} </h3>
        </>

       
    )
}