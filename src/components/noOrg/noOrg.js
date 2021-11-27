import React from "react";
import './noOrg.css'
import emptyImg from './image/box.png'
import { useNavigate } from 'react-router-dom';

const NoOrg = () => {

    const navigate = useNavigate()

    const createHandler = () => {
        console.log(1)
        navigate('/add')
    }

    return(
        <div className='no-org org-content'>
            <img src={emptyImg} alt="" />
            <span>No organization? pleace create one</span>
            <button onClick={createHandler} className='btn'>Create Organization</button>
        </div>
    )
}

export default NoOrg