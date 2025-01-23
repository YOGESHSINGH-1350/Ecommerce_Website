import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice'
import fetchStatusSlice from './fetchingStatus'
import bagSlice from './bagSlice'



const store=configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetch: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
       
        
    }
})

export default store