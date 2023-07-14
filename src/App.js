import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchInfo } from './features/weather/weatherSlice';
import { WeatherCard } from './components/WeatherCard/WeatherCard';




function App() {
const dispatch=useDispatch();
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
   <div className='h-screen flex flex-col bg-[#50858B] '>
      <span className='m-auto mt-10 font-medium text-4xl font-serif text-[#A1D2CE] ' >Weather App</span>
      <span className='m-auto my-4 text-xl text-[#A1D2CE] '> Find out the current weather situation around the world</span>
      <div className=" w-auto m-auto flex">
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
      <WeatherCard/>
   </div>
  );
}

export default App;
