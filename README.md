# Weather App in React

This is a simple weather application built with React.js that fetches and displays weather data for a specified city using the WeatherAPI.com service.

## Features

- Fetches and displays current weather data.
- Search functionality to find weather data for any city.
- Displays detailed weather information including temperature, condition, wind, pressure, precipitation, humidity, etc.
- Responsive design with glassmorphism UI.

## Screenshots

![Weather App Screenshot](./Images/weatherApp%20in%20React%20Screenshot.png)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd weather-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory and add your WeatherAPI.com key:

   ```bash
   VITE_WEATHER_API_KEY='your_api_key_here'
   ```

5. **Run the app:**

   ```bash
   npm run dev
   ```

   The app should now be running on `http://localhost:3000`.

## Usage

- Enter the name of the city in the search box and click on "Get Weather" to fetch the weather details.
- The app will display various weather metrics such as temperature, wind speed, humidity, etc.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **WeatherAPI.com**: A service that provides weather data.

## Contributing

Contributions are welcome! If you have any suggestions, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [WeatherAPI.com](https://www.weatherapi.com/) for the weather data API.
- [React](https://reactjs.org/) for the powerful UI library.
- [Tailwind CSS](https://tailwindcss.com/) for the beautiful and flexible design framework.

### Additional Notes:
- **API Key**: Replace `your_api_key_here` in the `.env` file section with your actual WeatherAPI.com key.
- **WeatherAPI.com**: WeatherAPI.com offers various weather data, including current conditions, forecasts, historical data, and more. Make sure to refer to their documentation for details on how to properly use their API.

### Steps to Add the README to Your Project:
1. **Create a file named `README.md`** in the root directory of your project.
2. **Copy and paste** the above template into the `README.md` file.
3. **Customize** sections like "Screenshots", "Installation", "Usage", etc., with information specific to your project.
4. **Save the file**.
5. **Stage, commit, and push** the `README.md` file to your GitHub repository:

   ```bash
   git add README.md
   git commit -m "Add README"
   git push origin master
   ```
