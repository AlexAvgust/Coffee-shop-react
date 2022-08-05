import React from 'react'
import './SearchPanel.scss'
const SearchPanel = () => {
  return (
    <div className='search-panel'>
        <div className="text">
        Looking for
        </div>
        <div className="input-text">
            <input type="text" placeholder='start typing here...' />
        </div>
    </div>
  )
}

export default SearchPanel