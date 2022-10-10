import Image from "next/image";
import sun from "../../public/images/sun.png"
import search from "../../public/images/search.png"

const Left = ({weather,handleClick}) => {


    return <div className="whole" >
        <div className="leftContainer">
            <h5 className="title">the.weather</h5>
                {
                    (!weather || weather.name==undefined)?
                    <div>...loading</div>:  <div className="currentWeather">
                    <h1 className="temp">{weather.main.temp.toFixed()}°</h1>

                    <div className="city">
                        <h2 className="cityName">{weather.name }</h2>

                        <h5 className="date"><span className="time">10:36</span> - <span className="date">Tuesday, Oct 2022</span> </h5>

                    </div>
                        <div className="weather">
                            <Image src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="icon" alt="/" width={70} height={70} />
                            <span className="condition">sunny</span>
                        </div> 

                </div>
                }
          

        </div>

        <div className="rightList">
        <form action="input" className="input">
            <input type="text" className="search" placeholder="Another location" onChange={(e)=>{handleClick(e.target.value)}} />
            <button type="submit" className="submit">
                <Image src={search} alt="search" width={35} height={35}/>
            </button>
        </form>

        <ul className="cities">
            <li className="city">Birmingham</li>
            <li className="city">Manchester</li>
            <li className="city" onClick={()=>{handleClick("New York")}}>New York</li>
            <li className="city">California</li>
        </ul>

        <ul className="details">
            <h4>Weather Details</h4>
            <li>
                <span>Cloudy</span>
                <span className="cloudy">12%</span>
            </li>
            <li>
                <span>Humidity</span>
                <span className="humidity">78%</span>
            </li>
            <li>
                <span>Wind</span>
                <span className="wind">1km/h</span>
            </li>
            <li>
                <span>Rain</span>
                <span className="rain">0mm</span>
            </li>
        </ul>
        </div>
        
    </div>;
};

export default Left