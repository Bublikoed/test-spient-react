import React from "react";
import "./header.css"
import avatar from './images/avatar.jpg'
import user from './images/user.png'
import settingsIcon from './images/settings.png'
import logout from './images/logout.png'
import DropDown from "./dropDouwn";
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
const Header = ({currentUser, setShowSidebar, showSidebar}) => {

   
    return(
        <header>
            <div className='user'>
                <span className='user__name'>{currentUser.name}</span>
                <div className='user__avatar'>
                    <img src={avatar} alt="" />
                </div>
            </div>
            
            <DropDown 
                triggerButton={
                   <button href="#" className="setting">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button> 
                }
            >
                <MenuItem ><img src={user} alt="" />Surrent role: <span>{currentUser.role}</span></MenuItem>
                <MenuItem ><Link to='/role'><img src={settingsIcon} alt="" />Change Role</Link></MenuItem>
                <MenuItem ><img src={logout} alt="" />Logout</MenuItem>  
                {!showSidebar ? <MenuItem  onClick={() => setShowSidebar(true)}>Show Sidebar</MenuItem>: null}  
            </DropDown>
        </header>
    )
}

export default Header