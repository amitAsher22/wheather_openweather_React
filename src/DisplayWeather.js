import React from 'react'
import '../src/displayweather.css'

const DisplayWeather = ({data}) => {

  return (
    <div className='displayweather'>
    <div className='maincard'>
    <span className='cardtitle'>
        {data.name} , {data.sys.country}. weather
    </span>
    <span className='cardsubtitle'>
      As of {new Date().toLocaleTimeString()}
    </span>
        <h1>{Math.floor(data.main.temp - 273.15)}
        <sup>O</sup></h1>
        <span className='weather-main'>
          {data.weather[0].main}
        </span>
        <span className='weather-description'>
        {data.weather[0].description}

        </span>
    </div>

    </div>
  )
}

export default DisplayWeather