import React, {useState, useEffect} from "react";
import './change-role.css'
import { useNavigate } from 'react-router-dom';
const ChangeRole = ({setCurrentUser, setModalOpen}) => {

    const [userName, setUserName] = useState('')
    const [userRole, setUserRole] = useState('User')
    const navigate = useNavigate()
    const saveHandler = () => {
        setCurrentUser({name: userName, role: userRole})
        setUserName('')
        setUserRole('User')
        navigate('/')
        setModalOpen({show: true, content: 'User role is changed'})
    }

    const cancelHandler = () => {
        setUserName('')
        setUserRole('User')
        navigate('/')
    }
    return(
        <div className='add-org org-content'>
            <form action="">
                <div className="add-inputs">
                    <fieldset>
                        <label>User name</label>
                        <input type="text" id='userName' placeholder='John Smuth' value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    </fieldset>
                    <fieldset>
                        <label>User role</label>
                        <select id='changeRole' value={userRole} onChange={(e) => setUserRole(e.target.value)}>
                            <option disabled value='selectRole'>Select Role</option>
                            <option value='User'>User</option>
                            <option  value='Admin'>Admin</option>
                            <option  value='Editor'>Editor</option>
                        </select>
                    </fieldset>
                </div>
                <div className="btns-wrap">
                    <button className='btn white' onClick={cancelHandler}>Cancel</button>
                    <div onClick={saveHandler} className='btn'>Save</div>
                </div>
            </form>
        </div>
    )
}

export default ChangeRole