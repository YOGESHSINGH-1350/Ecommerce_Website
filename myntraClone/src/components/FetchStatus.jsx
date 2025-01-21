import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchingStatus';


function FetchStatus() {
    const FetchStatus =useSelector((store)=>store.fetch)
    const dispatch=useDispatch()
      

      
    useEffect(() => {
      
      if(FetchStatus.fetchdone) return;

      const controller = new AbortController();
      const signal = controller.signal;

      dispatch(fetchStatusActions.fetchingStart())

      fetch("http://localhost:8080/items", { signal })
          .then((res) => res.json())
          .then(({items}) => {         
            dispatch(fetchStatusActions.fetchingfinished())   
            dispatch(fetchStatusActions.fetchdone())
            dispatch(itemActions.addItems(items[0]))              

          });

  
      return 
  }, [FetchStatus]);
  

    
    

  return (
    <div>

    </div>
  )
}

export default FetchStatus
