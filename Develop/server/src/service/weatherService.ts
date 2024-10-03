import dotenv from "dotenv";
dotenv.config();


interface Coordinates {
    lat: number;
    lon: number;
}

interface Weather {
    temperature: number;
    description: string;
    icon: string;
    date: string;
}

class WeatherService {
    private API_KEY = process.env.API_KEY;

    async fetchWeatherData(coordinates: Coordinates): Promise<any> {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${this.API_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    }

   
    private parseCurrentWeather(response: any): Weather {
        const current = response.list[0];
        return {
            temperature: current.main.temp,
            description: current.weather[0].description,
            icon: current.weather[0].icon,
            date: current.dt_txt
        };
    }

    
    private buildGeocodeQuery(city: string): string {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.API_KEY}`;
    }

    
    async getWeatherForCity(city: string): Promise<Weather> {
        const geoUrl = this.buildGeocodeQuery(city);
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();
        const coordinates: Coordinates = {
            lat: geoData[0].lat,
            lon: geoData[0].lon
        };

        const weatherData = await this.fetchWeatherData(coordinates);
        return this.parseCurrentWeather(weatherData);
    }
}

export default new WeatherService();