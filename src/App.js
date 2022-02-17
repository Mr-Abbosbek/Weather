import React, { useState } from "react";
import "./style/style.css";

// const api = {
//   key: "1fcb366d5a1c0db023b9be3787705329",
//   baseurl: "https://api.openweathermap.org/data/2.5/",
// };

function AllCounter() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // const search = (e) => {
  //   if (e.key === "Enter") {
  //     fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setWeather(json);
  //         setQuery("");
  //         console.log(json);
  //       });
  //   }
  // };

  const dateBuilder = (a) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[a.getDay()];
    let date = a.getDate();
    let month = months[a.getMonth()];
    let year = a.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // return (
  //   <div className={
  //     (typeof weather.main != "undefined")
  //     ? ((weather.weather[0].main === "Clouds")
  //         ? "App d-flex align-items-center cloud" :

  //         (weather.weather[0].main === "Clear")
  //         ? "App d-flex align-items-center clear" :
          
  //         (weather.weather[0].main === "Cold")
  //         ? "App d-flex align-items-center cold" :

  //         (weather.weather[0].main === "Mist")
  //         ? "App d-flex align-items-center mist" :

  //         (weather.weather[0].main === "Hot")
  //         ? "App d-flex align-items-center hot" :
          
  //         (weather.weather[0].main === "Rain")
  //         ? "App d-flex align-items-center rain" :
          
  //         (weather.weather[0].main === "Snow")
  //         ? "App d-flex align-items-center snow" :

  //         (weather.weather[0].main === "Storm")
  //         ? "App d-flex align-items-center storm" :

  //         (weather.weather[0].main === "Sunny")
  //         ? "App d-flex align-items-center sunny" :

  //         (weather.weather[0].main === "Wind")
  //         ? "App d-flex align-items-center wind"

  //         : "App d-flex align-items-center"
  //       )
  //     : "App d-flex align-items-center"
  //   }>
  //     <div className="main-container">
  //       <div className="search-box">
  //         <input
  //           type="text"
  //           className="search-bar mt-5"
  //           placeholder="Search..."
  //           onChange={(e) => setQuery(e.target.value)}
  //           value={query}
  //           onKeyPress={search}
  //         />
  //       </div>
  //       {typeof weather.main != "undefined" ? (
  //         <div className="location-box">
  //           <div className="location">
  //             {weather.name}, {weather.sys.country}
  //           </div>
  //           <div className="date">{dateBuilder(new Date())}</div>
  //           <div className="weather-box">
  //             <div className="tem">
  //               <p>{Math.round(weather.main.temp)}°c</p>
  //             </div>
  //             <div className="weather">{weather.weather[0].main}</div>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className="location-box"></div>
  //       )}
  //     </div>
  //   </div>
  // );
  return(
    <>
      
    </>
  )
}

export default AllCounter;
