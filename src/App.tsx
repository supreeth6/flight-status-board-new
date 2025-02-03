import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import FlightBoard from './pages/FlightBoard';
import FlightDetailPage from './pages/FlightDetailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightBoard/>} />
        <Route path="/flight/:flightId" element={<FlightDetailPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
