import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    loading:false,
    info:[],
    error:''
}


export const fetchInfo=createAsyncThunk('weather/fetchInfo',async (location)=>{
    
    
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e604414d6a19c92430f12a4127f9a068`
    return await axios.get(URL)
    .then((res)=>res.data)
})

const weatherSlice=createSlice({
    name:'weather',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchInfo.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchInfo.fulfilled,(state,action)=>{
            console.log(action.payload)
            state.info=action.payload
            console.log(state.info)
            state.error=''
        })
        builder.addCase(fetchInfo.rejected,(state,action)=>{
            state.loading=false
            state.info=[]
            state.error=action.error.message
        })
    }
})
export default weatherSlice.reducer