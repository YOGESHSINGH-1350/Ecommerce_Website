import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice'

function BagSummary() {

  const dispatch=useDispatch()
     const bagsum=useSelector(store=>store.bag)
      console.log(bagsum);
     
      // Flat the array if it's a nested array
   const bagItems = bagsum.flat();

  // Calculate the total MRP, Discount, and Final Amount using reduce
     const totalMRP = bagItems.reduce((acc, item) => acc + item.original_price, 0);
      const totalDiscount = Math.round(bagItems.reduce(
    (acc, item) => acc + (item.original_price * item.discount_percentage) / 100,
    0
  ));
  const totalAmount = bagItems.reduce((acc, item) => acc + item.current_price, 0);
  const convenienceFee = 99; // Convenience Fee

  const finalAmount = totalAmount + convenienceFee;
   


  return (
    <div className="bag-summary">
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bagsum.length} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value"> 
        ₹ {totalMRP} 
        
        </span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount"> -₹ {totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹ {convenienceFee}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹ {finalAmount}</span>
    </div>
  </div>
  <button className="btn-place-order" onClick={()=>
    dispatch(bagActions.itemsplaced())
  }>
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>

    </div>
  )
}

export default BagSummary
