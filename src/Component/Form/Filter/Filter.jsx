import React from 'react'
import './Filter.scss'
const Filter = () => {
  return (
    <div className='filter'>
        <div className="on-filter">
        Or filter
        </div>
        <div className="buttons">
            <button>Brazil</button>
            <button>Kenya</button>
            <button>Columbia</button>
        </div>
    </div>
  )
}

export default Filter