import { useEffect, useState } from "react";

function useFetchWeather(city, Apikey) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (Apikey) {
            console.log(`https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${city}`);
            
            fetch(`https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${city}`)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((error) => {
                    console.error("Error fetching weather data:", error);
                    setError(error)
                });


        } else {
            console.error("API key is not defined");
        }
    }, [city])
    return { data, error }
}

export default useFetchWeather