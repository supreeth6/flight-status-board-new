import React from 'react';
import { Link } from 'react-router-dom';
import { Flight } from '../hooks/useFetchflights';

interface FlightRowProps {
  flight: Flight;
}

const FlightRow: React.FC<FlightRowProps> = ({ flight }) => {
  return (
    <tr>
      <td>{flight.flightNumber}</td>
      <td>{flight.airline}</td>
      <td>{flight.origin}</td>
      <td>{flight.destination}</td>
      <td>{flight.departureTime}</td>
      <td>{flight.status}</td>
      <td>
        <Link to={`/flight/${flight.id}`}>Details</Link>
      </td>
    </tr>
  );
};

export default FlightRow;
