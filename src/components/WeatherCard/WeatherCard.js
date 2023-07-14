import React from 'react'

import { useSelector } from 'react-redux'

export const WeatherCard = () => {
  const state = useSelector(state=>state)
  const info=state.weather.info
  const temp=(info?.main?.temp - 273).toFixed(2)
  const minTemp=(info?.main?.temp_min - 273).toFixed(2);
  const maxTemp=(info?.main?.temp_max - 273).toFixed(2);
  const pressure=info?.main?.pressure
  const hum=info?.main?.humidity
  const city=info?.name
  const desc=info?.weather?.[0]?.description
  return (
    <>
     { 
      info && ( <div className=' relative m-auto  max-w-[400px] min-w-[400px] h-96 border-[3px] border-[#A1D2CE] rounded-xl min' >
        
     <span className='flex items-center'>
     <img m-0 src={`https://openweathermap.org/img/wn/${info?.weather?.[0]?.icon}@4x.png`} />
    
     <div className='flex flex-col'>
     <span className='m-auto text-3xl font-serif text-[#A1D2CE] tracking-wider'> {city}</span>
     <span className='text-2xl font-serif font-medium text-[#78CAD2]' >{temp} °C</span>
     </div>
     </span>
     
     <span className='flex items-center justify-between'>
     <span className='text-sm ml-5 font-sans font-medium' ><span className='text-lg font-serif font-medium text-[#78CAD2]' >Min Temp : </span> {minTemp} °C</span>
     <span className='text-sm mr-5 font-sans font-medium' ><span className='text-lg font-serif font-medium text-[#78CAD2]'>Max Temp : </span>{maxTemp} °C</span>
     </span>
     <span className='flex items-center justify-between'>
     <span className='text-sm ml-5 font-sans font-medium' ><span className='text-lg font-serif font-medium text-[#78CAD2]' >Humidity : </span> {hum} % </span>
     <span className='text-sm mr-9 font-sans font-medium' ><span className='text-lg font-serif font-medium text-[#78CAD2]'>Pressure : </span>{pressure} hpa</span>
     </span>
     <span className='absolute bottom-8 left-4' >
      <span className='text-3xl font-serif font-medium text-[#78CAD2]'>{desc}</span>
     </span>

   </div>)
   }
   </>
    
  )
}

