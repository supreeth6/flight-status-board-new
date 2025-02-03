import React, { useEffect, useState } from 'react';
import { fetchFlightDetail } from '../utils/api';

interface FlightDetailProps {
  flightId: string;
}

const FlightDetail: React.FC<FlightDetailProps> = ({ flightId }) => {
  const [flightDetails, setFlightDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFlightDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchFlightDetail(flightId);
        setFlightDetails(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch flight details');
      } finally {
        setLoading(false);
      }
    };

    getFlightDetail();
  }, [flightId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flight-detail">
      <h2>Flight Detail for {flightDetails.flightNumber}</h2>
      <p>Airline: {flightDetails.airline}</p>
      <p>Origin: {flightDetails.origin}</p>
      <p>Destination: {flightDetails.destination}</p>
      <p>Departure Time: {flightDetails.departureTime}</p>
      <p>Status: {flightDetails.status}</p>
      {/* <p>Additional Information: {flightDetails.additionalInfo}</p> */}
    </div>
  );
};

export default FlightDetail;
