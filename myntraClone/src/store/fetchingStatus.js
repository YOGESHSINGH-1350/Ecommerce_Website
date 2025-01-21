import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice=createSlice({
    name:'fetch',
    initialState: {
        fetchdone: false,
        fetching: false,
      },
  
    reducers:{
        fetchdone:(state)=>{
            state.fetchdone=true;
        },
        fetchingStart:(state)=>{
            state.fetching= true;
        },
        fetchingfinished:(state)=>{
            state.fetching= false;
        },
       
    }
}) 

export const fetchStatusActions=fetchStatusSlice.actions

export default fetchStatusSlice
