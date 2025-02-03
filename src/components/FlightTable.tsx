import React from 'react';
import { Flight } from '../hooks/useFetchflights';
import FlightRow from './FlightRow';

interface FlightTableProps {
  flights: Flight[];
}

const FlightTable: React.FC<FlightTableProps> = ({ flights }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Flight Number</th>
          <th>Airline</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Departure Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <FlightRow key={flight.id} flight={flight} />
        ))}
      </tbody>
    </table>
  );
};

export default FlightTable;
