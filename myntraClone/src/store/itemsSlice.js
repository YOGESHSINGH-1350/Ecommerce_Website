import { createSlice } from "@reduxjs/toolkit";

const itemsSlice=createSlice({
    name:'items',
    initialState: [],
    reducers:{
        addItems:(store,action)=>{  
            console.log("FROM SLICE",action);                   
           return action.payload  
                  
        }
    }
}) 

export const itemActions=itemsSlice.actions

export default itemsSlice