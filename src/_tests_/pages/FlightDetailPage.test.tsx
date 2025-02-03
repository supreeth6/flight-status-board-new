import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import FlightDetailPage from '../../pages/FlightDetailPage';
import FlightDetail from '../../components/FlightDetail';
import '@testing-library/jest-dom';

jest.mock('../../components/FlightDetail', () => jest.fn(({ flightId }) => <div data-testid="flight-detail">Flight Detail for {flightId}</div>));

describe('FlightDetailPage Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders FlightDetail with the correct flightId', () => {
    const flightId = 'A1B67';

    render(
      <MemoryRouter initialEntries={[`/flight/${flightId}`]}>
        <Routes>
          <Route path="/flight/:flightId" element={<FlightDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('flight-detail')).toHaveTextContent(`Flight Detail for ${flightId}`);
  });

  test('handles undefined flightId gracefully', () => {
    render(
      <MemoryRouter initialEntries={['/flight/']}>
        <Routes>
          <Route path="/flight/" element={<FlightDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('flight-detail')).toHaveTextContent('Flight Detail for');
  });
});
