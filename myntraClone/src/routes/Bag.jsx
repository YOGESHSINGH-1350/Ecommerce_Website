import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItems from '../components/BagItems'
import { useSelector } from 'react-redux'
import store from '../store'



function Bag() {

  const items=useSelector(store=>store.bag)
  // console.log(items);
  
  return (
   

  <main>
    <> 
    <div className="bag-page">
      {/* <BagItems item={items}></BagItems> */}
    {items.map((items) =>     
    <BagItems key={items.id} item={items}></BagItems>
      )} 
     
    </div>
    <div className="bag-page"> 
    <BagSummary></BagSummary>
    </div>
    </>
  </main>
  


  )
}

export default Bag
