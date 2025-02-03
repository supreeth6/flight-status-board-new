import React from 'react';
import { useParams } from 'react-router-dom';
import FlightDetail from '../components/FlightDetail';

const FlightDetailPage: React.FC = () => {
  const { flightId } = useParams<{ flightId: string | any }>();

  return <FlightDetail flightId={flightId} />;
};

export default FlightDetailPage;
