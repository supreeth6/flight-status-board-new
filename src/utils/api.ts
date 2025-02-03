import axios from 'axios';

const API_BASE_URL = 'https://flight-status-mock.core.travelopia.cloud';

export const fetchFlights = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flights`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch flight data');
  }
};

export const fetchFlightDetail = async (id: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/flights/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch flight details');
  }
};
