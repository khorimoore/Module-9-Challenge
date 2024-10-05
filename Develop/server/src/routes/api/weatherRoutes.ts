import { Router, type Request, type Response } from 'express';
import HistoryService from '../../service/historyService'; 
import WeatherService from '../../service/weatherService';  

const router = Router();


router.post('/weather', async (req: Request, res: Response) => {
    try {
        const { city } = req.body;  // Extract city name from request body
        if (!city) {
            return res.status(400).json({ error: 'City name is required' });
        }

        // Get weather data for the city using WeatherService
        const weatherData = await WeatherService.getWeatherForCity(city);

        // Save the city to search history using HistoryService
        await HistoryService.addCity(city);

        // Return the weather data to the client
        return res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return res.status(500).json({ error: 'Failed to retrieve weather data' });
    }
});

// GET search history
router.get('/history', async (_req: Request, res: Response) => {
    try {
        // Fetch the search history from HistoryService
        const history = await HistoryService.getCities();
        return res.json(history);
    } catch (error) {
        console.error('Error fetching search history:', error);
        return res.status(500).json({ error: 'Failed to fetch search history' });
    }
});

// DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;  // Extract the city ID from the request parameters

        // Remove the city from the search history using HistoryService
        await HistoryService.removeCity(id);

        // Return a success message
        return res.json({ message: 'City deleted successfully' });
    } catch (error) {
        console.error('Error deleting city from search history:', error);
        return res.status(500).json({ error: 'Failed to delete city from search history' });
    }
});

export default router;