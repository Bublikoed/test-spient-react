import React from "react";
import ItemOrg from '../itemOrg'
import './organization.css'
const Organization = ({posts, deleteItemHandler, updateItemHandler}) => {

    const elements = posts.map((item, i) => {
        return (
          <ItemOrg
            key={item.id}
            order={i + 1}
            name={item.name}
            type={item.type}
            number={item.number}
            date={item.date}
            status={item.status}
            id={item.id}
            deleteItemHandler={deleteItemHandler}
            updateItemHandler={updateItemHandler}
          />
        );
    })

    return(
        <div className='organization'>
            <div className="organization-top">
                <ul>
                    <li>ID</li>
                    <li>Name</li>
                    <li>Card type</li>
                    <li>Card number</li>
                    <li>Creation date</li>
                    <li>status</li>
                    <li></li>
                </ul>
            </div>
            <ul className='organization-list'>
                {elements}
            </ul>
        </div>
    )
}

export default Organization