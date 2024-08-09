import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage=()=>{
    const[roomCode,setRoomCode] = useState('')
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/room/${roomCode')
    }


    return(
        <div className="home-page">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Enter Room code</label>
                    <input type="text" value={roomCode} onChange={e=>setRoomCode(e.target.value)}required placeholder="enter room code"/>
                 </div>
                 <button type="submit">Enter Room</button>


            </form>


        </div>
    );
}

export default HomePage