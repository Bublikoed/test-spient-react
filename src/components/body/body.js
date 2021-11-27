import React from "react";
import "./body.css"

const Body = ({children}) => {
    return(
        <div className="body-content">
            {children}
        </div>
    )
}

export default Body