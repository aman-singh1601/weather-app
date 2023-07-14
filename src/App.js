import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from './features/weather/weatherSlice';
import { WeatherCard } from './components/WeatherCard/WeatherCard';




function App() {
const dispatch=useDispatch();
const state=useSelector(state=>state)
const info=state?.weather?.info
const [location,setLocation]=useState('');

const handleChange=(e)=>{
  setLocation(e.target.value);
}
const handleClick=(e)=>{
  e.preventDefault();
  dispatch(fetchInfo(location))
  setLocation('');
}
  return (
   <div className='h-screen flex flex-col items-center bg-[#50858B] '>
      <span className=' mt-10 mb-6 font-medium text-4xl font-serif text-[#A1D2CE] ' >Weather App</span>
      <span className=' text-xl text-[#A1D2CE] '> Find out the current weather situation around the world</span>
      <div className=" w-auto mt-4 mb-10 flex">
          <input className=" w-[160px] pt-[20px] px-[10px] pb-[10px] bg-transparent outline-none box text-xl text-[#A1D2CE]" 
           placeholder="Enter Place" 
          type='text' 
          required 
          onChange={handleChange}
          />
          <button className='text-[#A1D2CE] mx-5 bg-[#5497A7] font-bold py-2 px-2 my-2 rounded-xl transition-[900ms] ease-in-out active:bg-[#78CAD2] active:text-[#5497A7]'
            onClick={handleClick}
          >Search</button>
      </div>
      {
        info.length!==0 ? <WeatherCard/>:null
      }
      
   </div>
  );
}

export default App;
