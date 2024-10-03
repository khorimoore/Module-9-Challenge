class City {
  constructor(public id: string, public name: string) {}
}

class HistoryService {
  
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

  private async write(cities: City[]): Promise<void> {
      const fs = require('fs').promises;
      try {
          await fs.writeFile('searchHistory.json', JSON.stringify(cities, null, 2), 'utf8');
      } catch (error) {
          console.error("Error writing to search history:", error);
      }
  }

 
  async getCities(): Promise<City[]> {
      return await this.read();
  }

  async addCity(cityName: string): Promise<void> {
      const cities = await this.getCities();
      const newCity = new City(Date.now().toString(), cityName);  
      cities.push(newCity);
      await this.write(cities);
  }

  async removeCity(cityId: string): Promise<void> {
      let cities = await this.getCities();
      cities = cities.filter(city => city.id !== cityId);
      await this.write(cities);
  }
}

export default new HistoryService();