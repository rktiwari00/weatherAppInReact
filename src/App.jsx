import { useState, useRef } from "react";
import useFetchWeather from "./customHooks/useFetchWeather";

function App() {
  const Apikey = import.meta.env.VITE_WEATHER_API_KEY;
  const [city, setCity] = useState("Ranchi");
  const [fetchCity, setFetchCity] = useState(city);
  const cityRef = useRef(null);

  const { data, error } = useFetchWeather(fetchCity, Apikey);

  const changeCity = () => {
    setFetchCity(cityRef.current.value);
    console.log(data ? data : error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 bg-[url('../Images/pexels-jplenio-1118873.jpg')] bg-cover">
      <div
        className="bg-white p-8 rounded shadow-lg w-full max-w-md"
        style={{
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-white">Weather App</h1>
        <input
          type="text"
          ref={cityRef}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter city name"
        />
        <button
          onClick={changeCity}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Get Weather
        </button>
        {data && (
          <div className="mt-6 flex text-white">
            {/* Main Weather Details */}
            <div className="flex-1 text-center">
              <h2 className="text-xl font-semibold mb-2">
                {data.location.name}, {data.location.region}, {data.location.country}
              </h2>
              <p className="mb-4">Local Time: {data.location.localtime}</p>
              <p className="text-3xl font-bold">{data.current.temp_c}°C / {data.current.temp_f}°F</p>
              <p className="text-lg">{data.current.condition.text}</p>
            </div>

            {/* Other Weather Details */}
            <div className="flex-1 grid grid-cols-2 gap-4 text-left ml-4">
              <div>
                <p>Wind:</p>
                <p className="font-medium">{data.current.wind_mph} mph / {data.current.wind_kph} kph</p>
                <p>from {data.current.wind_dir} ({data.current.wind_degree}°)</p>
              </div>
              <div>
                <p>Pressure:</p>
                <p className="font-medium">{data.current.pressure_mb} mb / {data.current.pressure_in} in</p>
              </div>
              <div>
                <p>Precipitation:</p>
                <p className="font-medium">{data.current.precip_mm} mm / {data.current.precip_in} in</p>
              </div>
              <div>
                <p>Humidity:</p>
                <p className="font-medium">{data.current.humidity}%</p>
              </div>
              <div>
                <p>Cloud Cover:</p>
                <p className="font-medium">{data.current.cloud}%</p>
              </div>
              <div>
                <p>Feels Like:</p>
                <p className="font-medium">{data.current.feelslike_c}°C / {data.current.feelslike_f}°F</p>
              </div>
              <div>
                <p>Visibility:</p>
                <p className="font-medium">{data.current.vis_km} km / {data.current.vis_miles} miles</p>
              </div>
              <div>
                <p>UV Index:</p>
                <p className="font-medium">{data.current.uv}</p>
              </div>
            </div>
          </div>
        )}
        {!data && (
          <h2 className="mt-6 text-center text-gray-500">Enter a city and click "Get Weather"</h2>
        )}
      </div>
    </div>
  );
}

export default App;
