import React from "react";
import "./breadcrumbs.css"
import { Link, useLocation } from "react-router-dom";
const Breadcrumbs = () => {

    const location = useLocation()
    const generateCreateOrgItem = () => {
        if (location.pathname === '/add') {
            return(
                <li><Link to='/add'>Create organizations</Link></li>
            )
        }
    }
    const generateCreateChangeRole = () => {
        if (location.pathname === '/role') {
            return(
                <li><Link to='/role'>Change Role</Link></li>
            )
        }
    }
    return(
        <div className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/'>Organizations</Link></li>
                {generateCreateOrgItem()}
                {generateCreateChangeRole()}
            </ul>
        </div>
    )
}

export default Breadcrumbs