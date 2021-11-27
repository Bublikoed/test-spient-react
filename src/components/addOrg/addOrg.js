import React, {useState, useEffect} from "react";
import './addOrg.css'
import { v4 as generateId } from 'uuid';
import { useNavigate } from 'react-router-dom';
const AddOrg = ({addItemHandler, currentUpdateElement, deleteItemHandler, setCurrentUpdateElement, setModalOpen}) => {
    const [name, setName] = useState('')
    const [type, setType] = useState('Discount')

    const [status, setStatus] = useState('Not Active')
    let navigate = useNavigate();
    const [Alldate, setAllDate] = useState({})
    useEffect(() => {
        const today = new Date()
        const data = {
            name: name,
            type: type,
            number: Math.floor(Math.random() * 100),
            date: (today.getDate()+1)+'.'+today.getMonth()+'.'+today.getFullYear(),
            status: status,
            id: generateId()
        };
        setAllDate(data)
    }, [name, type, status])
    useEffect(() => {
        if(currentUpdateElement.type === 'update' ) {
            setName(currentUpdateElement.currentElement.name)
            setType(currentUpdateElement.currentElement.type)
            setStatus(currentUpdateElement.currentElement.status)
        }
    }, [currentUpdateElement])
    
    const saveHandler = () => {
        addItemHandler(Alldate)
        navigate("/");
        setName('')
        setType('Discount')
        setStatus('Not Active')
        setModalOpen({show: true, content: 'Successful added'})
    }


    const updateHandler = () => {
        deleteItemHandler(currentUpdateElement.currentElement.id)
        addItemHandler(Alldate)
        navigate("/");
        setName('')
        setType('Discount')
        setStatus('Not Active')
        setCurrentUpdateElement({currentElement: null, type: 'create'})
        setModalOpen({show: true, content: 'Successful updated'})

    }

    const cancelHandler = () => {
        navigate("/");
        setName('')
        setType('Discount')
        setStatus('Not Active')
    }

    const generateButton = () => {
        return currentUpdateElement.type === "update" ?
        <div onClick={updateHandler} className='btn'>Update</div> 
        :
         <div onClick={saveHandler} className='btn'>Save</div>
    }

    return(
        <div className='add-org org-content'>
            <form action="">
                <div className="add-inputs">
                    <input 
                        required
                        type="text"
                        id='name'
                        placeholder='Name'
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <select 
                        required
                        id='type'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option defaultValue value='Discount'>Discount</option>
                        <option value='Other'>Other</option>
                        <option value='Cumulative'>Cumulative</option>
                    </select>
                   
                    <select required id='status' value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value='Active'>Active</option>
                        <option defaultValue value='Not Active'>Not Active</option>
                    </select>
                </div>
                <div className="btns-wrap">
                    <button className='btn white' onClick={cancelHandler}>Cancel</button>
                    {generateButton()}
                </div>
            </form>
        </div>
    )
}

export default AddOrg