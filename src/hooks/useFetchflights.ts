import { useState, useEffect } from 'react';
import { fetchFlights } from '../utils/api';

export interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}

export const useFetchFlights = (interval: number) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFlightData = async () => {
    setLoading(true);
    try {
      const data = await fetchFlights();
      setFlights(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch flight data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightData();
    const intervalId = setInterval(fetchFlightData, interval);

    return () => clearInterval(intervalId); 
  }, [interval]);

  return { flights, loading, error };
};
