import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bagActions } from '../store/bagSlice'


function HomeItems({item}) {

  const[inbag, setinbag] =useState(false)
  const handleBAgToggel=()=>{
    if(inbag){
       dispatch(bagActions.deleteItems({id:item.id}))
    }
    else{
      dispatch(bagActions.addProduct(item))
    }
    setinbag(!inbag)
  }

  const dispatch=useDispatch()
  return (
    <>
 <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={handleBAgToggel}>
        
        {inbag?"Remove To Bag":"Add To Bag"}</button>
    </div>
</>

  )
}

export default HomeItems
