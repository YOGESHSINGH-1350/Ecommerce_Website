import {configureStore} from '@reduxjs/toolkit'
import itemsSlice from './itemsSlice'
import fetchStatusSlice from './fetchingStatus'


const store=configureStore({
    reducer:{
        items: itemsSlice.reducer,
        fetch: fetchStatusSlice.reducer,
    }
})

export default store