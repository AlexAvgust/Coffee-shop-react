import React from 'react'
import Filter from './Filter/Filter'
import SearchPanel from './Search/SearchPanel'
import './Form.scss'
const Form = () => {
  return (
    <div className='form'>
        <SearchPanel/>
        <Filter/>
    </div>
  )
}

export default Form