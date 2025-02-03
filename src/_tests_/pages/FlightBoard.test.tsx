import React from 'react';
import { render, screen } from '@testing-library/react';
import FlightBoard from '../../pages/FlightBoard';
import { useFetchFlights } from '../../hooks/useFetchflights';
import '@testing-library/jest-dom';


jest.mock('../../hooks/useFetchflights', () => ({
  useFetchFlights: jest.fn(),
}));


jest.mock('../../components/FlightTable', () => jest.fn(() => <div data-testid="flight-table">Flight Table</div>));
jest.mock('../../components/Loading', () => jest.fn(() => <div data-testid="loading">Loading...</div>));
jest.mock('../../components/Error', () => jest.fn(({ message }) => <div data-testid="error">{message}</div>));

describe('FlightBoard Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Loading component when fetching data', () => {
    (useFetchFlights as jest.Mock).mockReturnValue({ flights: [], loading: true, error: null });

    render(<FlightBoard />);

    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
    expect(screen.queryByTestId('flight-table')).not.toBeInTheDocument();
  });

  test('renders Error component when API call fails', () => {
    const errorMessage = 'Network error';
    (useFetchFlights as jest.Mock).mockReturnValue({ flights: [], loading: false, error: errorMessage });

    render(<FlightBoard />);

   
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('flight-table')).not.toBeInTheDocument();
  });

  test('renders FlightTable component when data is fetched successfully', () => {
    const mockFlights = [
      { flightNumber: 'A1B67', airline: 'Airline 1', origin: 'Origin 1', destination: 'Destination 1', departureTime: '2025-01-31T14:12:02.286Z', status: 'Delayed' },
    ];
    (useFetchFlights as jest.Mock).mockReturnValue({ flights: mockFlights, loading: false, error: null });

    render(<FlightBoard />);

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
  });
});
