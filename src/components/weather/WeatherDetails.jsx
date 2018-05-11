import  React from 'react';

function WeatherDetails({ city, temperature }) {
    return (
       <div className="weather-details">
           <div className="city">Current temperature in { city } - { temperature } &deg; C</div>
       </div>
    )
}

export default WeatherDetails;