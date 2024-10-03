class City {
  constructor(public id: string, public name: string) {}
}

class HistoryService {
  // Read from the searchHistory.json file
  private async read(): Promise<City[]> {
      const fs = require('fs').promises;
      try {
          const data = await fs.readFile('searchHistory.json', 'utf8');
          return JSON.parse(data) as City[];
      } catch (error) {
          console.error("Error reading search history:", error);
          return [];
      }
  }

  // Write the updated cities array to the searchHistory.json file
  private async write(cities: City[]): Promise<void> {
      const fs = require('fs').promises;
      try {
          await fs.writeFile('searchHistory.json', JSON.stringify(cities, null, 2), 'utf8');
      } catch (error) {
          console.error("Error writing to search history:", error);
      }
  }

  // Get the list of cities from searchHistory.json
  async getCities(): Promise<City[]> {
      return await this.read();
  }

  // Add a city to the searchHistory.json file
  async addCity(cityName: string): Promise<void> {
      const cities = await this.getCities();
      const newCity = new City(Date.now().toString(), cityName);  // Create a new city with unique ID
      cities.push(newCity);
      await this.write(cities);
  }

  // BONUS: Remove a city from the searchHistory.json file
  async removeCity(cityId: string): Promise<void> {
      let cities = await this.getCities();
      cities = cities.filter(city => city.id !== cityId);
      await this.write(cities);
  }
}

export default new HistoryService();