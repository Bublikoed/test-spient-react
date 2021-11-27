import React, { useState } from "react";
import "./app.css"
import Aside from "../aside"
import Header from "../header"
import Body from "../body"
import Breadcrumbs from "../breadcrumbs"
import NoOrg from "../noOrg";
import AddOrg from "../addOrg";
import ListOrg from "../listOrg";
import ChangeRole from "../change-role";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import BasicModal from "../aside/modal/modal";

const initialDateItem = [
    { name: 'ipeoplerqwe', type: 'Discount', number: 30, date:'15.11.2015', status: 'Active', id: 1},
    { name: 'stylus', type: 'Other', number: 47, date:'15.10.2014', status: 'Not Active', id: 2},
    { name: 'ipeople', type: 'Discount', number: 45, date:'15.10.2019', status: 'Not Active', id: 3}
]
const initialUser = {name: 'John Smith', role: 'User'}
const App = () => {
    let navigate = useNavigate();
    const [dateItem, setDateItem] = useState(
        localStorage.getItem('organizations') ? JSON.parse(localStorage.getItem('organizations')) : initialDateItem
    );
    const [currentUser, setCurrentUser] = useState(initialUser);
    const [showSidebar, setShowSidebar] = React.useState(true)
    const [currentUpdateElement, setCurrentUpdateElement] = React.useState({currentElement: null, type: 'create'})
    const [modalOpen, setModalOpen] = React.useState({show: false, content: ''})
    const deleteItemHandler = (id) => {
        const newDateItem = [];

        dateItem.map((item) => {
            if(item.id !== id) {
                newDateItem.push(item)
            }
        })

        setDateItem(newDateItem)
        localStorage.setItem('organizations', JSON.stringify(newDateItem))
    }


    const addItemHandler = (item) => {
        const newDateItem = [...dateItem, item]
        setDateItem(newDateItem)
        localStorage.setItem('organizations', JSON.stringify(newDateItem))
    }

    const searchByName = (value, items) => {
        if(value.length < 3) {
            return items
            
        }
        const newItems = items.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
        return newItems
    }
 
    const setShowSidebarHandler = (value) => {
        setShowSidebar(value)
    }


    const updateItemHandler = (id) => {
        let targetElement;
        dateItem.filter(item => {
            if(item.id === id) {
                targetElement = item
            }
        })
        setCurrentUpdateElement({currentElement: targetElement, type: 'update'})
        navigate('/add')
        
    }

    const generateEmptyPage = () => {

        if(dateItem.length === 0 ) {
            return <NoOrg/>
        } else {
            return <ListOrg 
                posts={dateItem}
                deleteItemHandler={deleteItemHandler}
                searchByName={searchByName}
                updateItemHandler={updateItemHandler}
            />
        }
        
    }

    

    return(
            <div className='app'>
                <BasicModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                <Aside setShowSidebar={setShowSidebarHandler} showSidebar={showSidebar}/>
                <div className='app__content'>
                    <Header currentUser={currentUser} setShowSidebar={setShowSidebarHandler} showSidebar={showSidebar}/>
                    <Breadcrumbs/>
                    <Body>
                        

                        <Routes>
                            <Route 
                                path='/add' 
                                element={
                                    <AddOrg 
                                        addItemHandler={addItemHandler}
                                        currentUpdateElement={currentUpdateElement}
                                        deleteItemHandler={deleteItemHandler}
                                        setCurrentUpdateElement={setCurrentUpdateElement}
                                        setModalOpen={setModalOpen}
                                    />
                                }
                            />
                            <Route
                                path='/no' 
                                element={<NoOrg/>}/>
                            <Route path='/' 
                            element={
                                generateEmptyPage()
                            }
                            />
                            <Route 
                                path='/role' 
                                element={
                                    <ChangeRole setModalOpen={setModalOpen} setCurrentUser={setCurrentUser}/>
                                }
                            />
                        </Routes>
                    
                    </Body>
                </div>
            </div>
    )
}

export default App