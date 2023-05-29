import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios";


export const fetchData = createAsyncThunk("card info", async()=>{
   const res = await api.get("/statistic-card-infos")

   return res.data
})


const slice = createSlice({
   name: 'card info',
   initialState: [],
   reducers:{},
   extraReducers: builder =>{
      builder.addCase(fetchData, (state, action)=> action.payload)
   }
})

export default slice.reducer