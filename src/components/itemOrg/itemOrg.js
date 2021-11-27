import React, { Component } from "react";
import './itemOrg.css'
import adit from './image/edit.png'
import bin from './image/bin.png'


export default class ItemOrg extends Component {
    
    render() {
        const {order, name, type, number, date, status, id, deleteItemHandler, updateItemHandler } = this.props
        return(
            <li className='organization-item'>
                <div>{order}</div>
                <div>{name}</div>
                <div>{type}</div>
                <div>{number}</div>
                <div>{date}</div>
                <div>{status}</div>
                <div className='item-btns'>
                    <div onClick={() => updateItemHandler(id)}><img src={adit} alt="" /></div>
                    <div onClick={() => deleteItemHandler(id)}><img src={bin} alt="" /></div>
                </div>
            </li>
        )
    }
}
