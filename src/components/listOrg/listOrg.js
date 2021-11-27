import React from "react";
import './listOrg.css'
import Organization from '../organization'
import {Link} from 'react-router-dom'

const ListOrg = ({posts, deleteItemHandler, searchByName, updateItemHandler}) => {

    const [searchValue, setSearchValue] = React.useState('')
    const [searchItems, setSearchItems] = React.useState(posts)
    const [currentSort, setCurrentSort] = React.useState('1')

    React.useEffect(() => {
        switch(currentSort) {
            case '1':
                setSearchItems(sortByNumber(searchItems))
                break;
            case '2':
                setSearchItems(sortByNumber(searchItems).reverse())
                break;
            case '3':
                setSearchItems(sortByName(searchItems))
                break;
            case '4':
                setSearchItems(sortByName(searchItems).reverse())
                break;
            case '5':
                setSearchItems(sortByDate(searchItems))
                break;
            case '6':
                setSearchItems(sortByDate(searchItems).reverse())
                break;
            default:
                setSearchItems(sortByNumber(searchItems))
                break;
        }
        
    }, [currentSort, searchItems])

    React.useEffect(() => {
        setSearchItems(searchByName(searchValue, posts))
    }, [searchValue, posts])

    function sortByNumber(items) {
        const newItems = items.sort((i, b) => {
            if(i.number > b.number) {
                return 1
            }
            if (i.number < b.number) {
                return -1
            }
            return 0
        })
        return newItems
    }


    function sortByName(items) {
        const newItems = items.sort((i, b) => {
            if(i.name > b.name) {
                return 1
            }
            if (i.name < b.name) {
                return -1
            }
            return 0
        })
        return newItems
    }

    function sortByDate(items) {
        const newItems = items.sort((i, b) => {
            if(new Date(i.date) > new Date(b.date)) {
                return 1
            }
            if (new Date(i.date) < new Date(b.date)) {
                return -1
            }
            return 0
        })
        return newItems
    }

    return(
        <div className='list-org org-content'>
          <div className='top-panel'>
                <input type="text" className='search' placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                <select value={currentSort} onChange={(e) => setCurrentSort(e.target.value)}>
                    <option defaultValue value='1'>By number - ASC</option>
                    <option value='2'>By number - DESC</option>
                    <option value='3'>By name - ASC</option>
                    <option value='4'>By name - DESC</option>
                    <option value='5'>By date - ASC</option>
                    <option value='6'>By date - DESC</option>
                </select>
                <Link to='/add' className='btn'>Create Organization</Link>
            </div>
            <div className='organization-list'>
                <Organization posts={searchItems} deleteItemHandler={deleteItemHandler} updateItemHandler={updateItemHandler}/>
            </div>
        </div>
    )
}

export default ListOrg