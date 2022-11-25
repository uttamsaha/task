import React from 'react'
import './SearchedItems.css'

const SearchedItems = () => {
  return (
    <div className='container'>
        <div className="searched-text">
            <p>Your searched items</p>
        </div>
        <div className="searched-items">
            <img src="p0.png" alt="" />
            <img src="p1.png" alt="" />
            <img src="p2.png" alt="" />
            <img src="p3.png" alt="" />
            <img src="p4.png" alt="" />
            <img src="p5.png" alt="" />
        </div>
    </div>
  )
}

export default SearchedItems;