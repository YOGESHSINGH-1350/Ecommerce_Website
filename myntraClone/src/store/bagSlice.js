import { createSlice } from "@reduxjs/toolkit";

const bagSlice=createSlice({
    name:'bag',
    initialState: [],
    reducers:{
        addProduct(state,action){
            // console.log("addded by reducer",action.payload);
            state.push(action.payload);
            
        },
        deleteItems:(state,action)=>{            
          return  state = state.filter(item => item.id !== action.payload.id);       
            
                           
        },
        itemsplaced:(store,action)=>{           
            return []         
                 
        }
    }
}) 

export const bagActions= bagSlice.actions

export default  bagSlice