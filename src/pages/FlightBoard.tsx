import React from 'react';
import { useFetchFlights } from '../hooks/useFetchflights';
import FlightTable from '../components/FlightTable';
import Loading from '../components/Loading';
import Error from '../components/Error';

const FlightBoard: React.FC = () => {
  const { flights, loading, error } = useFetchFlights(5000); 

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return <FlightTable flights={flights} />;
};

export default FlightBoard;
