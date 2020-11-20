//libs
import React from 'react'
//components
import Search from './Search'
import Status from './Status'
import Date from './Date'
//others
import './style.scss'

interface Props{
    isSearch?: boolean;
    isStatus?: {
        options: String[]
    },
    isDate?: boolean
}

const FilterControl:React.FC<Props> = (props) => {
    const {isSearch, isStatus, isDate} = props
    return (
        <div className='filter-control-wrapper'>
            {isSearch ? <Search/> : <></>}
            {isStatus ? <Status options={isStatus.options}/> : <></>}
            {isDate ? <Date/> : <></>}
        </div>
    )
}


export default FilterControl
