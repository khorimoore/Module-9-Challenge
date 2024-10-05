# Weather Dashboard

## Description

This application provides weather data for multiple cities using the OpenWeatherMap API. Users can search for a city to view its current weather conditions and a 5-day forecast. The application stores search history and allows users to view weather data for cities they have previously searched.

## Table of Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Information](#api-information)
- [Contributing](#contributing)
- [License](#license)

## User Story

```
As a traveler, 
I want to see the weather outlook for multiple cities, 
So that I can plan a trip accordingly.
```

## Acceptance Criteria

1. Given a weather dashboard with form inputs:
   - When I search for a city, I am presented with current weather conditions for that city and that city is added to the search history.

2. When I view current weather conditions for a city, I am presented with:
   - The city name
   - The date
   - An icon representation of weather conditions
   - The temperature
   - The humidity
   - The wind speed

3. When I view future weather conditions for that city, I am presented with:
   - A 5-day forecast displaying the date, an icon representation of weather conditions, the temperature, and the humidity.

4. When I click on a city in the search history, I am presented again with current and future conditions for that city.

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```

2. Navigate into the project folder:
   ```bash
   cd weather-dashboard
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Usage

1. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api). Sign up and retrieve your unique key.

2. In the project folder, create a `.env` file and add the following line:
   ```env
   REACT_APP_API_KEY=your_openweather_api_key
   ```

3. Run the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the application.

## Features

- Search weather data for any city using the OpenWeatherMap API.
- View current weather and a 5-day forecast.
- Previous searches are saved and clickable for easy re-access.
- Responsive layout for mobile and desktop viewing.

## API Information

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data.

Example API request URL:
```bash
https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={API_key}
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request if you have any improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---