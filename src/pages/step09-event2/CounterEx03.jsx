import { Button, TextField } from "@mui/material";
import { useState } from "react";


export default function CounterEx03(params) {
    const [msg, setMsg] = useState('');

    function handleChange(e) {
        setMsg(e.target.value);
    }
    function handleClick(params) {
        setMsg('');
    }
    return(
        <>
          <TextField variant="outlined" onChange={handleChange} placeholder="입력하세요" value={msg} />
          <p>당신의 입력값 : {msg}</p>
          <Button variant="contained" onClick={handleClick}>Reset</Button>
        </>
    )
}