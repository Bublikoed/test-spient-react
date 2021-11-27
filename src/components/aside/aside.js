import React from "react";
import "./aside.css"
import logo from  "./image/Sapient_logo_fin_.png"
import change from  "./image/settings.png"
import hide from  "./image/hide.png"
import { Link } from "react-router-dom";
const Aside = ({showSidebar, setShowSidebar}) => {

    
    

    if(showSidebar) {
        return(
            <aside>
                <a href="#" className='logo'><img src={logo} alt="" /></a>
                <div className='aside__footer'>
                    <Link to='/role'><img src={change} alt="" />Change Role</Link>
                    <div onClick={() => setShowSidebar(false)} className='asside-btn'><img src={hide} alt="" />Hide Menu</div>
                </div>
            </aside>
        )
    }
    return null
}

export default Aside