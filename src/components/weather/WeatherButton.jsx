import  React from 'react';

function WeatherButton({ onLinkClick, city }) {
    return (
       <a href="" onClick={onLinkClick} className="weather-button">Show London's weather</a>
    )
}

export default WeatherButton;