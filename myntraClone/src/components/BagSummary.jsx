import React from 'react'

function BagSummary() {

    const bagsum={
        totalItem:1,
        totalMRP:990,
        totalDiscount:20,
        finalPayment:970
    }


  return (
    <div className="bag-summary">
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS {bagsum.totalItem} Items </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{bagsum.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{bagsum.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{bagsum.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order" onClick={()=>console.log("Item placed")}>
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>

    </div>
  )
}

export default BagSummary
