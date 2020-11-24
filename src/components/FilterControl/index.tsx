//libs
import React from 'react'
//components
import Search from './Search'
import Status from './Status'
import Date from './Date'
import Category from './Category'
import Price from './Price'
//others
import './style.scss'

interface Props{
    isSearch?: boolean;
    isStatus?: String[],
    isDate?: boolean,
    isCategory?: boolean,
    isPrice?: boolean
}

const FilterControl:React.FC<Props> = (props) => {
    const {isSearch, isStatus, isDate, isCategory, isPrice} = props
    return (
        <div className='filter-control-wrapper'>
            {isSearch ? <Search/> : <></>}
            {isStatus ? <Status options={isStatus}/> : <></>}
            {isDate ? <Date/> : <></>}
            {isCategory? <Category/> : <></>}
            {isPrice? <Price/> : <></>}
        </div>
    )
}


export default FilterControl
